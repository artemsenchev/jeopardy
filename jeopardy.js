// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];

let gameButton = document.querySelector(".game-button");
const tableHead = document.querySelector("#jeopardy thead");
const tableBody = document.querySelector("#jeopardy tbody");
const NUM_QUESTIONS_PER_CAT = 5;
const NUM_CATEGORIES = 6;

async function getCategoryIds() {
  let res = await axios.get(
    `https://rithm-jeopardy.herokuapp.com/api/categories?count=100`
  );
  data = res.data; // Store all category objects in the categories array
  categories = data.map((cat) => ({ title: cat.title, id: cat.id }));
  categories = _.sampleSize(categories, NUM_CATEGORIES);
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
  let res = await axios.get(
    `https://rithm-jeopardy.herokuapp.com/api/category?id=${catId}`
  );
  let data = res.data;
  // Randomly select 5 clues
  let clues = _.sampleSize(data.clues, NUM_QUESTIONS_PER_CAT);
  return {
    title: data.title,
    clues: clues.map((clue) => ({
      question: clue.question,
      answer: clue.answer,
      showing: null,
    })),
  };
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
  // Clear existing rows
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

  // Fill table head
  const headerRow = document.createElement("tr");
  categories.forEach((cat) => {
    const headerCell = document.createElement("td");
    let cleanTitle = cat.title.replace(/"/g, "");
    cleanTitle = cleanTitle
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    headerCell.innerText = cleanTitle;
    headerRow.appendChild(headerCell);
  });
  tableHead.appendChild(headerRow);

  // Fill table body
  for (let i = 0; i < NUM_QUESTIONS_PER_CAT; i++) {
    const bodyRow = document.createElement("tr");
    categories.forEach((cat) => {
      const bodyCell = document.createElement("td");
      bodyCell.innerText = "?";
      bodyCell.addEventListener("click", handleClick);
      bodyRow.appendChild(bodyCell);
    });
    tableBody.appendChild(bodyRow);
  }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
  const cell = evt.target;
  const row = cell.parentElement;
  const categoryIndex = Array.from(row.children).indexOf(cell);
  const clue = categories[categoryIndex].clues[row.rowIndex - 1];

  if (clue.showing === null) {
    cell.innerText = clue.question;
    clue.showing = "question";
  } else if (clue.showing === "question") {
    // Capitalize the first letter of the answer
    let answer = clue.answer;
    if (answer.length > 0) {
      answer = answer.charAt(0).toUpperCase() + answer.slice(1);
    }
    answer = answer.replace(/\\'/g, "'"); // Fix escaped apostrophes
    cell.innerHTML = answer;
    clue.showing = "answer";
    cell.classList.add("answered");
  }
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";
  gameButton.innerText = "Loading...";
  gameButton.classList.add("loading");
  document.getElementById("spinner").classList.remove("hidden");
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  gameButton.innerText = "Restart Game";
  gameButton.classList.remove("loading");
  document.getElementById("spinner").classList.add("hidden");
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
  await getCategoryIds();
  await new Promise((resolve) => setTimeout(resolve, 500));
  categories = await Promise.all(categories.map((cat) => getCategory(cat.id)));

  console.log(categories);

  fillTable(categories);

  gameButton.innerText = "Restart Game";
  gameButton.classList.add("restart");
  gameButton.classList.remove("game-button");
}

gameButton.addEventListener("click", async function () {
  showLoadingView();
  await setupAndStart();
  hideLoadingView();
});
/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
