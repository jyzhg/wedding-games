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
    words: ["Waltz", "Frond", "Union"]
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
        words: ["PLASTIC", "PLANTS", "SHOES", "DAIRY"]
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
  // ----------------------------------------------------------
  // CROSSWORD — 9×9. Grid must stay rectangular; "#" = black square.
  //   Clue "number" must match what the engine assigns (it numbers
  //   left-to-right, top-to-bottom), so renumber if you move words.
  // ----------------------------------------------------------
  crossword: {
    grid: [
      ["S", "I", "A", "M", "E", "S", "E", "#", "#", "#"],
      ["#", "#", "#", "U", "#", "#", "#", "#", "K", "#"],
      ["#", "V", "A", "N", "C", "O", "U", "V", "E", "R"],
      ["#", "#", "#", "C", "#", "T", "#", "#", "T", "#"],
      ["#", "#", "#", "H", "#", "I", "#", "#", "C", "#"],
      ["#", "#", "#", "K", "#", "U", "#", "#", "H", "#"],
      ["#", "#", "#", "I", "#", "M", "#", "#", "U", "#"],
      ["#", "#", "#", "N", "#", "#", "#", "#", "P", "#"]
    ],
    clues: {
      across: [
          { number: 1, clue: "Maomi's breed of cat", row: 0, col: 0, length: 7 },
          { number: 4, clue: "Our first trip together (city)", row: 2, col: 1, length: 9 }
      ],
      down: [
          { number: 2, clue: "Company where we met", row: 0, col: 3, length: 8 },
          { number: 3, clue: "Jason's favorite condiment", row: 1, col: 8, length: 7 },
          { number: 5, clue: "Our favorite restaurant in LA (closed forever)", row: 2, col: 5, length: 5 }
      ]
    }
  }

};