const { combineTableNames } = require("sequelize/types/lib/utils")

var x = 1

x= 23

console.log(x)

function showAlert() {
    var name = 'Desmond'

    alert('Hi ' + name)
}

// showAlert()

function otherFunction(){
    alert('Hi ' + name)
}

otherFunction()

function findX() {
    var x = 1;
    {
        var x = 2
    }
    alert(x)
}

// findX()

const count = [1,2,3,4,5]

count = [1,2,7,8,9]

console.log(count)

const lTetromino = 'firstShape'
const zTetromino = 'secondShape'
const oTetromino = 'thirdShape'
const iTetromino = 'fourthShape'
const tTetromino = 'fifthShape'



const tetrominoes = [lTetromino, zTetromino, oTetromino, iTetromino, tTetromino]

console.log(tetrominoes[5])

const name = ['Desmond', 'Lam']

function showAlert() {
    //your code block goes here
    showAlert(name[0] + ' ' + name[1] + 'You have been alerted!')
}

showAlert()

let name = ['Desmond', 'Anna', 'Joy', 'Will']

combineTableNames.forEach(name => {
    console.log(name + ' is the best!')
})