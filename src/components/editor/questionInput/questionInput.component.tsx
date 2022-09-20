import { Heading, Input } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../types';
import { updateQuestion } from '../../../slices/pollSlice';
import { Tooltip } from '../../design-system';
import { useTranslation } from 'react-i18next';

export const QuestionInput: FunctionComponent = () => {
  const { question } = useSelector((state: { poll: State }) => state.poll);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const updatePollQuestion = (value: string) => {
    if (value.length > 80) return;
    dispatch(updateQuestion(value));
  };

  return (
    <>
      <Heading size="sm" mb={2}>
        {t('editor.question.name')}
      </Heading>
      <Tooltip
        label={t('common.input.maxLength')}
        isDisabled={question.length < 80}
      >
        <Input
          value={question}
          onChange={(event) => updatePollQuestion(event.target.value)}
          mb={4}
        />
      </Tooltip>
    </>
  );
};
