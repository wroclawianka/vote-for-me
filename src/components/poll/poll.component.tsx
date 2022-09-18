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
    <Container sx={style.poll}>
      <Flex justifyContent="center" pb={4}>
        <Heading size="lg" fontFamily="Permanent Marker">
          Poll
        </Heading>
      </Flex>
      <Heading size="sm" mb={2}>
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
      <Flex sx={style.btns}>
        <Button
          mt={2}
          colorScheme="teal"
          size="sm"
          leftIcon={<CheckIcon />}
          onClick={() => submitPoll()}
        >
          Submit
        </Button>
      </Flex>
    </Container>
  );
};
