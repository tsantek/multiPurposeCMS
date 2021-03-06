const express = require('express')
const bodyParser = require('body-parser')
const knex = require('./db/knex')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

// GET HOME PAGE TO INDEX
app.get('/', (req, res) => {
    knex('home_page')
        .then((data) => {
            console.log(data);
            res.render('pages/index', { data: data[0] })
        }).catch(e => console.log(e))
})


app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/projects', (req, res) => {
    res.render('pages/projects')
})

app.get('/services', (req, res) => {
    res.render('pages/services')
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

// GET HOME PAGE TO ADMIN
app.get('/admin', (req, res) => {
    knex('home_page')
        .then((data) => {
            console.log(data);
            res.render('admin/index', { data })
        }).catch(e => console.log(e))
})

// UPDATE  HOME PAGE admin-home-page

app.post('/admin-home-page', (req, res) => {
    console.log(req.body)
    knex('home_page')
        .update(req.body)
        .then(user => {
            res.redirect('/admin')
        })
})


// app.get('/about', (req, res) => {
//     res.render('pages/about')
// })

// app.get('/admin/users', (req, res) => {
//     knex('users')
//         .then(users => {
//             console.log(users)
//             res.render('pages/users', { users })
//         })

// })

// app.get('/admin/users/new', (req, res) => {
//     res.render('pages/newuser', {
//         user: {
//             firstName: '',
//             lastName: '',
//             handle: '',
//             displayRealName: '',
//             bio: '',
//             imgUrl:'',
//             admin: '',
//         }
//     })
// })

// app.get('/admin/users/:id', (req, res) => {
//     if (!req.params.id) return res.sendStatus(422)
//     knex('users')
//         .where('id', req.params.id)
//         .then(user => {
//             res.render('pages/user', { user: user[0] })
//         })
// })

// app.get('/admin/users/:id/edit', (req, res) => {
//     if (!req.params.id) return res.sendStatus(422)
//     knex('users')
//         .where('id', req.params.id)
//         .then(user => {
//             res.render('pages/edituser', { user: user[0] })
//         })
// })

// app.post('/api/admin/users/:id', (req, res) => { // should validate post body here using express-validator
//     if (!req.params.id) return res.sendStatus(422)
//     const updatedBody = {
//         ...req.body,
//         admin: req.body.admin === 'true' ? true : false,
//         displayRealName: req.body.displayRealName === 'true' ? true : false
//     }
//     knex('users')
//         .where('id', req.params.id)
//         .update(updatedBody)
//         .returning('*')
//         .then(user => {
//             res.render('pages/user', { user: user[0] })
//         })
// })

// app.post('/api/admin/users', (req, res) => { // should validate post body here using express-validator
//     const updatedBody = {
//         ...req.body,
//         admin: req.body.admin === 'true' ? true : false,
//         displayRealName: req.body.displayRealName === 'true' ? true : false
//     }
//     knex('users')
//         .insert(updatedBody)
//         .returning('*')
//         .then(user => {
//             res.render('pages/user', { user: user[0] })
//         })
// })

// let's do delete

app.listen(process.env.PORT || 3000)