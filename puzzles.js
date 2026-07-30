// ============================================================
//  PUZZLES.JS — Edit this file to change all your puzzles!
//  Each section controls one game. 
// ============================================================

const PUZZLES = {

  // ----------------------------------------------------------
  // WORDLE — Add as many {word, clue} pairs as you like.
  //   One is chosen randomly each time the page loads.
  //   All words must be exactly 5 letters.
  // ----------------------------------------------------------
  // ----------------------------------------------------------
  // WORDLE — Add as many words as you like (must be 5 letters).
  //   One is chosen randomly each time the page loads.
  // ----------------------------------------------------------
  wordle: {
    words: ["Faker"]
  },

  // ----------------------------------------------------------
  // CONNECTIONS — 16 words grouped into 4 categories
  //   Each group needs: title, color ("yellow","green","blue","purple"), and 4 words
  //   Tip: "yellow" = easiest, "purple" = hardest
  // ----------------------------------------------------------
  connections: {
    groups: [
      {
        title: "Things that ONCE gave Jason hearburn",
        color: "yellow",
        words: ["ALCOHOL", "SPICES", "ACIDS", "COFFEE"]
      },
      {
        title: "Maomi's wants-to-eats-but-cannot eats",
        color: "green",
        words: ["PLASTIC", "PLANTS", "SHOES", ""]
      },
      {
        title: "Cities we've traveled together",
        color: "blue",
        words: ["AMSTERDAM", "OSAKA", "TORONTO", "SHANGHAI"]
      },
      {
        title: "Jessica's Favorites",
        color: "purple",
        words: ["T1", "JASON", "NAPS", "SQUIRRELS"]
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