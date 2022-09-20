import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          common: {
            input: {
              maxLenth: 'Max length reached (80 characters)'
            }
          },
          header: {
            title: 'Vote for me'
          },
          editor: {
            title: {
              name: 'Editor',
              tooltip:
                'Editor allows you to create and edit the survey. Question and options are automaticly updated'
            },
            question: {
              name: 'Question'
            },
            options: {
              title: 'Options'
            },
            option: {
              add: {
                name: 'Add option',
                tooltip:
                  'Add a new option. It is possible to have between 2-10 options'
              },
              remove: {
                tooltip:
                  'Remove option. It is possible to have between 2-10 options'
              },
              placeholder: 'New option'
            },
            button: {
              reset: {
                name: 'Reset',
                tooltip: 'Reset the form and start survey creation from scratch'
              },
              demoMode: {
                name: 'Demo',
                tooltip: 'Use demo survey - presented by default'
              }
            }
          },
          poll: {
            title: {
              name: 'Poll'
            },
            button: {
              vote: {
                name: 'Vote',
                tooltip: 'Submit your vote. Results will be auto-updated'
              }
            }
          },
          chart: {
            title: {
              name: 'Chart'
            },
            switch: {
              tooltip: 'Choose the type of the presented chart'
            }
          },
          footer: {
            designedBy: 'Designed and made by ',
            author: 'Dorota Zelga',
            repository: 'Repository'
          },
          demo: {
            question: 'Would you rather have a time machine that can only... ?',
            options: {
              back: 'Back in time',
              forward: 'Forward in time',
              coffee: 'Make a coffee'
            }
          },
          cleanState: {
            question: 'Type your question',
            options: {
              option_1: 'Option 1',
              option_2: 'Option 2'
            }
          }
        }
      },
      pl: {
        translation: {
          common: {
            input: {
              maxLenth: 'Przekroczona maksymalna długość (80 znaków)'
            }
          },
          header: {
            title: 'Vote for me'
          },
          editor: {
            title: {
              name: 'Edytor',
              tooltip:
                'Editor pozwala stworzyć i edytować ankiete. Pytanie i opcje są automatycznie aktualizowane'
            },
            question: {
              name: 'Pytanie'
            },
            options: {
              title: 'Opcje'
            },
            option: {
              add: {
                name: 'Dodaj opcje',
                tooltip: 'Dodaj nową opcje. Dozwolone 2-10 opcji'
              },
              remove: {
                tooltip: 'Usuń opcje. Dozwolone 2-10 opcji'
              },
              placeholder: 'Nowa opcja'
            },
            button: {
              reset: {
                name: 'Wyczyść',
                tooltip: 'Wyczyść formularz i zacznij tworzyć ankiete od nowa'
              },
              demoMode: {
                name: 'Demo',
                tooltip: 'Ankieta demonstracyjna'
              }
            }
          },
          poll: {
            title: {
              name: 'Ankieta'
            },
            button: {
              vote: {
                name: 'Zagłosuj',
                tooltip: 'Oddaj głos. Wyniki zostaną automatycznie pozsumowane'
              }
            }
          },
          chart: {
            title: {
              name: 'Wykres'
            },
            switch: {
              tooltip: 'Wybierz typ wykresu'
            }
          },
          footer: {
            designedBy: 'Projekt i wykonanie -',
            author: 'Dorota Zelga',
            repository: 'Repozytorium'
          },
          demo: {
            question: 'Wolałbyś maszyne, która tylko i wyłącznie... ?',
            options: {
              back: 'Cofa cię w czasie',
              forward: 'Wysyła do przyszłości',
              coffee: 'Robi kawę'
            }
          },
          cleanState: {
            question: 'Podaj pytanie',
            options: {
              option_1: 'Opcja 1',
              option_2: 'Opcja 2'
            }
          }
        }
      }
    }
  });

export default i18n;
