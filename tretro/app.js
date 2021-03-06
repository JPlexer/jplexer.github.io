document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-button')
    const width = 10
    let nextRandom = 0
    let timerId
    let score = 0
    let speed = 1500
    const colors = [
        'blue',
        'lightgreen',
        'purple',
        'yellow',
        'cyan',
        'red',
        'orange'
    ]

    //Tetrominos
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ]

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ]

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]
    const zrTetromino = [
        [2, width + 2, width + 1, width * 2 + 1],
        [width, width + 1, width * 2 + 1, width * 2 + 2],
        [2, width + 2, width + 1, width * 2 + 1],
        [width, width + 1, width * 2 + 1, width * 2 + 2]
    ]
    const lrTetromino = [
        [1, width + 2, width * 2 + 2, 2],
        [width, width + 1, width + 2, width * 2],
        [1, width + 1, width * 2 + 1, width * 2 + 2],
        [width + 2, width * 2, width * 2 + 1, width * 2 + 2]
    ]

    const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino, zrTetromino, lrTetromino]

    let currentPosition = 4
    let currentRotation = 0

    //random select tetromino
    let random = Math.floor(Math.random() * theTetrominos.length)
    let current = theTetrominos[random][currentRotation]

    //Draw
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
            squares[currentPosition + index].style.backgroundColor = colors[random]
        })
    }

    //Undraw
    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
            squares[currentPosition + index].style.backgroundColor = ''
        })
    }

    //control
    function control(e) {
        if (timerId) {
            if (e.keyCode === 37) {
                moveLeft()
            } else if (e.keyCode === 38) {
                rotate()
            } else if (e.keyCode === 39) {
                moveRight()
            } else if (e.keyCode === 40) {
                moveDown()
            }
        }

    }
    document.addEventListener('keydown', control)

    //down function
    function moveDown() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken')) || current.some(index => squares[currentPosition + index + width].classList.contains('takend'))) {
        } else {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }
}

    //freeze funktion
    function freeze() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken')) || current.some(index => squares[currentPosition + index + width].classList.contains('takend'))) {
            clearInterval(timerId)
            setTimeout(function(){timerId = setInterval(moveDown, speed)
                current.forEach(index => squares[currentPosition + index].classList.add('taken'))
                //neu auswählen
                random = nextRandom
                nextRandom = Math.floor(Math.random() * theTetrominos.length)
                current = theTetrominos[random][currentRotation]
                currentPosition = 4
                draw()
                displayShape()
                addScore()
                gameOver()
            
            
            }, 1000);
            
        }
    }

    //Tetromino nach Links
    function moveLeft() {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
        if (!isAtLeftEdge) currentPosition -= 1
        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1
        }
        draw()
    }

    //Tetromino nach Rechts
    function moveRight() {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
        if (!isAtRightEdge) currentPosition += 1
        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1
        }
        draw()
    }

    //Drehen
    function isAtRight() {
        return current.some(index => (currentPosition + index + 1) % width === 0)
    }

    function isAtLeft() {
        return current.some(index => (currentPosition + index) % width === 0)
    }

    function checkRotatedPosition(P) {
        P = P || currentPosition //get current position.  Then, check if the piece is near the left side.
        if ((P + 1) % width < 4) { //add 1 because the position index can be 1 less than where the piece is (with how they are indexed).     
            if (isAtRight()) { //use actual position to check if it's flipped over to right side
                currentPosition += 1 //if so, add one to wrap it back around
                checkRotatedPosition(P) //check again.  Pass position from start, since long block might need to move more.
            }
        } else if (P % width > 5) {
            if (isAtLeft()) {
                currentPosition -= 1
                checkRotatedPosition(P)
            }
        }
    }

    function rotate() {
        undraw()
        currentRotation++
        if (currentRotation === current.length) {
            currentRotation = 0
        }
        current = theTetrominos[random][currentRotation]
        checkRotatedPosition()
        draw()
    }

    //show mini grid
    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    let displayIndex = 0


    //Tetromino ohne rotation
    const upNextTetrominoes = [
        [1, displayWidth + 1, displayWidth * 2 + 1, 2], //lTetromino
        [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], //zTetromino
        [1, displayWidth, displayWidth + 1, displayWidth + 2], //tTetromino
        [0, 1, displayWidth, displayWidth + 1], //oTetromino
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1], //iTetromino
        [2, displayWidth + 2, displayWidth + 1, displayWidth * 2 + 1], //zrtetromino
        [1, displayWidth + 2, displayWidth * 2 + 2, 2] //lrtetromino
    ]

    //mini grid anzeigen
    function displayShape() {
        displaySquares.forEach(square => {
            square.classList.remove('tetromino')
            square.style.backgroundColor = ''
        })
        upNextTetrominoes[nextRandom].forEach(index => {
            displaySquares[displayIndex + index].classList.add('tetromino')
            displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
        })
    }

    //Button
    startBtn.addEventListener('click', () => {
        if (timerId) {
            clearInterval(timerId)
            timerId = null
        } else {
            draw()
            timerId = setInterval(moveDown, speed)
            nextRandom = Math.floor(Math.random() * theTetrominos.length)
            displayShape()
        }
    })

    //score
    function addScore() {
        for (let i = 0; i < 199; i += width) {
            const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9]

            if (row.every(index => squares[index].classList.contains('taken'))) {
                score += 10
                scoreDisplay.innerHTML = score
                row.forEach(index => {
                    squares[index].classList.remove('taken')
                    squares[index].classList.remove('tetromino')
                    squares[index].style.backgroundColor = ''
                })
                const squaresRemoved = squares.splice(i, width)
                squares = squaresRemoved.concat(squares)
                squares.forEach(cell => grid.appendChild(cell))
                checkScore();
            }
        }
    }

    //check score/speed

    function checkScore() {
        if (score % 100 === 0) {
            if (speed < 200) {
                speed = 200
                clearInterval(timerId)
                timerId = setInterval(moveDown, speed)
            } else {
                speed = speed - 50
                clearInterval(timerId)
                timerId = setInterval(moveDown, speed)
            }
        }
    }

    //game over

    function gameOver() {
        if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            scoreDisplay.innerHTML = score + ' (Game Over)'
            clearInterval(timerId)
            timerId = null
        }
    }














})