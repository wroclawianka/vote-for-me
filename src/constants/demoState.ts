import i18n from './../i18n';

const demoOptions = {
  '1': { value: i18n.t('demo.options.back'), result: 7 },
  '2': { value: i18n.t('demo.options.forward'), result: 9 },
  '3': { value: i18n.t('demo.options.coffee'), result: 10 }
};

export const DEMO_STATE = {
  question: i18n.t('demo.question'),
  options: demoOptions
};
