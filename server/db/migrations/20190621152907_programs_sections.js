// programs:    {"id":1,"name":"Leadership Development Program","description":"Leadership Development Description"},

// sections:     {"id":1, "program_id":1, "name":"name", "description":"description", "overview_image":"","html_content":""},
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('programs', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('description');
      }),
      knex.schema.createTable('sections', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('description');
        table.string('overview_image');
        table.string('html_content');
        table.integer('program_id').unsigned()
          .references('programs.id');
      })
    ]);
  };
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('sections'),
      knex.schema.dropTable('programs')
    ]);
  };
