# 🤖 Bot Battlr

Welcome to Bot Battlr — the one and only spot in the known universe where you can build your very own Bot Army!
This React web app lets you browse through a list of bots, view their details, enlist them into your army, and even discharge them permanently from service.

## ## 🚀 Project Overview

This project was created to practice and demonstrate key React concepts such as:

- Components and Props
- State and Events
- Data Fetching with JSON Server
- Conditional Rendering and List Rendering
- CRUD Operations (Create, Read, Update, Delete)

## 🧠 Learning Goals

- Implement a mini web app using React
- Use state, props, and events effectively
- Fetch and manipulate data from a local JSON server
- Practice project planning and component hierarchy design

## 🏗️ Project Setup

1️⃣ Clone or Download the Project

- git clone https://github.com/yourusername/bot-battlr.git
- cd bot-battlr

2️⃣ Install Dependencies
- npm install

3️⃣ Set Up JSON Server

- Make sure you have a db.json file in your project’s root folder
- Run the backend server:
    npx json-server --watch db.json --port 8001


Test it by visiting:
👉 http://localhost:8001/bots

You should see an array of bot objects in JSON format.

4️⃣ Start the React App
npm run dev

Then open your browser and go to:
👉 [LiveDemo](http://localhost:5173)

## ⚙️ Core Features

As a user, you can:

✅ View All Bots
See profiles of all bots rendered in the BotCollection component.

✅ Add a Bot to Your Army
Click on a bot to enlist it. The selected bot will render in the YourBotArmy component.
Each bot can only be enlisted once, and it does not disappear from the BotCollection.

✅ Release a Bot
Click on a bot in your army to release it (removes it from YourBotArmy but keeps it in the collection).

✅ Discharge a Bot Forever
Click the red “X” button to delete a bot permanently — it will be removed from both the frontend and the backend (db.json).

## 🧩 Endpoints Used

GET /bots

Returns all bots.

Example Response:

[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
  }
]

## 🧱 Folder Structure

bot-battlr/
│
├── db.json
├── package.json
├── index.html
├── vite.config.js
│
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── BotCard.jsx
│       ├── BotCollection.jsx
│       └── YourBotArmy.jsx
│
└── README.md

## 🧠 Technologies Used

- React (Vite + RollDown)
- JSON Server
- JavaScript (ES6+)
- CSS / Flexbox / Grid
- Git & GitHub

## 💬 Author

Developed by: Natalie Mwiti
GitHub: nataliemwiti

## 🏁 Conclusion

This project demonstrates practical React skills — working with components, props, state, and API data — in a fun, interactive way.
Welcome to Bot Battlr — now go build your bot army! ⚔️