const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const finalScoreInt = document.getElementById('finalScore-int');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

if (mostRecentScore == 0) {
    finalScore.innerHTML = `<h2 id="finalScore">Désolé, tu ne connais pas du tout Styve.`;
} else if (mostRecentScore == 100) {
    finalScore.innerHTML = `<h2 id="finalScore">Félicitations, tu connais parfaitement Styve.`;
} else if (mostRecentScore >= 40) {
    finalScore.innerHTML = `<h2 id="finalScore">Félicitations, tu connais assez bien Styve.`;
} else {
    finalScore.innerHTML = `<h2 id="finalScore">Désolé, tu ne connais pas assez Styve.`;
}
finalScoreInt.innerHTML = `Score: ${mostRecentScore}%`;


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
    window.location.assign('https://ksthecrowned.github.io/quiz/highscores.html');
};
