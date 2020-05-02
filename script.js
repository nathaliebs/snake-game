let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] = {
    x: 8 * box, 
    y: 8 * box
}
let direction = "r"

function createBg() {
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function createSnake() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "darkgreen"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function startGame() {
    createBg()
    createSnake()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == "r") snakeX += box
    if(direction == "l") snakeX -= box
    if(direction == "u") snakeY -= box
    if(direction == "d") snakeY += box

    snake.pop()

    let step = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(step)
}

let game = setInterval(startGame, 100)