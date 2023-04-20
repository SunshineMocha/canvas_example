console.log("HEY");

const myCanvas = document.getElementById('my-canvas'); // Mi chiamo il mio canvas

const ctx = myCanvas.getContext('2d'); // Prendo un contesto: 2d per 2D, WebGL per 3D

// QUESTE DUE LINEE SOPRA SARANNO SEMPRE PRESENTI

//ctx.fillRect(20,20,50,60);


for (let i = 0; i < 750; i++) {
    const originX = Math.random() * 600;
    const originY = Math.random() * 600;
    const width = Math.random() * 100;
    const height = Math.random() * 100;

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let a = Math.floor(Math.random()*256);

    ctx.fillStyle = `rgba(${r},${g},${b},${a})`;

    ctx.fillRect(originX, originY, width, height);
}