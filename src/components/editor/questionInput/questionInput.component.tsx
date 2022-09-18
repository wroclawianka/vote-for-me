import { Heading, Input } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../types';
import { updateQuestion } from '../../../slices/pollSlice';
import { Tooltip } from '../../design-system';

export const QuestionInput: FunctionComponent = () => {
  const { question } = useSelector((state: { poll: State }) => state.poll);
  const dispatch = useDispatch();

  const updatePollQuestion = (value: string) => {
    if (value.length > 80) return;
    dispatch(updateQuestion(value));
  };

  const maximumInputLength = 'Max length reached (80 characters)';

  return (
    <>
      <Heading size="sm" mb={2}>
        Question
      </Heading>
      <Tooltip label={maximumInputLength} isDisabled={question.length < 80}>
        <Input
          value={question}
          onChange={(event) => updatePollQuestion(event.target.value)}
          mb={4}
        />
      </Tooltip>
    </>
  );
};
