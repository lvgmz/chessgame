// Every Piece moves everywhere
const move = document.querySelectorAll(".sq");

let movingPiece = "";
let movingPieceId = "";
let turn = 1;

move.forEach(function(square) {
    square.addEventListener("click", function() {

        if (turn % 2 === 1) {   // white turn

            // selecting a piece
            if (movingPiece === "" && square.innerHTML !== "" && square.classList.contains('w')) {
                movingPiece = square.innerHTML;
                movingPieceId = square.id;
            }
            
            // placing a piece on new square
            else if (movingPiece !== "") {
                document.getElementById(movingPieceId).innerHTML = "";
                document.getElementById(movingPieceId).classList.remove('w');
                square.innerHTML = movingPiece;
                square.classList.add("w");
                if (square.classList.contains('b')){
                    square.classList.remove('b');
                }
                movingPiece = "";
                movingPieceId = "";
                turn++;
            }
        }
        else {  // black turn

            // selecting piece
            if (movingPiece === "" && square.innerHTML !== "" && square.classList.contains('b')) {
                movingPiece = square.innerHTML;
                movingPieceId = square.id;
            }
            
            // placeing piece on new square
            else if (movingPiece !== "") {
                document.getElementById(movingPieceId).innerHTML = "";
                document.getElementById(movingPieceId).classList.remove('b');
                square.innerHTML = movingPiece;
                square.classList.add("b");
                if (square.classList.contains("w")){
                    square.classList.remove("w");
                }
                movingPiece = "";
                movingPieceId = "";
                turn++;
            }
        }


    });
});

