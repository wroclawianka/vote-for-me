import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import i18n from '../i18n';
import { State } from '../types';
import { findUniqueId } from '../utils';

const findDemoState = (): State => ({
  question: i18n.t('demo.question'),
  options: {
    '1': { value: i18n.t('demo.options.back'), result: 7 },
    '2': { value: i18n.t('demo.options.forward'), result: 9 },
    '3': { value: i18n.t('demo.options.coffee'), result: 10 }
  }
});

const findCleanState = (): State => ({
  question: i18n.t('cleanState.question'),
  options: {
    '1': { value: i18n.t('cleanState.options.option_1'), result: 0 },
    '2': { value: i18n.t('cleanState.options.option_2'), result: 0 }
  }
});

const INITIAL_STATE = findDemoState();

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
    updateOption: (state, actions) => {
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
    updateToDemoState: () => findDemoState(),
    resetPoll: () => findCleanState()
  }
});

export const {
  updateQuestion,
  updateToDemoState,
  removeOption,
  addOption,
  updateOption,
  addSubmition,
  resetPoll
} = pollSlice.actions;

export default pollSlice.reducer;
