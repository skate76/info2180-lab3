//button = document.getElementsByClassName('btn');



document.addEventListener("DOMContentLoaded", (e) => {
    const board = document.getElementById('board');
    const sqCount = 9;

    for (let i = 0; i < sqCount; i++){
        const sq = document.createElement("div");
        sq.classList.add("square");
        board.appendChild(sq);

    }
    //const sq = document.getElementById('board');
    //sq.setAttribute("class", "square");
    
    console.log("DOM fully loaded and parsed.");
});