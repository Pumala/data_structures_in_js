function LinkedList() {
  // the head and tail pointers have a value of null
  // because we haven't added anything to it yet
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  // create a new node
  // value is assigned the value of the parameter being
  // passed in
  // next value is the curr head value (which could be null)
  // prev value is null because nothing comes before it;
  // it is the first node
  var newNode = new Node(value, this.head, null);
  // check if there are any nodes present
  if (this.head)
    // since the current head is no longer the head node
    // update its prev value to be new Node
    // (the node we just created)
    this.head.prev = newNode;
  else
    // if no nodes, set the new node as the tail and head node
    this.tail = newNode;
    this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  // create an instance of Node
  var newNode = new Node(value, null, this.tail);
  // check if any nodes exist
  if (this.tail)
    this.tail.next = newNode;
  else
    // if no nodes, set the new node as the tail and head node
    this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
  // check if there is not a head node
  if (!this.head) return null;

  // assign current head node value to a variable
  var val = this.head.value;

  // assign the next node as the new head node
  this.head = this.head.next;

  if (this.head)
  // update new head node prev value as null
    this.head.prev = null;
  else
    // update tail node with a value of null
    // because if no head node, then no tail node
    this.tail = null;
    return val;
}

LinkedList.prototype.removeTail = function() {
  // check if tail node does not exist
  if (!this.tail) return null;

  // assign current tail node value to variable
  var val = this.tail.value;

  // assign the previous node as the new tail node
  this.tail = this.tail.prev;

  if (this.tail)
  // update new tail node next value as null
    this.tail.next = null;
  else
    // update head node with a value of null
    // because if no tail node, then no head node
    this.head = null;
    return val;
}

// search for a value
// if it doesn't exist, return null
// if it does, return the value
LinkedList.prototype.search = function(searchValue) {
  // set this.head as currNode just as a starting point
  var currNode = this.head;

  while(currNode) {
    if (currNode.value === searchValue) return currNode.value;
    // update currNode.next as the new currNode
    currNode = currNode.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function(value) {
  // if so head node, return null immediately
  if (!this.head)
    return null

  var indexes = [];
  var currNode = this.head;
  var currIndex = 0;

  while (currNode) {
    if (currNode.value === value)
      // if the values match, add the currIndex
      // to the indexes array
      indexes.push(currIndex);
    // update currNode.next as the new currNode
    currNode = currNode.next;
    currIndex++;
  }
  if (indexes.length > 0)
    return indexes;
  else
    // return null if the value is not found
    return null;
}

// create an instance of LinkedList
var mathList = new LinkedList();

// add new nodes to the head
mathList.addToHead('dog');
mathList.addToTail(83);
mathList.addToTail('hello');
mathList.addToHead(83);
mathList.addToHead('breathe');

// console.log(mathList.indexOf(83));

// console.log(mathList);

function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  // key does not exist in the array
  return -1;
}

console.log(binarySearch([22, 14, 33, 20, 8, 44, 67], 44));
console.log(binarySearch([22, 14, 33, 20, 8, 44, 67], 71));
