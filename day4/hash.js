function hashFunction(key, bucketSize){

    if (typeof key !== "string"){ // ex [1,2,3]
        key = JSON.stringify(key); // "[1,2,3]"
    }

    hash = 0;
    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
    }

    return hash % bucketSize; 
}

let bucketSize = 5;
bucket=[[],[],[],[],[]];

function put(key,value){
    let index = hashFunction(key,bucketSize);
    let bucketList = bucket[index];

    for(let i = 0; i < bucketList.length; i++){
        if(bucketList[i][0] == key){
            bucketList[i][1] = value;
            return;
        }
    }

    bucketList.push([key,value]);
}


function get(key,value){
    let index = hashFunction(key,bucketSize);
    let bucketList = bucket[index];

    for (let i = 0; i < bucketList.length; i++ ){
        if(bucketList[i][0] == key){
            return bucketList[i][1];
        }
    }
    return null;
}

function remove(key,value){
    let index = hashFunction(key,bucketSize);
    let bucketList = bucket[index];

    for(let i = 0; i < bucketList.length; i++){
        if(bucketList[i][0] == key){
            bucketList.splice(i,1);
            return;
        }
    }
}

function containsKey(key){
    let index = hashFunction(key, bucketSize);
    let bucketList = bucket[index];

    for (let i = 0; i<bucketList.length;i++){
        if (bucketList[i][0] == key){
            return true;
        } 
    }
    return false;
}

function keys(){
    let result = [];
    for(let i = 0; i < bucket.length; i++){
        let bucketList = bucket[i];
        for (let j = 0; j < bucketList.length; j++){
            result.push(bucketList[j][0]);
        }
    }
    return result;
}

// 전체 데이터 개수 반환
function size(){
    let count = 0;
    for(let i = 0; i< bucket.length;i++){
        count += bucket[i].length;
    }
    return count;
}

function isEmpty(){
    return size() === 0;
}

function clear(){
    bucket =[[],[],[],[],[]];
}

put("Jhon","85점");
put("Alice", "92점");
put("Bob","78점");

console.log(get("Jhon"));
console.log(get("Alice"));
console.log(get("Bob"));

remove("Alice");
console.log(get("Alice"));

put("Jhon", "90점");
console.log(get("Jhon"));


