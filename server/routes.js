const db = require('./database')

const initRoutes = (app) => {

  app.get('/api/programs', db.getPrograms);
  app.get('/api/programs/:id', db.getProgram);

  app.get('/api/sections', db.getSections);
  app.get('/api/sections/:id', db.getSection);
}

export { initRoutes }
