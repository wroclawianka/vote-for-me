import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'EN' | 'PL';

const lngs = {
  en: 'EN',
  pl: 'PL'
};

export const LanguageSelector: FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedLanguage.toUpperCase()}
      </MenuButton>

      <MenuList>
        {Object.entries(lngs).map(([key, value]) => (
          <MenuItem
            key={key}
            onClick={() => i18n.changeLanguage(key)}
            isDisabled={key === selectedLanguage}
          >
            {value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
