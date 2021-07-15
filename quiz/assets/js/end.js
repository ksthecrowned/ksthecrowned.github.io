const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

if (mostRecentScore >= 40) {
    finalScore.innerText = `Félicitations, tu connais Styve à ${mostRecentScore}%`;
} else if (mostRecentScore == 0) {
    finalScore.innerText = `Tu ne connais pas du tout Styve... ${mostRecentScore}%`;
} else if (mostRecentScore == 100) {
    finalScore.innerText = `Félicitations, tu connais très bien Styve... ${mostRecentScore}%`;
}
 else {
    finalScore.innerText = `Désolé, tu connais très peu Styve... ${mostRecentScore}%`; 
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
