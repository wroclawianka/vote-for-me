import {
  Divider,
  Flex,
  Heading,
  Highlight,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const style = useMultiStyleConfig('design-system/header', {});
  const { t } = useTranslation();

  return (
    <>
      <Flex sx={style.root}>
        <Heading sx={style.heading}>
          <Highlight query="me" styles={style.highlight}>
            {t('header.title')}
          </Highlight>
        </Heading>
      </Flex>
      <Divider orientation="horizontal" />
    </>
  );
};
