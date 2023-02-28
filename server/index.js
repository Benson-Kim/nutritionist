const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// enable the user to insert, update, delete a record.

// Route for inserting a client
app.post("/api/client/create", (req, res) => {
  const { clientid, firstname, surname, weight, height, sex, age, telephone } =
    req.body;

  const sql =
    "INSERT INTO Client (ClientID, firstname, surname, weight, height, sex,age, telephone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    clientid,
    firstname,
    surname,
    weight,
    height,
    sex,
    age,
    telephone,
  ];

  db.query(sql, values, (err, result) => {
    if (err) throw err;

    console.log("New client added to the database");
    res.status(200).json({ message: "New client added to the database" });
  });
});

// Route to delete a client
app.delete("/api/client/:id", (req, res) => {
  const clientId = req.params.id;

  const sql = "DELETE FROM Client WHERE clientID = ?";
  db.query(sql, [clientId], (err, result) => {
    if (err) throw err;
    res.send(`Deleted ${result.affectedRows} row(s)`);
  });
});

// Route to get all clients
app.get("/api/query1", (req, res) => {
  db.query(
    "SELECT ClientID, firstname, surname, weight, height, sex,age, telephone FROM Client",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/query2/:clientid/:date", (req, res) => {
  const { clientid, date } = req.params;
  db.query(
    `SELECT mealName, mealDate, mealTime, clientID 
        FROM meal
        WHERE clientID = ${clientid} AND mealDate = '${date}'`,
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

app.get("/api/query4/:mealdate", (req, res) => {
  const { mealdate } = req.params;
  db.query(
    `SELECT c.firstname, c.surname FROM client c
			INNER JOIN meal m ON c.clientID = m.clientID
			INNER JOIN MealConsumption mc ON m.mealID = mc.mealID
			INNER JOIN FoodIngredients fi ON mc.foodID = fi.foodID
		WHERE m.mealDate = '${mealdate}'
		ORDER BY (fi.calories * mc.amount) DESC
		LIMIT 1`,
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

app.get("/api/query12/:mealdate", (req, res) => {
  const { mealdate } = req.params;
  db.query(
    `SELECT 
        CASE 
			WHEN (c.weight / (c.height * c.height)) < 18.5 THEN 'Underweight'
			WHEN (c.weight / (c.height * c.height)) >= 18.5 AND (c.weight / (c.height * c.height)) < 25 THEN 'Healthy'
			WHEN (c.weight / (c.height * c.height)) >= 25 AND (c.weight / (c.height * c.height)) < 30 THEN 'Overweight'
			WHEN (c.weight / (c.height * c.height)) >= 30 THEN 'Obese'
		END AS weight_status,
        m.mealDate, AVG(TIME_TO_SEC(m.mealTime)) / 3600 AS average_time
        FROM meal m
			INNER JOIN client c ON m.clientID = c.clientID
		WHERE m.mealDate = '${mealdate}'
        GROUP BY weight_status, m.mealDate`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/query13/:startdate/:enddate", (req, res) => {
  const { startdate, enddate } = req.params;
  db.query(
    `SELECT fi.name AS ingredient_name, SUM(mc.amount) AS total_amount
		FROM meal m
			INNER JOIN MealConsumption mc ON m.mealID = mc.mealID
			INNER JOIN FoodIngredients fi ON mc.foodID = fi.foodID
			INNER JOIN client c ON m.clientID = c.clientID
		WHERE (c.weight / (c.height * c.height)) >= 30
			AND m.mealDate BETWEEN '${startdate}' AND '${enddate}'
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

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
