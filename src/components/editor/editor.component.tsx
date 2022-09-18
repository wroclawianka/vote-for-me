import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon, StarIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Option, State } from '../../types';
import { QuestionInput } from './questionInput';
import {
  addOption,
  removeOption,
  resetPoll,
  updatToDemoState,
  updatePoll
} from '../../slices/pollSlice';

export const Editor: FunctionComponent = () => {
  const style = useMultiStyleConfig('editor', {});
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

  const resetForm = () => dispatch(resetPoll());
  const updateToDemoPoll = () => dispatch(updatToDemoState());

  return (
    <Container sx={style.editor}>
      <>
        <Flex justifyContent="center" pb={4}>
          <Heading size="lg" fontFamily="Permanent Marker">
            Editor
          </Heading>
        </Flex>
        <Box mb={4}>
          <QuestionInput />
        </Box>
        <Box mb={4}>
          <Heading size="sm" mb={2}>
            Options
          </Heading>
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
        </Box>
      </>
      <Flex sx={style.btns}>
        <Button
          colorScheme="teal"
          size="sm"
          leftIcon={<StarIcon />}
          onClick={updateToDemoPoll}
        >
          Demo
        </Button>
        <Button
          colorScheme="teal"
          size="sm"
          leftIcon={<DeleteIcon />}
          onClick={resetForm}
          variant="ghost"
        >
          Reset
        </Button>
      </Flex>
    </Container>
  );
};
