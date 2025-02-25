const move = document.querySelectorAll(".sq");

let movingPiece = "";
let movingPieceId = "";

move.forEach(function(square) {
    square.addEventListener("click", function() {
        
        if (movingPiece === "" && square.innerHTML !== "") {
            movingPiece = square.innerHTML;
            movingPieceId = square.id;
        }

        else if (movingPiece !== "") {
            square.innerHTML = movingPiece;
            movingPiece = "";
            document.getElementById(movingPieceId).innerHTML = "";
        }
    });
});