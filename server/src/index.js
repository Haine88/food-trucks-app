// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
  connectionString: config.databaseUrl + "&uselibpqcompat=true",
  ssl: true,
});

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

// 1. getAllFoodTrucks()
async function getAllFoodTrucks() {
  // counts total number of rows in food-trucks table
  const result = await db.query("SELECT * FROM food_trucks;");
  return result.rows;
}

// 2. getFoodTruckById(id)


// 3. getVeganFoodTrucks()


// 4. getFoodTrucksByPrice(price)


// 5. getTopRatedFoodTrucks()


// 6. getFoodTrucksSortedByRating()
async function getFoodTrucksSortedByRating() {
  const result = await db.query(
    "SELECT * FROM food_trucks ORDER BY rating DESC",
  );
  return result.rows;
}

// 7. getFoodTrucksSortedByPrice()


// 8. getFoodTrucksCount()


// 9. addOneFoodTruck(name, current_location, daily_special, slogan, has_vegan_options, price_level, rating)


// 10. deleteOneFoodTruck(id)


// 11. updateFoodTruckLocation(id, newLocation)


// 12. updateFoodTruckRating(id, newRating)


// ---------------------------------
// API Endpoints
// ---------------------------------

// 1. GET /get-all-food-trucks
app.get("/get-all-food-trucks", async (req, res) => {
  const trucks = await getAllFoodTrucks();
  res.json(trucks);
});

// 2. GET /get-food-truck-by-id/:id


// 3. GET /get-vegan-food-trucks


// 4. GET /get-food-trucks-by-price/:price


// 5. GET /get-top-rated-food-trucks


// 6. GET /get-food-trucks-sorted-by-rating
app.get("/get-food-trucks-sorted-by-rating", async (req, res) => {
  const trucks = await getFoodTrucksSortedByRating();
  res.json(trucks);
});

// 7. GET /get-food-trucks-sorted-by-price


// 8. GET /get-food-trucks-count


// 9. POST /add-one-food-truck


// 10. POST /delete-one-food-truck/:id


// 11. POST /update-food-truck-location


// 12. POST /update-food-truck-rating
