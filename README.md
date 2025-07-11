# Jeopardy! Game

A dynamic, interactive Jeopardy! board built with vanilla JavaScript, HTML, and CSS.  
Fetches real trivia categories and clues from the [Rithm Jeopardy API](https://rithm-jeopardy.herokuapp.com/), and lets you play a classic game show experience in your browser!

---

![Jeopardy Board Screenshot](https://user-images.githubusercontent.com/your-screenshot.png)

## 🚀 Features

- 🎲 **Random Categories:** Each game board is filled with 6 random categories.
- ❓ **5 Clues Per Category:** Each category has 5 randomly selected clues.
- 🔄 **Restartable:** Click "Restart Game" to get a fresh board.
- ✨ **Animated Spinner:** Loading spinner while fetching data.
- ✅ **Interactive:** Click a cell to reveal the question, then the answer.
- 🟩 **Answered Highlight:** Answered clues turn green.

---

## 📸 Demo

![Demo GIF](https://user-images.githubusercontent.com/your-demo.gif)

---

## 🛠️ How to Run

1. **Clone this repo:**

   ```sh
   git clone https://github.com/your-username/jeopardy.git
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

![Board Preview](https://user-images.githubusercontent.com/your-preview.png)

---

## 📄 License

MIT License

---

> _Have fun playing and customizing your own Jeopardy! game!_
