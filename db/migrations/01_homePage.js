exports.up = knex => {
    return knex.schema.createTable('home_page', function(table) {
        table.increments()
        table.integer('projectedComplitedNumber', 1000)
        table.string('projectComplitedText', 1000)
        table.string('firstIntroContainerWork', 1000)
        table.string('partnersText', 1000)
    })
}
exports.down = knex => {
    return knex.schema.dropTable('home_page')
}