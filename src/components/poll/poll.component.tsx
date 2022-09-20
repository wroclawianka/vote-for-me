import { FunctionComponent, useState } from 'react';
import {
  Button,
  Container,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types';
import { addSubmition } from '../../slices/pollSlice';
import { Heading as Title } from '../design-system';
import { useTranslation } from 'react-i18next';

export const Poll: FunctionComponent = () => {
  const style = useMultiStyleConfig('poll', {});
  const { t } = useTranslation();
  const { question, options } = useSelector(
    (state: { poll: State }) => state.poll
  );
  const dispatch = useDispatch();
  const firstOption = Object.keys(options)[0];
  const [value, setValue] = useState(firstOption);
  const submitPoll = () => dispatch(addSubmition(value));

  return (
    <Container sx={style.root}>
      <Flex justifyContent="space-between" mb="2">
        <Title>{t('poll.title.name')}</Title>
        <Flex sx={style.buttonsContainer}>
          <Tooltip
            label={t('poll.button.vote.tooltip')}
            aria-label="vote-button"
            placement="top"
            hasArrow
          >
            <Button
              colorScheme="teal"
              size="sm"
              leftIcon={<CheckIcon />}
              aria-label="vote-button"
              onClick={() => submitPoll()}
            >
              {t('poll.button.vote.name')}
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
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
    </Container>
  );
};
