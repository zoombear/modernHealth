import { getSections } from './api';

const linkSections = () => {

  return getSections().then(sections => {
    const hashMap = {};

    // Group all sessions by program ID in hash map
    sections.sections.forEach(section => {
      if (hashMap[section.program_id]) {
        hashMap[section.program_id].sections.push(
          section,
        );
      } else {
        hashMap[section.program_id] = {
          id: section.program_id,
          sections: [section],
        };
      }
    });

    // convert hash map to array
    let programs = [];
    for (var property in hashMap) {
      if (hashMap.hasOwnProperty(property)) {
        programs.push(hashMap[property]);
      }
    }
    return programs;
  });
};

export { linkSections };
