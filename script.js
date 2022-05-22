const gridBox = document.querySelectorAll('div.grid-item')
const title = document.querySelector('.title')
let clickCounter = 0 
const squares = document.querySelectorAll('.square')
let board = [1,2,3,4,5,6,7,8,9]
let player1 = true


// if(player1){
// title.innerText = "Player 1's turn"
// }else{
//     title.innerText = "Player 2's turn"
// }

const colorBox = function(box){
    box.addEventListener('click',function(){
        
        clickCounter ++
        if(clickCounter % 2 == 0||clickCounter === 0){
            box.style.backgroundColor = '#184e77'
        } else if (clickCounter % 2 !== 0){
            box.style.backgroundColor = '#d9ed92'
        }
        if(box[0]){
            box.removeEventListener('click',)
        }
        console.log(clickCounter)
        
        // clickCounter !== 9
    })
}

gridBox.forEach(colorBox)