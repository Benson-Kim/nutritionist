const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())


// Route to get all clients
app.get("/api/query1", (req, res) => {
    db.query("SELECT firstname, surname, weight, height, sex,age, telephone FROM Client", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
});

app.get("/api/query2", (req, res) => {
    const { CLIENT_ID, MEAL_DATE } = req.body;
    db.query(`SELECT * FROM meal WHERE clientid = ${CLIENT_ID} AND mealdate = '${MEAL_DATE}'`, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
});

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {

    const id = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", id,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        });
});

// Route for creating the post
app.post('/api/create', (req, res) => {

    const username = req.body.username;
    const title = req.body.title;
    const text = req.body.text;

    db.query("INSERT INTO posts (title, post_text, author_name) VALUES (?,?,?)", [title, text, username], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
})

// Route to like a post
app.post('/api/like/:id', (req, res) => {

    const id = req.params.id;
    db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
});

// Route to delete a post

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})