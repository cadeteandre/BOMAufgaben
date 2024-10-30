const time = document.querySelector('.zeit') as HTMLDivElement;
const btn = document.querySelector('#btn') as HTMLButtonElement;

let counter: number = 100;
btn.addEventListener('click', () => {
    const interval = setInterval(() => {
        if(counter === 0) {
            clearInterval(interval);
        } else {
            counter--;
            time.innerText = `${counter}%`;
        }
    }, 100);
})