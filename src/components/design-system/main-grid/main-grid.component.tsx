import { Grid, useMultiStyleConfig } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainGrid: FunctionComponent<Props> = ({ children }) => {
  const style = useMultiStyleConfig('main-grid', {});

  return (
    <Grid sx={style.root} templateColumns={'repeat(3, 1fr)'}>
      {children}
    </Grid>
  );
};
