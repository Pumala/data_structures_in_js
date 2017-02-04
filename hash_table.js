function HashTable(size) {
  // determines how big the hash table is
  // how many buckets we have
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  var total = 0;
  for(var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
}
HashTable.prototype.insert = function(key, value) {
  // hash our key
  var index = this.hash(key);
  // if our bucket is empty, make a new Hash Node
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    // travel through the chain of nodes
    var currNode = this.buckets[index];
    while (currNode.next) {
      // update key's value
      if (currNode.next.key === key) {
        currNode.next.value = value;
        // stop running after updating
        return;
      }
      currNode = currNode.next;
    }
    // add new Hash Node to end of chain
    currNode.next = new HashNode(key, value);
  }
}

HashTable.prototype.retrieveAll = function() {
  // create an empty Array
  var allNodes = [];
  // loop through every bucket
  for (var i = 0; i < this.numBuckets; i++) {
    // travel down the chain of nodes if it exists
    var currNode = this.buckets[i];
    while (currNode) {
      allNodes.push(currNode);
      currNode = currNode.next;
    }
  }
  return allNodes;
}

var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@gmail.com');
myHT.insert('Dean', 'deanMonster@gmail.com');
myHT.insert('Megan', 'meganMoore@gmail.com');
myHT.insert('Dane', 'danetheCook@gmail.com');
console.log(myHT);

console.log(myHT.retrieveAll());


// console.log(myHT.buckets);
// console.log(myHT.hash('Becca'));
// console.log(myHT);
// console.log("hello world".charCodeAt(0));
