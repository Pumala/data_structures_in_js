function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  var currValue = this.value;
  // is the value less than or equal to the current value
  if (value <= currValue) {
    // then check if there is no left child
    if (!this.left) {
      // create the left child as a new BST
      this.left = new BinarySearchTree(value);
      // if there is a left child already,
      // we want to run our insert function
      // on the curr left child
    } else {
      this.left.insert(value);
    }

  } else {
    // check if there isn't a right child
    if (!this.right) {
      this.right = new BinarySearchTree(value);
      // if there is a right child already
      // we want to run our insert function
      // on the curr right child
    } else {
      this.right.insert(value);
    }
  }
}

// tells us if our BST contains a certain value
// returns boolean value
BinarySearchTree.prototype.contains = function(value) {
  // check if the value equals this.value
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    // if there is no left child
    if (!this.left) {
      // return false because that means
      // it doesn't contain the value
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    // check if there isn't a right child
   if (!this.right) {
     return false;
   } else {
     return this.right.contains(value);
   }
  }
}

BinarySearchTree.prototype.depthFirstTraversal = function(anotherFunc, order) {
  if (order === 'pre-order') {
    anotherFunc(this.value);
  }
  if (this.left) {
    this.left.depthFirstTraversal(anotherFunc, order);
  }
  if (order === 'in-order') {
    anotherFunc(this.value);
  }
  if (this.right) {
    this.right.depthFirstTraversal(anotherFunc, order);
  }
  if (order === 'post-order') {
    anotherFunc(this.value);
  }
}

BinarySearchTree.prototype.breadthFirstTraversal = function(anotherFunc) {
  // a list that files the rule: first in, first out
  // ex: lunch line
  // start the queue with 'this'
  // 'this' refers to the root node of the binary search tree
  var queue = [this];
  // only run while queue isn't empty
  while (queue.length) {
    // take the first node out of the queue
    // and store it in a variable
    var treeNode = queue.shift();
    anotherFunc(treeNode);
    // next, we want to add the children of the treeNode
    // to the queue
    if (treeNode.left) {
      queue.push(treeNode.left);
    }
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
  }
}

BinarySearchTree.prototype.getMinVal = function() {
  if (this.left) {
    return this.left.getMinVal();
  } else {
    return this.value;
  }

}

BinarySearchTree.prototype.getMaxVal = function() {
  if (this.right) {
    return this.right.getMaxVal();
  } else {
    return this.value;
  }
}

var bst = new BinarySearchTree(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

function log(value) {
  console.log(value);
}

function logNodeVal(node) {
  console.log(node.value);
}

bst.getMinVal();
bst.getMaxVal();



// bst.breadthFirstTraversal(logNodeVal);




// bst.depthFirstTraversal(log, 'post-order');
// console.log(bst.contains(50));  // logs out true
// console.log(bst.contains(83));  // logs out false
// console.log(bst.contains(72));  // logs out false
// console.log(bst.contains(35));  // logs out true
