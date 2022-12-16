import { join } from 'path';
import { lstatSync, readdirSync } from 'fs';

const defaultLanguage = 'en';

const languages = readdirSync(join(__dirname, 'locales')).filter((fileName) => {
  const joinedPath = join(join(__dirname, 'locales'), fileName);

  return lstatSync(joinedPath).isDirectory();
});

languages.splice(languages.indexOf(defaultLanguage), 1);
languages.unshift(defaultLanguage);

module.exports = {
  languages,
  defaultLanguage,
};
