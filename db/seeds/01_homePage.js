exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('home_page')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('home_page').insert([{
                projectedComplitedNumber: 12463,
                projectComplitedText: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum",
                firstIntroContainerWork: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                partnersText: "<p>Over the years, we’ve been able to build a reputation as one of the best independent company in our diverse industry. We Accept applications from prospective companies throughout the year.</p><p>Those interested to work with us in any field relate to our work are encouraged to contact us by way of telephone or e-mail by using the contact form to get more information information.</p>"
            }])
        })
}