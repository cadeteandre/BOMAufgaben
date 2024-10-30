const time = document.querySelector('#time') as HTMLDivElement;
const minutes = document.querySelector('#minutes') as HTMLInputElement;
const startBtn = document.querySelector('#start-button') as HTMLButtonElement;
const pauseBtn = document.querySelector('#pause-button') as HTMLButtonElement;
const restartBtn = document.querySelector('#restart-button') as HTMLButtonElement;
const resetBtn = document.querySelector('#reset-button') as HTMLButtonElement;

let counterMin: number = 0;
let counterSec: number = 59;
let timerCheck: boolean = false;
const openingMin: number[] = [];
let interval: any = null; //! Need to put a right type here!

const updateDisplay = () => {
    const minDisplay = counterMin >= 10 ? counterMin : `0${counterMin}`;
    const secDisplay = counterSec >= 10 ? counterSec : `0${counterSec}`;
    time.innerText = `${minDisplay}:${secDisplay}`;
};

const timerStart = () => {
    
    if (openingMin.length === 0) {
        openingMin.push(Number(minutes.value));
    }

    if(!timerCheck) {
        counterMin = Number(minutes.value);
        counterSec = 59;
    }

    if(interval) {clearInterval(interval)};

    interval = setInterval(() => {
        if (counterMin > 0 || counterSec > 0) {
            if (counterSec === 0) {
                counterMin--;
                counterSec = 59;
            } else {
                counterSec--;
            }
            updateDisplay();
        } else {
            clearInterval(interval);
            timerCheck = false;
        }
    }, 100);
}

startBtn.addEventListener('click', () => {
    if (!timerCheck) {
        timerStart();  
    } else if (interval === null) {
        timerStart();
    }
    timerCheck = false;
    minutes.value = '';
});

pauseBtn.addEventListener('click', () => {
    if (interval) {clearInterval(interval)};
    interval = null;
    timerCheck = true;
});

resetBtn.addEventListener('click', () => {
    if (interval) clearInterval(interval);
    interval = null;
    counterMin = 0;
    counterSec = 0;
    timerCheck = false;
    updateDisplay();
    minutes.value = '';
    openingMin.length = 0;
});

restartBtn.addEventListener('click', () => {
    if (openingMin.length > 0) {
        minutes.value = openingMin[0].toString();
        timerCheck = false;
        counterMin = openingMin[0];
        counterSec = 59;
        timerStart();
        minutes.value = '';
    }
});