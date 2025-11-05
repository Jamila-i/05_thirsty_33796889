// Create a new router for handling all routes
const express = require("express");
const router = express.Router();

// ---------- Data Setup --------------
// Define the main shop data used across pages
var shopData = {
  shopName: "SipJam",
  productCategories: [
    "Signature Sips (House Specials)",
    "Bubble Teas & Milk Teas",
    "Iced Refreshers",
    "Coffee & Espresso Bar",
    "Smoothies & Shakes",
  ],

  // Shop branch details
  shops: [
    {
      location: "London",
      manager: "John Doe",
      address: "8 Lewisham Way, London SE14 6NW",
    },
    {
      location: "Manchester",
      manager: "Jake Williams",
      address: "56 Deansgate, Manchester M3 2AB",
    },
    {
      location: "Birmingham",
      manager: "Anna Smith",
      address: "89 Broad Street, Birmingham B15 1AU",
    },
  ],
};

// ---------- Main Routes -------------

// Home page
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

// About page
router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

// Search page
router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

// Handles the search form (GET request)
router.get("/search_result", (req, res) => {
  res.send(
    "You searched for " + req.query.search_text + " in " + req.query.category
  );
});

// --------- Register Page -------------

// Displays the register form
router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

// Handles form submission from the register page
router.post("/registered", (req, res) => {
  const { first, last, email } = req.body;

  // Basic email format check
  const emailOk =
    typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Send error if any field is missing or invalid
  if (!first || !last || !emailOk) {
    return res
      .status(400)
      .send(
        "Please provide a first name, last name, and a valid email address."
      );
  }

  // Simple confirmation message
  res.send(
    "Hello " +
      first +
      " " +
      last +
      ", you are now registered! Confirmation sent to: " +
      email
  );
});

// ---------- Survey Page ----------

// Shows the survey form
router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

// handles survey form submission (POST)
router.post("/survey_submitted", (req, res) => {
  const { first, last, email, age, drink } = req.body;
  const isStudent = req.body.student === "Yes";

  // Validate all required fields
  if (!first || !last || !email || !age || !drink) {
    return res.status(400).send("Please complete all required fields.");
  }

  // Render the results page with submitted data
  res.render("survey_result.ejs", {
    shopName: shopData.shopName,
    first,
    last,
    email,
    age,
    drink,
    isStudent,
  });
});

// Export the router so index.js can use it
module.exports = router;
