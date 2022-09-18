import { Box, Flex, useMultiStyleConfig } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

type Props = {
  children: React.ReactNode;
};

export const Layout: FunctionComponent<Props> = ({ children }) => {
  const style = useMultiStyleConfig('layout', {});

  return (
    <Flex flexDirection="column" sx={style.mainContainer}>
      <Header />
      <Box sx={style.mainPage}>{children}</Box>
      <Footer />
    </Flex>
  );
};
