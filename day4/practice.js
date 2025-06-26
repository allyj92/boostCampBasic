// function hashFunction(key, bucketSize){
//     let hash = 0;

//     for (let i = 0; i< key.length; i++){
//         // 유니코드 숫자 값 구하기
//         // 'a' -> 97 , 'p' -> 112
//         hash += key.charCodeAt(i);
//     }
//     return hash % bucketSize;
// }

// let bucketSize = 5;


// function hashFunction(key, bucketSize){
//     let hash = 0;
//     for (let i = 0; i < key.length; i++){
//         hash += key.charCodeAt(i);
//     } 

//     return hash % bucketSize;
// }

// let bucketSize = 5;

// console.log("apple -> ", hashFunction("apple", bucketSize));
// console.log("banana ->", hashFunction("banana", bucketSize));
// console.log("cat-> ", hashFunction("cat",bucketSize));

// function hashFunction(key, bucketSize){
//     let hash = 0;
//     for(let i = 0; i < key.length; i++){
//         hash += key.charCodeAt(i);
//     }

//     return hash % bucketSize;
// }

// let bucketSize = 5;

// let bucket = [[], [], [], [], []];

// function put(key, value){

//     let index = hashFunction(key, bucketSize);
//     let bucketList = bucket[index];

//     for (let i = 0; i < bucketList.length;i++){
//         if (bucketList[i][0] === key){ // 이미 키가 있으면
//             bucketList[i][1] = value; // 값 덮어쓰기
//             return;
//         }
//     }

//     bucketList.push([key, value]); // 새로운 키-값 저장

// }


// function get(key){
//     let index = hashFunction(key, bucketSize);
//     let bucketList = bucket[index];

//     for (let i = 0; i < bucketList.length; i++){
//         if (bucketList[i][0] == key){
//             return bucketList[i][1];
//         }
//     }
//     return null; // 
// }

// function remove(key){
//     let index = hashFunction(key, bucketSize);
//     let bucketList = bucket[index];
//     // 버킷 안에 있는 데이터를 순회
//     for (let i = 0; i < bucketList.length; i++){
//         if(bucketList[i][0]==key){
//             bucketList.splice(i,1)
//             return;
//         }
//     }
// }

// put("apple","red");
// put("banana", "yellow");
// put("cat", "cute");

// console.log(get("apple"));
// console.log(get("banana"));
// console.log(get("cat"));

// remove("banana");
// console.log(get("banana")); 



function hashFunction(key, bucketSize){

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

    for(let i = 0; i <= bucketList.length; i++){
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
    for(let i = 0; i< bucketList.length;i++){
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


