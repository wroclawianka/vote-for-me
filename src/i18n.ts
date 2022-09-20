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
                tooltip: 'Dodaj nową opcje. Dozwolone 2-10 opcje'
              },
              remove: {
                tooltip: 'Usuń opcje. Dozwolone 2-10 opcje'
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
                name: 'Głosuj',
                tooltip: 'Oddaj głos. Wyniki zostaną automatycznie podsumowane'
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
      },
      /* eslint-disable */
      fr: {
        translation: {
          common: {
            input: {
              maxLenth: 'Longueur max atteinte (80 caractères)'
            }
          },
          header: {
            title: 'Vote for me'
          },
          editor: {
            title: {
              name: "L'éditeur",
              tooltip:
                "L'éditeur vous permet de créer et de modifier l'enquête. La question et les options sont automatiquement mises à jour"
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
                name: 'Réinitialiser',
                tooltip:
                  "Réinitialisez le formulaire et commencez la création de l'enquête à partir de zéro"
              },
              demoMode: {
                name: 'Démo',
                tooltip:
                  "Utiliser l'enquête de démonstration - présentée par défaut"
              }
            }
          },
          poll: {
            title: {
              name: "L'enquête"
            },
            button: {
              vote: {
                name: 'Voter',
                tooltip:
                  'Soumettez votre vote. Les résultats seront mis à jour automatiquement'
              }
            }
          },
          chart: {
            title: {
              name: 'Graphique'
            },
            switch: {
              tooltip: 'Choisissez le type de graphique présenté'
            }
          },
          footer: {
            designedBy: 'Conçu et faite par ',
            author: 'Dorota Zelga',
            repository: 'Dépôt'
          },
          demo: {
            question:
              'Préférez-vous avoir une machine qui... ?',
            options: {
              back: 'Remontez vous dans le temps',
              forward: 'Emmènera vers le futur',
              coffee: 'Faire un café'
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
