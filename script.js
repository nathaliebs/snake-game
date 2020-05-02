let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32
let snake = []
snake[0] = {
    x: 8 * box, 
    y: 8 * box
}
let direction = "r"
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function createFood() {
    context.fillStyle = "red"
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update)

function update(event) {
    if(event.keyCode == 37 && direction != "r") direction = "l"
    if(event.keyCode == 38 && direction != "d") direction = "u"
    if(event.keyCode == 39 && direction != "l") direction = "r"
    if(event.keyCode == 40 && direction != "u") direction = "d"
}

function startGame() {
    if(snake[0].x > 15 * box && direction == "r") snake[0].x = 0
    if(snake[0].x < 0 * box && direction == "l") snake[0].x =  16 * box
    if(snake[0].y < 0 * box && direction == "u") snake[0].y = 16 * box
    if(snake[0].y > 15 * box && direction == "d") snake[0].y =  0

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game)
            alert('Game Over :(')
        }
    }

    createBg()
    createSnake()
    createFood()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == "r") snakeX += box
    if(direction == "l") snakeX -= box
    if(direction == "u") snakeY -= box
    if(direction == "d") snakeY += box

    if(snakeX != food.x || snakeY != food.y){
        snake.pop()
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    let step = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(step)
}

let game = setInterval(startGame, 100)