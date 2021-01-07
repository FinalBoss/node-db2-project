exports.up = function(knex, Promise) {
    return knex.schema.createTable('car', function(table) {
      table.increments()
      table.text('make').unique().notNullable()
      table.string('model').unique().notNullable()
      table.string('vin').unique().notNullable()
      table.string('mileage').unique().notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
    
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('car')
  };
  