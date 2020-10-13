let cells = document.querySelectorAll('.row > div');
let message = document.querySelector('#message');
let j = 0;
//console.log(cells);
let win = false;
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}


function winCheck(player) {
    if ((cells[0].textContent === player) && (cells[1].textContent === player) && (cells[2].textContent === player)) {
        message.textContent = "Player " + player + " wins!";
        return true;
    }
    else if ((cells[3].textContent === player) && (cells[4].textContent === player) && (cells[5].textContent === player)) {
        message.textContent = "Player " + player + " wins!";
        return true;
    }
    else if ((cells[6].textContent === player) && (cells[7].textContent === player) && (cells[8].textContent === player)) {
        message.textContent = "Player " + player + " wins!";
        return true;
    }
    else if ((cells[0].textContent === player) && (cells[4].textContent === player) && (cells[8].textContent === player)) {
        message.textContent = "Player " + player + " wins!";
        return true;
    }
    else if ((cells[1].textContent === player) && (cells[4].textContent === player) && (cells[7].textContent === player)) {
        message.textContent = "Player " + player + " wins!";
        return true;
    }
    else if ((cells[0].textContent === player) && (cells[3].textContent === player) && (cells[6].textContent === player)) {
        message.textContent = "Player " + player + " wins!";
        return true;
    }
    else if ((cells[2].textContent === player) && (cells[5].textContent === player) && (cells[8].textContent === player)) {
        message.textContent = "Player " + player + " wins!";
        return true;
    }
    else if ((cells[2].textContent === player) && (cells[4].textContent === player) && (cells[6].textContent === player)) {
        message.textContent = "Player " + player + " wins!";
        return true;
    }
    else {
        return false;
    }
}

function cellClicked() {
    if ((j % 2 === 0) && (j < 9) && (win === false)) {
        if (event.target.textContent === '') {
            event.target.textContent = 'X';
            win = winCheck('X');
            j++
            if ((j === 9) && (win === false)) {
                message.textContent = "Draw!";
            }

        }
    }

    else if ((j % 2 !== 0) && (j < 9) && (win === false)) {
        if (event.target.textContent === '') {
            event.target.textContent = 'O';
            win = winCheck('O');
            j++;
            if (j === 9) {
                message.textContent = "Draw!";
            }
        }
    }

    else if (j === 9 || (win === true)) {
        for (let k = 0; k < cells.length; k++) {
            cells[k].textContent = '';
        }
        message.textContent = '';
        j = 0;
        win = false;
    }


}


//if else statements are your friend!
//cells[0].textContent
// use === and your logical operators

