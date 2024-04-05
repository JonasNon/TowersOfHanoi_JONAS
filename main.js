'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // Your code here
  let pickedUp = stacks[startStack].pop()
  stacks[endStack].push(pickedUp)

}



//gets the value of the last element of the array the user chose
// and the last element of the targeted array
const isLegal = (startStack, endStack) => {
  // Your code here
  let firstNum = stacks[startStack][stacks[startStack].length - 1]
  let secondNum = stacks[endStack][stacks[endStack].length - 1]
  // if (secondNum == undefined) {
  //   secondNum = 0
  // }
  if (firstNum > secondNum) {
    return false
  } else {
    return true
  }

}


//if only the center stack is not empty, declare the player a win
const checkForWin = () => {
  if (stacks["a"].length == 0 && stacks["c"].length == 0) {
    return true
  } else {
    return false
  }
}


//runs the main logic for the game, start to finish
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack) == true) {
    movePiece(startStack, endStack)
    checkForWin()
  }
  

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
