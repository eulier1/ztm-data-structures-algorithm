class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      const address = this._hash(key)
      if(!this.data[address]) {
        this.data[address] = []
      } 
      this.data[address].push([key, value])
      return this.data
    }
  
    get(key) {
      const address = this._hash(key)
      const currentBucket = this.data[address]
      if (currentBucket) {
        console.log(currentBucket)
        for (let i = 0; i <= currentBucket.length - 1; i++) {
          if (currentBucket[i][0].match(key)) {
            return currentBucket[i][1]
          }
        }
      } 
      return 'undefined'
      
    }
  }
  
  const myHashTable = new HashTable(2);
  myHashTable.set('grapes', 10000)
  myHashTable.set('apples', 34)
  myHashTable.get('appples')