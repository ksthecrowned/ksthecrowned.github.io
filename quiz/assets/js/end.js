const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

if (mostRecentScore >= 40) {
    finalScore.innerHTML = `<h2 id="finalScore">Félicitations, tu connais très bien Styve. <br> .........| ton score: ${mostRecentScore}%</h2>`;
} else if (mostRecentScore == 0) {
    finalScore.innerHTML = `<h2 id="finalScore">Désolé, tu ne connais pas du tout Styve. <br> ......... | ton score: ${mostRecentScore}%`;
} else if (mostRecentScore == 100) {
    finalScore.innerHTML = `<h2 id="finalScore">Félicitations, tu connais parfaitement Styve. <br> ......... | ton score: ${mostRecentScore}%`;
}
 else {
    finalScore.innerHTML = `<h2 id="finalScore">Tu ne connais Styve que très peu. <br> ......... | ton score: ${mostRecentScore}%</h2>`; 
}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
        date: new Date(),
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('quiz/');
};
