import { FunctionComponent } from 'react';
import { Tooltip as ChackraTooltip, TooltipProps } from '@chakra-ui/react';

type Props = TooltipProps;

export const Tooltip: FunctionComponent<Props> = ({ label, ...rest }) => {
  return (
    <ChackraTooltip
      {...rest}
      placement="top"
      hasArrow
      label={label}
    ></ChackraTooltip>
  );
};
