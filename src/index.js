
export const LANGS = [
  { code: 'ca', name: 'Catalán' },
  { code: 'de', name: 'Alemán' },
  { code: 'en', name: 'Inglés' },
  { code: 'es', name: 'Español' },
  { code: 'eu', name: 'Euskera' },
  { code: 'fr', name: 'Francés' },
  { code: 'it', name: 'Italiano' },
  { code: 'ja', name: 'Japonés' },
  { code: 'pt', name: 'Portugués' },
  { code: 'ru', name: 'Ruso' },
]


export function getLang(code) {
  return LANGS.find(lang => lang.code === code)
}
