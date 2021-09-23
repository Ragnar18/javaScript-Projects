const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';

hue = Math.random() * 360;
let number = 0;
let scale = 20;
const numberOfFlowers = 10;

const flowerArray = [];

class Flower {
    constructor() {
        this.angle = number * 20;
        this.radius = scale * Math.sqrt(number);
        this.positionX += Math.random(radius * Math.sin(angle) + canvas.width/4);
        this.positionY += Math.random(radius * Math.cos(angle) + canvas.width/4);

        

        this.ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        this.ctx.strokeStyle = 'pink';
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        this.number++;
        this.hue++;
        for(i = 0; i < flowerArray.length; i++) {
            flowerArray.push(new Flower());
    }
}
}

function drawFlower() {
    let angle = number * 20;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/4;
    let positionY = radius * Math.cos(angle) + canvas.width/4;

    ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue++;
    for(i = 0; i < flowerArray.length; i++) {
        flowerArray.push();
    }
}

function update() {
    this.positionX += Math.random() * 2 - 1;
    this.positionY += Math.random() * 2 - 1;
    
    }
    


function animate() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFlower();
    if(number > 300) return;
    requestAnimationFrame(animate);
}

animate();
