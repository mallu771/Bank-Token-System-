export class Queue{
    collection = [];
    length = 0;
    dequeue(){
        this.length--;
      return this.collection.shift();
      
    }
    enqueue(value)
    {
        this.collection.push(value);
        this.length++;
    }
    size(){
        return this.length;
    }
}