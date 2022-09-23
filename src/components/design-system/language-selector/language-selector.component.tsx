import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { updateToDemoState } from '../../../slices/pollSlice';

const lngs = {
  en: 'EN',
  fr: 'FR',
  pl: 'PL'
};

export const LanguageSelector: FunctionComponent = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;
  const dispatch = useDispatch();

  const aaa = (key: string) => {
    i18n.changeLanguage(key);
    dispatch(updateToDemoState());
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedLanguage.toUpperCase()}
      </MenuButton>
      <MenuList minW="0" w="70px">
        {Object.entries(lngs).map(([key, value]) => (
          <MenuItem
            key={key}
            onClick={() => aaa(key)}
            isDisabled={key === selectedLanguage}
          >
            {value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
