const btn = document.querySelector('button') as HTMLButtonElement;
const showResults = document.querySelector('.showResults') as HTMLDivElement;

btn.addEventListener('click', () => {
    showResults.innerHTML = `
    <p>Browsername ${navigator.appName}</p>
    <p>Betriebssystem-Architektur ${navigator.platform}</p>
    <p>Browser-Version ${navigator.appVersion}</p>
    <p>Innere Breite des Dokuments: ${screen.width}</p>
    <p>Dokument Innenhöhe: ${screen.height}</p>
    <p>Color Depth: ${screen.colorDepth}</p>
    <p>Pixel Depth: ${screen.pixelDepth}</p>
    `;
})