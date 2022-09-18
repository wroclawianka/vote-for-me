import { FunctionComponent } from 'react';
import {
  Heading as ChackraHeading,
  Flex,
  useMultiStyleConfig
} from '@chakra-ui/react';

type Props = React.PropsWithChildren;

export const Heading: FunctionComponent<Props> = ({ children }) => {
  const style = useMultiStyleConfig('heading', {});
  return (
    <Flex sx={style.root}>
      <ChackraHeading sx={style.heading} size="lg">
        {children}
      </ChackraHeading>
    </Flex>
  );
};
