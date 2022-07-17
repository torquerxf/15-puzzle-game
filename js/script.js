var rows = 4;
var columns = 4;

var currTile;
var otherTile;
var turns = 0;
var time = 0;

var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];

function shuffleArray(imgOrder) {
    for (var i = imgOrder.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = imgOrder[i];
        imgOrder[i] = imgOrder[j];
        imgOrder[j] = temp;
    }
    // return imgOrder;
}
var neworder = shuffleArray(imgOrder);

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            let tile = document.createElement('img');
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".png";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }

    }
}

function dragStart() {
    currTile = this;
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
}
function dragLeave() {

}
function dragDrop() {
    otherTile = this;
}
function dragEnd() {

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c - 1;
    let moveRight = r == r2 && c2 == c + 1;

    let moveUp = c == c2 && r2 == r - 1;
    let moveDown = c == c2 && r2 == r + 1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }

}
var a=1;
function t_ime() {
    
    var same = time;

    if(a==1){
    document.getElementById("play_stop").innerText = "STOP";
    setInterval(() => {
        time++;
        document.getElementById("time").innerText = time;
    }, 1000);
    return a=0;
    }
    else {
        document.getElementById("play_stop").innerText = "PLAY";
        document.getElementById("time").innerText = same;
        return a=1;
    }

}
