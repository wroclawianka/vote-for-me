import {
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Input
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Option, State } from '../../../types';
import { addOption, removeOption, updatePoll } from '../../../slices/pollSlice';

export const OptionsForm: FunctionComponent = () => {
  const { options } = useSelector((state: { poll: State }) => state.poll);
  const dispatch = useDispatch();

  const addNewOption = () => {
    dispatch(addOption());
  };

  const editOption = (id: string, value: string) => {
    const option: Option = { ...options[id], value: value };
    dispatch(updatePoll({ id, value: option.value }));
  };

  const removeOptionById = (id: string) => {
    dispatch(removeOption({ id }));
  };

  return (
    <Grid>
      {Object.entries(options).map(([key, option]) => (
        <GridItem key={key} mb={2}>
          <Flex>
            <Input
              value={option.value}
              onChange={(event) => editOption(key, event.target.value)}
              mr={2}
            />
            <IconButton
              aria-label="delete"
              disabled={Object.entries(options).length <= 2}
            >
              <MinusIcon onClick={() => removeOptionById(key)} />
            </IconButton>
          </Flex>
        </GridItem>
      ))}
      <GridItem>
        <Button
          size="sm"
          leftIcon={<AddIcon />}
          float="right"
          onClick={() => addNewOption()}
        >
          Add option
        </Button>
      </GridItem>
    </Grid>
  );
};
