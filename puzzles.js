// ============================================================
//  PUZZLES.JS — Edit this file to change all your puzzles!
//  Each section controls one game. Save and re-upload to GitHub.
// ============================================================

const PUZZLES = {

  // ----------------------------------------------------------
  // WORDLE — Set a 5-letter word and its clue (shown at top)
  // ----------------------------------------------------------
  wordle: {
    word: "CRANE",
    clue: "A large bird, or a machine for lifting heavy objects"
  },

  // ----------------------------------------------------------
  // CONNECTIONS — 16 words grouped into 4 categories
  //   Each group needs: title, color ("yellow","green","blue","purple"), and 4 words
  // ----------------------------------------------------------
  connections: {
    groups: [
      {
        title: "Things Maomi Eats That He Shouldn't",
        color: "yellow",
        words: ["Plastic", "Plants", "Shoes", "Cables"]
      },
      {
        title: "Things That Once Gave Jason Heartburn",
        color: "green",
        words: ["Alcohol", "Spicy", "Raw Garlic", "Sour"]
      },
      {
        title: "Jessica's Favorites",
        color: "blue",
        words: ["T1", "Napping", "Coffee", "Jason"]
      },
      {
        title: "Shades of blue",
        color: "purple",
        words: ["COBALT", "CERULEAN", "AZURE", "INDIGO"]
      }
    ]
  },

  // ----------------------------------------------------------
  // CROSSWORD — 5×5 mini crossword
  //   grid: Use letters for filled squares, "#" for black squares
  //   clues: Across and Down clues with their starting number
  // ----------------------------------------------------------
  crossword: {
    grid: [
      ["C", "R", "A", "N", "E"],
      ["H", "#", "R", "#", "A"],
      ["E", "S", "T", "E", "R"],
      ["F", "#", "S", "#", "T"],
      ["S", "T", "E", "A", "K"]
    ],
    clues: {
      across: [
        { number: 1, clue: "Large wading bird", row: 0, col: 0, length: 5 },
        { number: 5, clue: "Female name or a chemical compound", row: 2, col: 0, length: 5 },
        { number: 6, clue: "Cut of beef from the loin", row: 4, col: 0, length: 5 }
      ],
      down: [
        { number: 1, clue: "A type of cheese", row: 0, col: 0, length: 5 },
        { number: 2, clue: "Paintings, sculptures, etc.", row: 0, col: 2, length: 5 },
        { number: 3, clue: "Compass direction (abbr.)", row: 0, col: 4, length: 5 },
        { number: 4, clue: "Type of beef cut (4,1 = starts row 0 col 1)", row: 0, col: 1, length: 1 }
      ]
    }
  }

};
