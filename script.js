const HTML_COUNT_BTN = document.getElementById("count-btn")
const HTML_PASS_BTN = document.getElementById("pass-btn")
const HTML_RESET_BTN = document.getElementById("reset-btn")
const HTML_COUNT_TURN = document.getElementById("counts-this-turn")
const HTML_CURRENT_NUMBER = document.getElementById("current-number")
const HTML_CURRENT_PLAYER = document.getElementById("current-player")

// CONSTANT
const LIMIT = 31

// === GAME VARIABLES ===
// TODO #1: Create variables for:
let currentNumber = 0
let currentPlayer = 1
let countsThisTurn = 0
let gameover = false

// === DISPLAY UPDATE ===
// TODO #2: Complete this function to update the display
// - Update the number on screen    
// - Update current player
// - Update counts this turn
function updateDisplay() {
    // Hint: update these elements:
    // - 'number' element should show currentNumber
    // - 'current-player' element should show currentPlayer
    // - 'counts-this-turn' element should show countsThisTurn

    // TODO #2.1: Update the numbers shown on screen
    HTML_COUNT_TURN.innerText = countsThisTurn
    HTML_CURRENT_NUMBER.innerText = currentNumber
    HTML_CURRENT_PLAYER.innerText = currentPlayer

    // TODO #2.2: Handle button enabling/disabling
    // - Enable count button if: turns < 3 and game not over
    HTML_COUNT_BTN.disabled = gameover === true || countsThisTurn >= 3
    // - Enable pass button if: counted at least once and game not over
    HTML_PASS_BTN.disabled = gameover === true || countsThisTurn === 0

    HTML_RESET_BTN.disabled = currentNumber === 0
}

// === COUNTING FUNCTION ===
// TODO #3: Complete this function that runs when Count button is clicked
function count() {
    if (gameover === true) {
        return false
    }

    if (countsThisTurn >= 3) return

    currentNumber += 1
    countsThisTurn += 1

    if (currentNumber >= LIMIT) {
        gameover = true
        alert(`player ${currentPlayer} loses!`)
    }
    updateDisplay()
}

// === PASS TURN FUNCTION ===
// TODO #4: Complete this function that runs when Pass Turn button is clicked
function passTurn() {
    // TODO #4.1: If game is over or haven't counted yet, return early
    if (gameover === true) {
        return false
    }
    // TODO #4.2: Change currentPlayer (if 1 goes to 2, if 2 goes to 1)
    currentPlayer = currentPlayer === 1 ? 2 : 1
    // TODO #4.3: Reset countsThisTurn to 0
    countsThisTurn = 0
    // TODO #4.4: Update the display
    updateDisplay()
}

// === RESET GAME FUNCTION ===
// TODO #5: Complete this function that runs when New Game button is clicked
function resetGame() {
    // TODO #5.1: Reset all game variables to starting values
    currentNumber = 0
    currentPlayer = 1
    countsThisTurn = 0
    gameover = false
    // TODO #5.2: Update the display 
    updateDisplay()
}

// === GAME INITIALIZATION ===
// TODO #6: Call updateDisplay() to set up the initial game state
HTML_COUNT_BTN.addEventListener(`click`, count())
HTML_PASS_BTN.addEventListener(`click`, passTurn())
HTML_RESET_BTN.addEventListener(`click`, resetGame())
updateDisplay()