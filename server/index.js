const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Route to get all clients
app.get("/api/query1", (req, res) => {
  db.query(
    "SELECT firstname, surname, weight, height, sex,age, telephone FROM Client",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/query2", (req, res) => {
  const { CLIENT_ID, MEAL_DATE } = req.body;
  db.query(
    `SELECT * FROM meal WHERE clientid = ${CLIENT_ID} AND mealdate = '${MEAL_DATE}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/query3", (req, res) => {
  db.query(
    "SELECT * FROM foodingredients WHERE calories < (SELECT AVG(calories) FROM foodingredients)",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/query6", (req, res) => {
  db.query(
    "SELECT * FROM client WHERE age IN (SELECT MIN(age) AS youngest FROM client UNION SELECT MAX(age) AS oldest FROM client)",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/query7", (req, res) => {
  db.query(
    "SELECT fi.name, COUNT(DISTINCT m.clientID) AS num_clients FROM FoodIngredients fi INNER JOIN MealConsumption mc ON fi.foodID = mc.foodID INNER JOIN meal m ON mc.mealID = m.mealID WHERE fi.calories > (SELECT AVG(calories) FROM FoodIngredients) GROUP BY fi.name ORDER BY num_clients DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});
app.get("/api/query8", (req, res) => {
  db.query(
    `SELECT fi.name AS ingredient, AVG(fi.calories) AS avg_calories FROM FoodIngredients fi INNER JOIN MealConsumption mc ON fi.foodID = mc.foodID GROUP BY fi.name ORDER BY avg_calories DESC`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/query9", (req, res) => {
  db.query(
    `SELECT c.sex, AVG(fi.calories * mc.amount) AS avg_calories
		FROM client c
			INNER JOIN meal m ON c.clientID = m.clientID
			INNER JOIN MealConsumption mc ON m.mealID = mc.mealID
			INNER JOIN FoodIngredients fi ON mc.foodID = fi.foodID
		GROUP BY c.sex`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/query10", (req, res) => {
  db.query(
    `SELECT fi.name AS food_name, fi.calories, fi.category, COUNT(DISTINCT m.clientID) AS num_consumers
FROM meal m
	INNER JOIN MealConsumption mc ON m.mealID = mc.mealID
	INNER JOIN FoodIngredients fi ON mc.foodID = fi.foodID
GROUP BY mc.foodID
ORDER BY SUM(mc.amount) DESC
LIMIT 1`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/query11", (req, res) => {
  db.query(
    `SELECT clientID, firstname, surname, weight, height, sex, age, telephone,
		CASE 
			WHEN (c.weight / (c.height * c.height)) < 18.5 THEN 'Underweight'
            WHEN (c.weight / (c.height * c.height)) >= 18.5 AND (c.weight / (c.height * c.height)) < 25 THEN 'Healthy'
			WHEN (c.weight / (c.height * c.height)) >= 25 AND (c.weight / (c.height * c.height)) < 30 THEN 'Overweight'
			WHEN (c.weight / (c.height * c.height)) >= 30 THEN 'Obese'
			ELSE 'Unknown'
		END AS weight_status
		FROM client c`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// Route for creating the post
app.post("/api/create", (req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const text = req.body.text;

  db.query(
    "INSERT INTO posts (title, post_text, author_name) VALUES (?,?,?)",
    [title, text, username],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// Route to delete a post
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
