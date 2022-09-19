import { GridItem, useMultiStyleConfig } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type Props = React.PropsWithChildren;

export const ContentSection: FunctionComponent<Props> = ({ children }) => {
  const style = useMultiStyleConfig('content-section', {});

  return <GridItem sx={style.root}>{children}</GridItem>;
};
