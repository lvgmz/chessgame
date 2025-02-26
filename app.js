const move = document.querySelectorAll(".sq");

let movingPiece = "";
let movingPieceId = "";
let turn = 1;

move.forEach(function(square) {
    square.addEventListener("click", function() {

        if (turn % 2 === 1) {
            whiteTurn(square);
        }
        else {
            blackTurn(square);
        }
    });
});


function whiteTurn(square){
    if (movingPiece === "" && square.innerHTML !== "" && square.classList.contains('w')){
        selecting(square, 'w');
    }

    else if(movingPiece !== "" && movingPiece !== square.innerHTML){
        moving(square, 'w', 'b');
    }
}

function blackTurn(square) {
    if (movingPiece === "" && square.innerHTML !== "" && square.classList.contains('b')){
        selecting(square, 'b');
    }

    else if(movingPiece !== "" && movingPiece !== square.innerHTML){
        moving(square, 'b', 'w');
    }
}

function selecting(square, color) {
    if (movingPiece === "" && square.innerHTML !== "" && square.classList.contains(color)) {
        movingPiece = square.innerHTML;
        movingPieceId = square.id;
    }
}

function moving(square, color, remove) {
    document.getElementById(movingPieceId).innerHTML = "";
    document.getElementById(movingPieceId).classList.remove(color);
    square.innerHTML = movingPiece;
    square.classList.add(color);
    if (square.classList.contains(remove)){
        square.classList.remove(remove);
    }
    movingPiece = "";
    movingPieceId = "";
    turn++;
}