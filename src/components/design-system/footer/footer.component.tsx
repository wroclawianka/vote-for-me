import {
  Box,
  Divider,
  Flex,
  Link,
  Text,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
  const style = useMultiStyleConfig('design-system/footer', {});
  const githubProfileHref = 'https://github.com/wroclawianka';
  const repositoryHref = 'https://github.com/wroclawianka/vote-for-me';

  return (
    <>
      <Divider orientation="horizontal" />
      <Flex sx={style.root}>
        <Box>
          <Text sx={style.text}>
            Design and made by{' '}
            <Link href={githubProfileHref} sx={style.link}>
              Dorota Zelga
            </Link>
            |
            <Link href={repositoryHref} sx={style.link}>
              Repository
            </Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
};
