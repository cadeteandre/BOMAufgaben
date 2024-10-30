const message = document.querySelector('.message') as HTMLDivElement;
const count = document.querySelector('#count') as HTMLDivElement;

let counter: number = 10;
const messageDisappears = () => {
    const interval = setInterval(() => {
        counter--;
        count.innerText = counter.toString();
        if(counter === 0) {
            clearInterval(interval);
            message.style.opacity = '0';

            setTimeout(() => {
                message.style.display = 'none';
            }, 1000)
        }
    }, 1000)
}
messageDisappears();