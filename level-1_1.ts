let counter: number = 11;

const countdown = setTimeout(() => {
    console.log('Hello from setTimeout method! o/');
}, 1000);

console.log('Start: Warten für 3 Sekunden...');

const interval = setInterval(() => {
    counter--;
    if (counter === 8) {
        console.log('Erledigt. Du hast 3 Sekunden verschwendet');
    } else if(counter === 0) {
        console.log('Endlich Feierabend!');
        clearInterval(interval);
    }
    if(counter !== 0) {
        console.log(counter);
    }
}, 1000);