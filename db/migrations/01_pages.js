exports.up = knex => {
    return knex.schema.createTable('pages', function(table) {
        table.increments()
        table.string('title', 100)
        table.string('url', 100)
        table.boolean('visible')
    })
}
exports.down = knex => {
    return knex.schema.dropTable('pages')
}