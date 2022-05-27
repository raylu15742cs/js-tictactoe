let [...griditemselector] = document.querySelectorAll(".griditem")
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let counter =0;
let gameboard = document.getElementById("gamesboard")
griditemselector.forEach(griditems => {
    griditems.addEventListener("click", function() {
        if(griditems.innerHTML == '' && gameboard.innerHTML == 'Tic Tac Toe') {
            counter++;
            if(counter%2 == 0) {
                griditems.innerHTML = "O";
                winnerwinner()
            } else {
                griditems.innerHTML = "X";
                winnerwinner()
            }
        }
    })
})
let reset_stuff = function() {
    counter = 0;
    griditemselector.forEach(griditems => {
        griditems.innerHTML = '';
    })
}

// function that resets everything
let cleargame = document.getElementById('reset');
cleargame.addEventListener('click', function() {
    gameboard.innerHTML = "Tic Tac Toe";
    reset_stuff()}
    )
// function that checks for winner
let winnerwinner = function () {
    if (one.innerHTML == "X" && two.innerHTML == "X" && three.innerHTML =="X") {
        gameboard.innerHTML = " Player 1 WINS";
    } else if (four.innerHTML == "X" && five.innerHTML == "X" && six.innerHTML =="X") {
        gameboard.innerHTML = " Player 1 WINS";
    } else if (seven.innerHTML == "X" && eight.innerHTML == "X" && nine.innerHTML =="X") {
        gameboard.innerHTML = " Player 1 WINS";
    } else if (one.innerHTML == "X" && five.innerHTML == "X" && nine.innerHTML =="X") {
        gameboard.innerHTML = " Player 1 WINS";
    } else if (seven.innerHTML == "X" && five.innerHTML == "X" && three.innerHTML =="X") {
        gameboard.innerHTML = " Player 1 WINS";
    } else if (one.innerHTML == "X" && four.innerHTML == "X" && seven.innerHTML =="X") {
        gameboard.innerHTML = " Player 1 WINS";
    } else if (two.innerHTML == "X" && five.innerHTML == "X" && eight.innerHTML =="X") {
        gameboard.innerHTML = " Player 1 WINS";
    } else if (three.innerHTML == "X" && six.innerHTML == "X" && nine.innerHTML =="X") {
        gameboard.innerHTML = " Player 1 WINS";
    } else if (one.innerHTML == "O" && two.innerHTML == "O" && three.innerHTML =="O") {
        gameboard.innerHTML = " Player 2 WINS";
    } else if (four.innerHTML == "O" && five.innerHTML == "O" && six.innerHTML =="O") {
        gameboard.innerHTML = " Player 2 WINS";
    } else if (seven.innerHTML == "O" && eight.innerHTML == "O" && nine.innerHTML =="O") {
        gameboard.innerHTML = " Player 2 WINS";
    } else if (one.innerHTML == "O" && five.innerHTML == "O" && nine.innerHTML =="O") {
        gameboard.innerHTML = " Player 2 WINS";
    } else if (seven.innerHTML == "O" && five.innerHTML == "O" && three.innerHTML =="O") {
        gameboard.innerHTML = " Player 2 WINS";
    } else if (one.innerHTML == "O" && four.innerHTML == "O" && seven.innerHTML =="O") {
        gameboard.innerHTML = " Player 2 WINS";
    } else if (two.innerHTML == "O" && five.innerHTML == "O" && eight.innerHTML =="O") {
        gameboard.innerHTML = " Player 2 WINS";
    } else if (three.innerHTML == "O" && six.innerHTML == "O" && nine.innerHTML =="O") {
       gameboard.innerHTML = " Player 2 WINS";
    } else if (counter == 9) {
        gameboard.innerHTML = " Tie ";
    }
}