let teama = document.getElementById("teama")
let teamb = document.getElementById("teamb")

// scores
let scorea = 0
let scoreb = 0


// team 1
function score1a() {
    scorea += 1
    teama.textContent = scorea
}

function score2a() {
    scorea += 2
    teama.textContent = scorea
}

function score3a() {
    scorea += 3
    teama.textContent = scorea
}


// team b
function score1b() {
    scoreb += 1
    teamb.textContent = scoreb
}

function score2b() {
    scoreb += 2
    teamb.textContent = scoreb
}

function score3b() {
    scoreb += 3
    teamb.textContent = scoreb
}



// Reset
function reset() {
    // team a score reset
    scorea = 0
    teama.textContent = scorea
    // team b score reset
    scoreb = 0
    teamb.textContent = scoreb
}


// Highlight

function highlight() {
    if (scorea == scoreb) {
        teama.style.color = "#F94F6D";
        teamb.style.color = "#F94F6D";
    }
    else if (scorea > scoreb) {
        teama.style.color = "#ff9a2e";
        // teama.style.color = "#548143";
        teamb.style.color = "#F94F6D";
    }
    else if (scorea < scoreb) {
        teamb.style.color = "#ff9a2e";
        // teama.style.color = "#548143";
        teama.style.color = "#F94F6D";
    }
}

