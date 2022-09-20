import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { DeleteIcon, InfoIcon, StarIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { QuestionInput } from './questionInput';
import { resetPoll, updateToDemoState } from '../../slices/pollSlice';
import { Heading as Title, Tooltip } from '../design-system';
import { OptionsForm } from './optionsForm';
import { useTranslation } from 'react-i18next';

export const Editor: FunctionComponent = () => {
  const style = useMultiStyleConfig('editor', {});
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const resetForm = () => dispatch(resetPoll());
  const updateToDemoPoll = () => dispatch(updateToDemoState());

  return (
    <Container sx={style.root}>
      <Flex mb="2">
        <Flex gap="2">
          <Title>{t('editor.title.name')}</Title>
          <Tooltip
            label={t('editor.title.tooltip')}
            aria-label="editor-description"
          >
            <IconButton
              variant="ghost"
              aria-label="editor-description"
              icon={<InfoIcon />}
            />
          </Tooltip>
        </Flex>
        <Flex sx={style.buttonsContainer}>
          <Tooltip
            label={t('editor.button.reset.tooltip')}
            aria-label="reset-button"
          >
            <Button
              colorScheme="teal"
              size="sm"
              leftIcon={<DeleteIcon />}
              onClick={resetForm}
              variant="ghost"
              aria-label="reset-button"
            >
              {t('editor.button.reset.name')}
            </Button>
          </Tooltip>
          <Tooltip
            label={t('editor.button.demoMode.tooltip')}
            aria-label="demo-mode"
          >
            <Button
              colorScheme="teal"
              size="sm"
              leftIcon={<StarIcon />}
              onClick={updateToDemoPoll}
              variant="outline"
              aria-label="demo-mode"
            >
              {t('editor.button.demoMode.name')}
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
