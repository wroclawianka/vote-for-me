import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Option, State } from '../../../types';
import { addOption, removeOption, updatePoll } from '../../../slices/pollSlice';
import { Tooltip } from '../../design-system';

export const OptionsForm: FunctionComponent = () => {
  const { options } = useSelector((state: { poll: State }) => state.poll);
  const dispatch = useDispatch();
  const [isAutoFocus, setAutoFocus] = useState(false);

  const addNewOption = () => {
    dispatch(addOption());
    setAutoFocus(true);
  };

  const editOption = (id: string, value: string) => {
    if (value.length > 80) return;
    const option: Option = { ...options[id], value: value };
    dispatch(updatePoll({ id, value: option.value }));
  };

  const removeOptionById = (id: string) => {
    dispatch(removeOption({ id }));
  };

  const addOptionLabel =
    'Add a new option. It is possible to have between 2-10 options';
  const removeOptionLabel =
    'Remove option. It is possible to have between 2-10 options';
  const maximumInputLength = 'Max length reached (80 characters)';
  const optionPlaceholder = 'New option';

  return (
    <Grid>
      <GridItem>
        <Flex direction="row" justifyContent="space-between">
          <Heading size="sm" alignSelf="center">
            Options
          </Heading>
          <Tooltip label={addOptionLabel} aria-label="add-option">
            <Button
              size="sm"
              leftIcon={<AddIcon />}
              float="right"
              aria-label="add-option"
              onClick={() => addNewOption()}
              mb={2}
              disabled={Object.entries(options).length >= 10}
            >
              Add option
            </Button>
          </Tooltip>
        </Flex>
      </GridItem>
      {Object.entries(options).map(([key, option]) => (
        <GridItem key={key} mb={2}>
          <Flex>
            <Tooltip
              label={maximumInputLength}
              isDisabled={option.value.length < 80}
            >
              <Input
                value={option.value}
                onChange={(event) => editOption(key, event.target.value)}
                mr={2}
                placeholder={optionPlaceholder}
                autoFocus={isAutoFocus}
              />
            </Tooltip>
            <Tooltip label={removeOptionLabel} aria-label="remove-option">
              <IconButton
                aria-label="delete"
                disabled={Object.entries(options).length <= 2}
                onClick={() => removeOptionById(key)}
              >
                <MinusIcon />
              </IconButton>
            </Tooltip>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};
