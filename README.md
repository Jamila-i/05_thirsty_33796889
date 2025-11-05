# SipJam

This project was created for my **Dynamic Web Applications** module.  
It’s a Node.js and Express web application that uses **EJS templates** to dynamically display data for a fictional drinks shop called **SipJam**.

The main purpose of this lab was to explore **templating**, **routing**, and **form handling** in Express — including GET and POST requests, and validation.

---

## Technologies Used

### Backend

- **Node.js** – JavaScript runtime environment that allows running JS on the server.
- **Express.js** – lightweight web framework for handling routes, HTTP requests, and middleware.
- **EJS (Embedded JavaScript Templates)** – templating engine used to generate dynamic HTML pages by embedding JS directly into HTML files.
- **Body Parser (built into Express)** – middleware that reads form data from POST requests.

### Frontend

- **HTML5** – structure of all pages and EJS templates.
- **CSS** – custom styles defined in `public/styles.css` for layout, colour, and responsiveness.

---

## Features

### Home Page (`/`)

- Displays the shop name and a list of drink categories.
- Uses EJS loops to generate the list dynamically from `shopData`.

### About Page (`/about`)

- Shows a short description of SipJam and a dynamically generated list of shop branches (London, Manchester, Birmingham).

### Search Page (`/search`)

- Demonstrates a GET form that sends search data through query parameters.
- Returns a confirmation of what the user searched for.

### Register Page (`/register`)

- Contains a POST form for collecting user information (first name, last name, and email).
- Includes email validation and server-side checks.

### Customer Survey (`/survey`)

- A longer POST form that collects personal info and survey questions (age, drink preference, student status).
- Demonstrates form validation and use of radio buttons and checkboxes.

### Survey Results (`/survey_submitted`)

- Displays the submitted survey results inside a **styled card** using data passed through POST.

---

## Folder Structure

```
05_THIRSTY_33796889/
│
├── public/
│ └── styles.css
│
├── routes/
│ └── main.js
│
├── views/
│ ├── about.ejs
│ ├── index.ejs
│ ├── register.ejs
│ ├── search.ejs
│ ├── survey.ejs
│ ├── survey_result.ejs
│ └── partials/
│ └── header.ejs
│
├── index.js
├── package.json
└── README.md
```

---

## How to run it

1. Open your terminal and clone or upload the project
2. Install dependencies

```
npm install
express ejs
```

3. Run the server

```
node index.js
```

4. Open your browser and go to

```
http://localhost:8000
```
