import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Tooltip,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { DeleteIcon, InfoIcon, StarIcon } from '@chakra-ui/icons';
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

  const editorTooltipLabel = `Editor allows you to create and edit the survey. 
  Question and options are automaticly updated`;
  const resetFormLabel =
    'Reset the form and start survey creation from scratch';
  const demoModeLabel = 'Use demo survey - presented by default';

  return (
    <Container sx={style.root}>
      <Flex mb="2">
        <Flex gap="2">
          <Title>Editor</Title>
          <Tooltip
            label={editorTooltipLabel}
            aria-label="editor-description"
            placement="top"
            hasArrow
          >
            <IconButton
              variant="ghost"
              aria-label="info-icon"
              icon={<InfoIcon />}
            />
          </Tooltip>
        </Flex>
        <Flex sx={style.buttonsContainer}>
          <Tooltip
            label={resetFormLabel}
            aria-label="reset-button"
            placement="top"
            hasArrow
          >
            <Button
              colorScheme="teal"
              size="sm"
              leftIcon={<DeleteIcon />}
              onClick={resetForm}
              variant="ghost"
              aria-label="reset-button"
            >
              Reset
            </Button>
          </Tooltip>
          <Tooltip
            label={demoModeLabel}
            aria-label="demo-mode"
            placement="top"
            hasArrow
          >
            <Button
              colorScheme="teal"
              size="sm"
              leftIcon={<StarIcon />}
              onClick={updateToDemoPoll}
              variant="outline"
              aria-label="demo-mode"
            >
              Demo
            </Button>
          </Tooltip>
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
