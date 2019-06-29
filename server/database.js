const Pool = require('pg').Pool
const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'health',
  password: '',
  port: 5432,
})

const getPrograms = (request, response) => {
  pool.query('SELECT * FROM programs ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(results.rows);
  })
};

const getProgram = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM programs WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    const theProgram =  results.rows.find(program => {
      return program.id === id;
    });
    response.status(200).send(theProgram);
  })
};

const getSections = (request, response) => {
    pool.query('SELECT * FROM sections ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send({sections: results.rows});
    })
};

const getSection = (request, response) => {
    const id = parseInt(request.params.id, 10);
    pool.query('SELECT * FROM sections WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      const theSection =  results.rows.find(section => {
        return section.id === id;
      });
      response.status(200).send(theSection);
    })
};

export {
  getPrograms,
  getProgram,
  getSections,
  getSection
};
