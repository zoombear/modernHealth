import JsonDB from 'node-json-db';
const json_programs = require('./programs.json');
const json_sections = require('./sections.json');

const db = new JsonDB('../mainDB', true, true);

const loadDB = () => {
  console.log('Initializing database...');

  db.delete('/programs');
  db.push('/programs', json_programs, true);

  db.delete('/sections');
  db.push('/sections', json_sections, true);

  console.log('Done!');
};

const getPrograms = () => {
  return db.getData('/programs');
};

const getProgram = id => {
  const programs = db.getData('/programs');

  return programs.find(program => {
    return program.id === id;
  });
};

const getSections = () => {
  return db.getData('/sections');
};

const getSection = id => {
  const sections = db.getData('/sections');

  return sections.find(section => {
    return section.id === id;
  });
};

export {
  loadDB,
  getPrograms,
  getProgram,
  getSections,
  getSection
};
