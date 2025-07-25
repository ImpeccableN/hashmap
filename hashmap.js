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

}