# Jeopardy! Game

A dynamic, interactive Jeopardy! board built with vanilla JavaScript, HTML, and CSS.  
Fetches real trivia categories and clues from the [Rithm Jeopardy API](https://rithm-jeopardy.herokuapp.com/), and lets you play a classic game show experience in your browser!

---

<img width="1624" height="790" alt="image" src="https://github.com/user-attachments/assets/5ac4e85c-5754-4c55-9cdd-317193f42db0" />

## 📚 Purpose of This Exercise

This project was created to demonstrate:

- Building a dynamic game board using JavaScript, HTML, and CSS
- Making AJAX requests using Axios to fetch data from an external API
- Manipulating the DOM to display and update questions and answers
- Registering and handling event listeners for user interaction
- Implementing a restartable game experience

## 🚀 Features

- 🎲 **Random Categories:** Each game board is filled with 6 random categories.
- ❓ **5 Clues Per Category:** Each category has 5 randomly selected clues.
- 🔄 **Restartable:** Click "Restart Game" to get a fresh board.
- ✨ **Animated Spinner:** Loading spinner while fetching data.
- ✅ **Interactive:** Click a cell to reveal the question, then the answer.
- 🟩 **Answered Highlight:** Answered clues turn green.

---

## 🛠️ How to Run

1. **Clone this repo:**

   ```sh
   git clone https://github.com/artemsenchev/jeopardy.git
   cd jeopardy
   ```

2. **Open `index.html` in your browser.**
   - You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code for best results.

---

## 🗂️ Project Structure

```
jeopardy/
├── index.html
├── jeopardy.js
├── jeopardy.css
└── README.md
```

---

## 📝 How to Play

1. Click **Start Game**.
2. Wait for the spinner to finish loading your board.
3. Click any `?` cell:
   - First click: reveals the question.
   - Second click: reveals the answer (cell turns green).
4. Click **Restart Game** to play again with new categories!

---

## 🎨 Customization

- **Colors & Fonts:** Edit `jeopardy.css` for your own theme.
- **Number of Categories/Clues:** Change `NUM_CATEGORIES` or `NUM_QUESTIONS_PER_CAT` in `jeopardy.js`.

---

## ⚠️ Notes

- This project uses the [Rithm Jeopardy API](https://rithm-jeopardy.herokuapp.com/). If the API is down, the game board will not load.
- For local development, you may need to use a local server (like Live Server) due to CORS restrictions.

---

## 📚 Credits

- [Rithm School Jeopardy API](https://rithm-jeopardy.herokuapp.com/)
- Inspired by the classic TV game show **Jeopardy!**

---

## 🖥️ Preview

<img width="1620" height="557" alt="image" src="https://github.com/user-attachments/assets/97287fad-bd5b-4262-be91-aefaa682b824" />


---

## 📄 License

MIT License

---

> _Have fun playing and customizing your own Jeopardy! game!_
