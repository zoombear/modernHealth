const programsData = require('../../../data/programs');
const sectionsData = require('../../../data/sections');

exports.seed = function(knex, Promise) {
  return knex('sections').del()
  .then(() => {
    return knex('programs').del();
  })
  .then(() => {
    return knex('programs').insert(programsData);
  })
  .then(() => {
    let sectionPromises = [];
    sectionsData.forEach((section) => {
      let program = section.program_id;
      sectionPromises.push(createSection(knex, section, program));
    });
    return Promise.all(sectionPromises);
  });
};
const createSection = (knex, section, program) => {
  return knex('programs').where('id', program).first()
  .then((programRecord) => {
    return knex('sections').insert({
      name: section.name,
      description: section.description,
      overview_image: section.overview_image,
      html_content: section.html_content,
      program_id: programRecord.id
    });
  });
};
