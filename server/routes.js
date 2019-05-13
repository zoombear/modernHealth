import {
  getPrograms,
  getProgram,
  getSections,
  getSection,
} from './database';

const initRoutes = (app) => {

  app.get('/api/programs', (req, res) => {
    return res.status(200).send(getPrograms());
  });

  app.get('/api/programs/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    console.log(id);
    const program = getProgram(id);

    if (!program) {
      return res.status(404).send({
        error: 'program not found',
      });
    }

    return res.status(200).send(program);
  });

  app.get('/api/sections', (req, res) => {
    return res.status(200).send({
      sections: getSections(),
    });
  });

  app.get('/api/sections/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const section = getSection(id);

    if (!section) {
      return res.status(404).send({
        error: 'section not found',
      });
    }

    return res.status(200).send(section);
  });

}

export { initRoutes }
