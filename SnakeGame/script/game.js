const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');

const gameboard = new Image();
gameboard.src = './img/gameboard.png';

const foodImg = new Image();
foodImg.src = './img/food.png';

const snakeHead = new Image();
snakeHead.src = './img/head.svg';

const snakeBody = new Image();
snakeBody.src = './img/body.svg';


let box = 32;
let score = 0;


let foodPosition = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
};

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

let highScore = localStorage.getItem('highScore') || 0;







function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x == arr[i].x && head.y == arr[i].y) {
            clearInterval(game)
        }        
    }
}


function drawGame() {

    ctx.drawImage(gameboard, 0, 0);
    ctx.drawImage(foodImg, foodPosition.x, foodPosition.y);


    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
    }
    
    for (let i = 0; i < snake.length; i++) {
        if (i == 0) {
            ctx.save();

            const centerX = snake[i].x + box / 2;
            const centerY = snake[i].y + box / 2;

            ctx.translate(centerX, centerY); 

            if (dir === 'left') ctx.rotate(Math.PI / 2);          // 90°
            else if (dir === 'right' || dir === 'rigth') ctx.rotate(-Math.PI / 2); // -90°
            else if (dir === 'down') ctx.rotate(Math.PI * 2);        
            else if (dir === 'up') ctx.rotate(Math.PI);          // 180°
            ctx.drawImage(snakeHead, -box / 2, -box / 2, box, box);
            ctx.restore();

        }else {
            ctx.drawImage(snakeBody, snake[i].x, snake[i].y, box, box);
            
        }
    }

    ctx.fillStyle = 'white';
    ctx.font = '55px Arial';
    ctx.fillText(score, box * 2.5 , box * 1.8);



    ctx.font = '25px Arial';
    ctx.fillText(`High score: ${highScore}`, box * 12, box * 1.3);
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX == foodPosition.x && snakeY == foodPosition.y) {
        score++;       
        foodPosition = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        };
    }else {
        snake.pop();
    };

    if(snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17){
        gameOver()
    };

    if(dir == 'left') snakeX -= box;
    if(dir == 'rigth') snakeX += box;
    if(dir == 'up') snakeY -= box;
    if(dir == 'down') snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    eatTail(newHead, snake);
    snake.unshift(newHead);    
};



let game = setInterval(drawGame, 120);

function restartGame() {
    score = 0;
    dir = null;
    isGameOver = false;
    snake = [{ x: 9 * box, y: 10 * box }];
    foodPosition = {
        x: Math.floor((Math.random() * 17 + 1)) * box,
        y: Math.floor((Math.random() * 15 + 3)) * box
    };
    game = setInterval(drawGame, 120);
};

function gameOver() {
    isGameOver = true;
    clearInterval(game);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.font = '70px Arial';
    ctx.fillText('GAME OVER', canvas.width / 2 - 200, canvas.height / 2);

    ctx.font = '30px Arial';
    ctx.fillText('Press R to restart', canvas.width / 2 - 130, canvas.height / 2 + 50);
};

