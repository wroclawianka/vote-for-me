import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { DEMO_STATE } from '../constants';
import { State } from '../types';
import { findUniqueId } from '../utils';

const INITIAL_STATE: State = DEMO_STATE;

const CLEAN_STATE: State = {
  question: 'Type your question',
  options: {
    '1': { value: 'Option 1', result: 0 },
    '2': { value: 'Option 2', result: 0 }
  }
};

export const pollSlice = createSlice({
  name: 'poll',
  initialState: INITIAL_STATE,
  reducers: {
    updateQuestion: (state, actions) => {
      state.question = actions.payload;
    },
    addOption: (state) => {
      const id = findUniqueId();
      state.options = {
        ...state.options,
        [id]: { value: '', result: 0 }
      };
    },
    removeOption: (state, actions) => {
      const { id } = actions.payload;
      state.options = _.omit(state.options, [id]);
    },
    updatePoll: (state, actions) => {
      const { id, value } = actions.payload;

      state.options = {
        ...state.options,
        [id]: {
          ...state.options[id],
          value: value
        }
      };
    },
    addSubmition: (state, actions) => {
      const key = actions.payload;
      const option = state.options[key];
      state.options = {
        ...state.options,
        [key]: { ...option, result: option.result + 1 }
      };
    },
    updatToDemoState: () => INITIAL_STATE,
    resetPoll: () => CLEAN_STATE
  }
});

export const {
  updateQuestion,
  updatToDemoState,
  removeOption,
  addOption,
  updatePoll,
  addSubmition,
  resetPoll
} = pollSlice.actions;

export default pollSlice.reducer;
