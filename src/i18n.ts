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
                'Editor allows you to create and edit the survey. Question and options are automatically updated'
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
              maxLenth: 'Przekroczona maksymalna d??ugo???? (80 znak??w)'
            }
          },
          header: {
            title: 'Vote for me'
          },
          editor: {
            title: {
              name: 'Edytor',
              tooltip:
                'Editor pozwala stworzy?? i edytowa?? ankiete. Pytanie i opcje s?? automatycznie aktualizowane'
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
                tooltip: 'Dodaj now?? opcje. Dozwolone 2-10 opcje'
              },
              remove: {
                tooltip: 'Usu?? opcje. Dozwolone 2-10 opcje'
              },
              placeholder: 'Nowa opcja'
            },
            button: {
              reset: {
                name: 'Wyczy????',
                tooltip: 'Wyczy???? formularz i zacznij tworzy?? ankiete od nowa'
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
                name: 'G??osuj',
                tooltip: 'Oddaj g??os. Wyniki zostan?? automatycznie podsumowane'
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
            question: 'Wola??by?? maszyne, kt??ra tylko i wy????cznie... ?',
            options: {
              back: 'Cofa ci?? w czasie',
              forward: 'Wysy??a do przysz??o??ci',
              coffee: 'Robi kaw??'
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
      },
      /* eslint-disable */
      fr: {
        translation: {
          common: {
            input: {
              maxLenth: 'Longueur max atteinte (80 caract??res)'
            }
          },
          header: {
            title: 'Vote for me'
          },
          editor: {
            title: {
              name: "L'??diteur",
              tooltip:
                "L'??diteur vous permet de cr??er et de modifier l'enqu??te. La question et les options sont automatiquement mises ?? jour"
            },
            question: {
              name: 'Question'
            },
            options: {
              title: 'Options'
            },
            option: {
              add: {
                name: 'Ajouter',
                tooltip:
                  "Ajouter une nouvelle option. Il est possible d'avoir entre 2 et 10 options'"
              },
              remove: {
                tooltip:
                  "Supprimer l'option. Il est possible d'avoir entre 2 et 10 options"
              },
              placeholder: 'Nouvelle option'
            },
            button: {
              reset: {
                name: 'R??initialiser',
                tooltip:
                  "R??initialisez le formulaire et commencez la cr??ation de l'enqu??te ?? partir de z??ro"
              },
              demoMode: {
                name: 'D??mo',
                tooltip:
                  "Utiliser l'enqu??te de d??monstration - pr??sent??e par d??faut"
              }
            }
          },
          poll: {
            title: {
              name: "L'enqu??te"
            },
            button: {
              vote: {
                name: 'Voter',
                tooltip:
                  'Soumettez votre vote. Les r??sultats seront mis ?? jour automatiquement'
              }
            }
          },
          chart: {
            title: {
              name: 'Graphique'
            },
            switch: {
              tooltip: 'Choisissez le type de graphique pr??sent??'
            }
          },
          footer: {
            designedBy: 'Con??u et faite par ',
            author: 'Dorota Zelga',
            repository: 'D??p??t'
          },
          demo: {
            question:
              'Pr??f??rez-vous avoir une machine qui... ?',
            options: {
              back: 'Remontez vous dans le temps',
              forward: 'Emm??nera vers le futur',
              coffee: 'Faire un caf??'
            }
          },
          cleanState: {
            question: 'Tapez votre question',
            options: {
              option_1: 'Option 1',
              option_2: 'Option 2'
            }
          }
        }
      }
      /* eslint-enable */
    }
  });

export default i18n;
