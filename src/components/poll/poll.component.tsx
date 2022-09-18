import { FunctionComponent, useState } from 'react';
import {
  Button,
  Container,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types';
import { addSubmition } from '../../slices/pollSlice';
import { Heading as Title } from '../design-system';

export const Poll: FunctionComponent = () => {
  const style = useMultiStyleConfig('poll', {});
  const { question, options } = useSelector(
    (state: { poll: State }) => state.poll
  );
  const dispatch = useDispatch();
  const firstOption = Object.keys(options)[0];
  const [value, setValue] = useState(firstOption);
  const submitPoll = () => dispatch(addSubmition(value));

  return (
    <Container sx={style.root}>
      <Title>Poll</Title>
      <Heading size="sm" sx={style.question}>
        {question}
      </Heading>
      <RadioGroup onChange={(key) => setValue(key)} value={value}>
        <Stack>
          {Object.entries(options).map(([key, option]) => (
            <Radio value={key} key={key}>
              {option.value}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Flex sx={style.buttonsContainer}>
        <Button
          colorScheme="teal"
          size="sm"
          leftIcon={<CheckIcon />}
          onClick={() => submitPoll()}
          sx={style.button}
        >
          Vote
        </Button>
      </Flex>
    </Container>
  );
};
