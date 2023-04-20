const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

// const point = {
//     x: 300,
//     y: 300
// }

// setInterval(() => { // Animazione del punto
//     ctx.fillStyle = "red"
//     ctx.fillRect(point.x, point.y, 2, 2);
//     point.y += 1;
// }, 0);


// ma se voglio farla andare in una direzione casuale?

// setInterval(() => { // Animazione del punto
//     const rndX = (Math.random()*4)-2;
//     const rndY = (Math.random()*4)-2;
//     ctx.fillStyle = "red"
//     ctx.fillRect(point.x, point.y, 2, 2);
//     point.x += rndX;
//     point.y += rndY;
// }, 0);

for (let i = 0; i < 100; i++) { // animo un punto, lo stampo piu volte in posizioni diverse e in colori diversi
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    

    const point = {
        x: 300,
        y: 300
    }

    point.color = `rgba(${r},${g},${b})`;

    setInterval(() => { // Animazione del punto
        const rndX = (Math.random()*4)-2;
        const rndY = (Math.random()*4)-2;
        ctx.fillStyle = point.color;
        ctx.fillRect(point.x, point.y, 2, 2);
        point.x += rndX;
        point.y += rndY;
    }, 0);
    

}