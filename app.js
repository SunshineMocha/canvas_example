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

// for (let i = 0; i < 100; i++) { // animo un punto, lo stampo piu volte in posizioni diverse e in colori diversi con il for
    
//     // let r = Math.floor(Math.random()*256);
//     // let g = Math.floor(Math.random()*256);
//     // let b = Math.floor(Math.random()*256);
    

//     // const point = { // Ho fatto una classe, questo oggetto generico non mi serve piu
//     //     x: 300,
//     //     y: 300
//     // }

//     //point.color = `rgba(${r},${g},${b})`; // non ho piu bisogno di generare il colore qui, faccio nella classe

//     // const randomColor = `rgba(${r},${g},${b})`;
    
//     // const point = new Point(300,300, randomColor); // invece di fare un new Point passo direttamente la funzione della classe

//     const point = Point.generateRandom(myCanvas.width,myCanvas.height); // creo il punto

//     setInterval(() => { // Animazione del punto
//         // const rndX = (Math.random()*4)-2; // vado a creare una funzione che mi genera la posizione del punto nella classe
//         // const rndY = (Math.random()*4)-2; // vado a creare una funzione che mi genera la posizione del punto nella classe
//         // ctx.fillStyle = point.color; // da qui so che è un rettangolo, ma facciamolo noi in point (draw)
//         // ctx.fillRect(point.x, point.y, 2, 2); // da qui so che è un rettangolo, ma facciamolo noi in point (draw)

//         point.draw(ctx);

//         // point.x += rndX; // vado a creare una funzione che mi genera la posizione del punto nella classe
//         // point.y += rndY; // vado a creare una funzione che mi genera la posizione del punto nella classe

//         point.changePosition(); // cambio la posizione per preparare il nuovo punto

//     }, 0);
// }


// anziche fare 100 punti in un ciclo, creiamo prima i 100 punti e poi li disegnamo tutti
// const pointArray = []; // dichiaro array vuoto 
// mi faccio una classe Generation che mi genera l'array, invece di dichiararla manualmente
// const newGeneration = new Generation();

// for (let i = 0; i < 10000; i++) { // genero 100 punti // vado a fare una factory su Generation
//     const newPoint = Point.generateRandom(myCanvas.width, myCanvas.height); // genero 100 punti
//     newGeneration.addPoint(newPoint); // mi chiamo la funzione nella classe Generation
// }

let newGeneration = Generation.generateRandom(30, myCanvas.width, myCanvas.height);

console.log(newGeneration);

// setInterval(() => { // li disegno tutti in un unico intervallo, piuttosto che un intervallo in un ciclo
//     for (let i = 0; i < pointArray.length; i++) {
//         const point = pointArray[i];
//         point.draw(ctx);
//         point.changePosition();
//     }
// },0);

// ma set interval non è il metodo piu adatto, ne ho un altro per gestire meglio le animazioni, soprattutto se numerose. window.RequestAnimationFrame

// di solito questa funzione si chiama o frame o step. Mi ripeto la logica del setInterval

function step(timestamp){ // timestamp mi passa l'intervallo tra ogni punto

    // console.log(timestamp) // mi stampa il tempo tra ogni punto

    // for (let i = 0; i < newGeneration.pointsArray.length; i++) { // ho fatto la funzione nella classe Generation
    //     const point = newGeneration.pointsArray[i];
    //     point.draw(ctx);
    //     point.changePosition();
    // }

    newGeneration.draw(ctx); // chiamo la funzione

    if (newGeneration.isDead()) {
        ctx.fillStyle = 'rgba(0,0,0, 0.2)';
        ctx.fillRect(0,0,myCanvas.width, myCanvas.height)
        newGeneration = Generation.generateRandom(30, myCanvas.width, myCanvas.height);
    }

    window.requestAnimationFrame(step);// la butto nella funzione
}

window.requestAnimationFrame(step); // chiamo la funzione per la prima volta