import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Highlight,
  useMultiStyleConfig
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../language-selector';

export const Header = () => {
  const style = useMultiStyleConfig('design-system/header', {});
  const { t } = useTranslation();

  return (
    <>
      <Grid sx={style.root}>
        <Heading sx={style.heading}>
          <Highlight query="me" styles={style.highlight}>
            {t('header.title')}
          </Highlight>
        </Heading>
        <LanguageSelector />
      </Grid>
      <Divider orientation="horizontal" />
    </>
  );
};
