import { createLinkedList } from "./linkedlist.js";

function createHashMap(){
    const loadfactor = 0.75;
    let capacity = 16;
    
    let hashMapArray = [];
    for(let i = 0; i < capacity; i++){
        hashMapArray.push(null);
    };

    const doubleCapacity = () => {
        const oldCap = capacity;
        capacity *= 2;
        for(let i = oldCap; i < capacity; i++){
            hashMapArray.push(null);
        }
    };

    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i > key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }

        return hashCode
    };

    const set = (key, value) => {
        const hashCode = hash(key);
        if(hashMapArray[hashCode] === null){
            hashMapArray[hashCode] = createLinkedList().append(key, value);
        } else if(hashMapArray[hashCode]) {
            //what to do when key exists
        }
    }

}