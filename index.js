
let stone = null
let inHand = false

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  console.log(row)
  num = row.lastElementChild
  // console.log(num)

  
  // console.log("Yay, we clicked an item", row)
  // console.log("Here is the stone's id: ", row.id)
  // console.log("Here is the stone's data-size: ", currentRow)

  if (inHand == false) {
    pickUpStone(row,num)
  } else {
    dropStone(row.id)

  }

} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID, num) => {
  // let selectedRow = document.getElementById(rowID);
  stone = rowID.removeChild(num);
  stone = num
  // console.log(stone)
  inHand = true

}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID) => {
  // console.log(document.getElementById(rowID).firstChild)
  row = document.getElementById(rowID)
  num = document.getElementById(rowID).lastElementChild
  // console.log(num.id)
  console.log(stone.id)


  if (num == null || stone.id < num.id) {
    row.appendChild(stone)
    stone = null
    inHand = false
  } 

  let row1 = document.getElementById("top-row")
  let row2 = document.getElementById("middle-row")

  if (row1.childElementCount == 4 || row2.childElementCount == 4) {
    setTimeout(() => { 
    window.alert("You Win!!!")
  }, 500);
    
  }
}
// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

