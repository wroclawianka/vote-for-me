import {
  Box,
  Button,
  Container,
  Flex,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { DeleteIcon, StarIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { QuestionInput } from './questionInput';
import { resetPoll, updateToDemoState } from '../../slices/pollSlice';
import { Heading as Title } from '../design-system';
import { OptionsForm } from './optionsForm';

export const Editor: FunctionComponent = () => {
  const style = useMultiStyleConfig('editor', {});
  const dispatch = useDispatch();

  const resetForm = () => dispatch(resetPoll());
  const updateToDemoPoll = () => dispatch(updateToDemoState());

  return (
    <Container sx={style.root}>
      <Flex mb="2">
        <Title>Editor</Title>
        <Flex sx={style.buttonsContainer}>
          <Button
            colorScheme="teal"
            size="sm"
            leftIcon={<DeleteIcon />}
            onClick={resetForm}
            variant="ghost"
          >
            Reset
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            leftIcon={<StarIcon />}
            onClick={updateToDemoPoll}
          >
            Demo
          </Button>
        </Flex>
      </Flex>
      <Box mb={4}>
        <QuestionInput />
      </Box>
      <Box mb={4}>
        <OptionsForm />
      </Box>
    </Container>
  );
};
