// YYYYMMDDHHMMSS_knex_lessons.js
exports.up = function(knex) {
    return knex.schema.createTable('knex_lesson', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('title').notNullable();
      table.string('genre');
      table.date('release_date');
      table.timestamps(true, true); // adds created_at and updated_at
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('knex_lesson');
  };