let flag = true
let games = document.getElementById("games")
let count = 0
games.addEventListener("click", e=>{
    if (e.target.className = "field") {
        if (flag && e.target.textContent == "" ) {
            e.target.innerHTML = "X"
            flag = !flag
            count++
        } else if (e.target.textContent == "") {
            e.target.innerHTML = "O"
            flag = !flag
            count++  
        }
           
        
    }
    win()
})

function win() {
    const fields = document.getElementsByClassName("field")
    let winMass = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < winMass.length; i++) {
        if (fields[winMass[i][0]].innerHTML == "X" &&  fields[winMass[i][1]].innerHTML == "X" && fields[winMass[i][2]].innerHTML == "X" ) {
            endwin("выйграли крестики")
        } else if (fields[winMass[i][0]].innerHTML == "O" &&  fields[winMass[i][1]].innerHTML == "O" && fields[winMass[i][2]].innerHTML == "O") {
             endwin("выйграли нолики")
        } else if (count >= 9) {
            endwin("ничья")
        }
    }
}

function endwin(whoWin) {
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.600)"
    document.querySelector(".modal").style.display = "block"
    document.querySelector(".modalP").innerHTML = whoWin
    document.getElementById("closeWin").addEventListener("click", ()=>{
        location.reload()
        document.querySelector(".modal").style.display = "none"
    })  
}



