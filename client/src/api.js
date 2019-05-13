/**
 * Retrieve a JSON list of all the available programs.
 */
const getPrograms = () => {
  return fetch('http://localhost:5000/api/programs').then(data => {
    return data.json();
  });
};

/**
 * Retrieve a single program by ID.
 * @param {*} id ID of the program to retrieve.
 */
const getProgramByID = id => {
  return fetch(`http://localhost:5000/api/programs/${id}`).then(data => {
    return data.json();
  });
};

/**
 * Retrieve a JSON list of all the available sections.
 */
const getSections = () => {
  return fetch('http://localhost:5000/api/sections').then(data => {
    return data.json();
  });
};

/**
 * Retrieve a single section by ID.
 * @param {*} id ID of the section to retrieve.
 */
const getSectionByID = id => {
  return fetch(`http://localhost:5000/api/sections/${id}`).then(data => {
    return data.json();
  });
};

export {
  getPrograms,
  getProgramByID,
  getSections,
  getSectionByID
};
