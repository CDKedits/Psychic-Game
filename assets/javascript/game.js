const compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let randomChoice = compChoices[Math.floor(Math.random() * compChoices.length)]

let wins = 0
let losses = 0
let guesses = 10

// Compares user's guess with computer choice
document.onkeyup = event => {
  let userKey = event.keyCode
  let userGuess = event.key
  console.log(randomChoice)
  console.log(userGuess)

  // If user guesses correctly
  if (userKey >= 65 && userKey <= 90) {
    if (userGuess === randomChoice) {
      wins++
      guesses = 10
      alert(`You guessed it! The letter was ${randomChoice}!`)
      randomChoice = compChoices[Math.floor(Math.random() * compChoices.length)]
      document.querySelector(`#guesses`).innerHTML = `Your guesses so far: `
    } else {
      // If user guesses incorrectly
      guesses--
      document.querySelector(`#guesses`).append(`${userGuess + `, `}`)
    }

    // If user runs out of guesses
    if (guesses === 0) {
      alert(`You lost! Let's try another letter.`)
      losses++
      guesses = 10
      randomChoice = compChoices[Math.floor(Math.random() * compChoices.length)]
      document.querySelector(`#guesses`).innerHTML = `Your guesses so far: `
    }
    // Display wins, losses, guesses left
    document.querySelector(`#wins`).innerHTML = `Wins: ${wins}`
    document.querySelector(`#losses`).innerHTML = `Losses: ${losses}`
    document.querySelector(`#left`).innerHTML = `Guesses left: ${guesses}`
  }
}



