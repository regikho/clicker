const startButton = document.getElementById('start-button');
const clickButton = document.getElementById('click-button');
const scoreNode = document.getElementById('score');
const timerNode = document.getElementById('timer');


let score = 0;
let timer = 5;

startButton.addEventListener('click', start);
clickButton.addEventListener('click', click);

function start() {
    startButton.style.display = 'none';
    clickButton.style.display = 'inline-block';
    scoreNode.style.display = 'block';
    timerNode.style.display = 'block';
    scoreNode.innerText = `Score: ${score}`;
    timerNode.innerText = `Time: ${timer}`;

    const interval = setInterval(() => {
        timer--;
        timerNode.innerText = `Time: ${timer}`;

        if (!timer) {
            clearInterval(interval);
            clickButton.style.display = 'none';
            timerNode.style.display = 'none';
            scoreNode.style.fontSize = '50px';
            
            setTimeout(() => {
                scoreNode.style.display = 'none';
                scoreNode.style.fontSize = '35px';
                startButton.style.display = 'inline-block';
                timer = 5;
                score = 0;
            }, 5000);
        }
    }, 1000);
}

function click() {
    score++;
    scoreNode.innerText = `Score: ${score}`;
}
