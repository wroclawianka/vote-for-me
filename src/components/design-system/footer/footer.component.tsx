import {
  Box,
  Divider,
  Flex,
  Link,
  Text,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { githubProfileHref, repositoryHref } from '../../../constants';

export const Footer: FunctionComponent = () => {
  const style = useMultiStyleConfig('design-system/footer', {});
  const { t } = useTranslation();

  return (
    <>
      <Divider orientation="horizontal" />
      <Flex sx={style.root}>
        <Box>
          <Text sx={style.text}>
            {t('footer.designedBy')}
            <Link href={githubProfileHref} sx={style.link}>
              {t('footer.author')}
            </Link>{' '}
            |{' '}
            <Link href={repositoryHref} sx={style.link}>
              {t('footer.repository')}
            </Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
};
