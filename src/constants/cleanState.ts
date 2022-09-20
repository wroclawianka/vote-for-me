import { State } from '../types';
import i18n from './../i18n';

export const CLEAN_STATE: State = {
  question: i18n.t('cleanState.question'),
  options: {
    '1': { value: i18n.t('cleanState.options.option_1'), result: 0 },
    '2': { value: i18n.t('cleanState.options.option_2'), result: 0 }
  }
};
