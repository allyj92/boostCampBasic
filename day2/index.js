
//1-1. 배열 만들기 연습
// 배열 생성
let arr =[10,30,50,80];

// 배열에 값 추가
arr.push(25);
console.log(arr);

// 배열에서 마지막 값 가져오기
console.log(arr[arr.length-1]);

//1-2. 배열 순회 연습
let arr1 = [10,30, 50, 80];

for (let i = 0; i < arr.length; i++){
    console.log(arr1[i]);
}

arr1.forEach((arr)=>{
    console.log(arr);
})

let arr2 = [10,30,50,80];
let card = 29;

// 최소 거리 초기값
let minDiff=Infinity;
// 가장 가까운 값이 저장된 배열의 위치
let closeIndex = 0;

for(let i = 0; i < arr2.length; i++){
    // 현재 배열 값과 내 카드 거리 계산
    let diff = Math.abs(arr2[i]-card);
    if(diff<minDiff){
        minDiff = diff;
        closeIndex = i;
    }

}

console.log(arr2[closeIndex]); // 가장 가까운 거리   

// 1-4. Map 연습
let scores = new Map();

// 값 넣기
scores.set("A",0);
scores.set("B",0);
scores.set("C",0);

console.log(scores.get("A"));

scores.set("A",scores.get("A")+2);
console.log(scores.get("A"));

// 1-5. 배열 비우기 연습
let arr4 = [10,30,50,80];
arr4=[];

let arr5 = [10,30,50,80];
arr5.length=0;

let numberList = [];
numberList.push(5);
numberList.push(10);
numberList.push(20);
console.log(numberList);


let scoreBoard = [4,8,12,16];

console.log(scoreBoard[scoreBoard.length-1]);

let playerScore=[3,6,9,12];

for(let i = 0; i<playerScore.length;i++){
    console.log(playerScore[i]);
}

playerScore.forEach((value)=>{
    console.log(value);
})

let deck = [5, 15, 25, 35];
let currentCard = 18;

let smallGap = Infinity;
let closestPosition = 0;

for(let i = 0; i < deck.length; i++){
    let distance = Math.abs(deck[i] = currentCard);

    if (distance < smallGap){
        smallGap = distance;
        closestPosition = i
    }
}

console.log(`가장 가까운 값은: ${deck[closestPosition]}`);

let zones = [10, 30, 50, 80];
let selectedCard = 40;

let smallestgap = Infinity;
let idx = 0;

for(let i = 0; i<zones.length;i++){
    let gap = Math.abs(zones[i]-selectedCard);
    if(gap < smallestgap){
        smallestgap = gap;
        idx = i;
    }
}

console.log(zones[idx]);

let penalties = new Map();

penalties.set("player1",0);
penalties.set("player2",0);
penalties.set("player3",0);

penalties.set("player1",penalties.get("player1")+2);

console.log(penalties.get("player1"));

let penaltyScores = new Map([
    ["player1",1],
    ["player2",2],
    ["player3",3]
]);

console.log(penaltyScores.get("player3") + 4);


let playerPenalties = new Map([
    ['playerA',2],
    ['PlayerB',4],
    ['PlayerV',1],
]);


playerPenalties.set("PlayerB",playerPenalties.get("PlayerB") + 1 );

for (const [name,point] of playerPenalties){
    console.log(`${name} = ${point}`);
}

let basket = [];

basket.push(7);
basket.push(14);
basket.push(21);

console.log(basket);
console.log(basket[basket.length-1]);

let scores2 = [5,10,15,20,25];

for(let i=0;i<scores2.length;i++){
    console.log(scores2[i]*2);
}

let numbers = [8, 17, 29, 45];
let myNumber = 20;

let smallestNum = Infinity;
let idx2 = 0;

for(let i = 0; i<numbers.length;i++){
    let distance = Math.abs(numbers[i] - myNumber);
    if (distance < smallestNum){
        smallestNum = distance;
        idx2 = i;
    }
}

console.log(numbers[idx2]);

let penaltyBoard = new Map([
    ["User1",1],
    ["User2",3],
    ["User3",2],
]);

penaltyBoard.set("User3",penaltyBoard.get("User3")+4);

for([user,num] of penaltyBoard){
    console.log(`${user} - ${num}`);
}

let cardSlots = [10,30,50,80];
let targetCard = 31;

let closestNum = Infinity;
let idx3=0;

let result = [];

for (let i = 0; i < cardSlots.length;i++){
    let distanceNum = Math.abs(cardSlots[i] - targetCard);
    if(distanceNum<closestNum){
        closestNum = distanceNum;
        idx3 = i;
    }
}

console.log(`가장 가까운 값 : ${cardSlots[idx3]}`)

for(let i = 0; i < cardSlots.length;i++){
    if (cardSlots[i] <cardSlots[idx3]){
        result.push(cardSlots[i]);
    }else{
        console.log("추가불가");
    }
}

console.log(result);

let PlayerA = [12, 25, 35];
let PlayerB = [14, 28, 42];
let PlayerC = [5, 32, 50];

for(let i = 0; i<3; i++){
    console.log(`\n{i}번쨰 턴 시작!`);

    // 각 플레이어 카드 1장 pop
    let cardA = PlayerA.pop();
    let cardB = PlayerB.pop();
    let cardC = PlayerC.pop();

    console.log(`A가 낸 카드 : ${cardA}`);
    console.log(`B가 낸 카드 : ${cardB}`);
    console.log(`C가 낸 카드 : ${cardC}`);

    // 가장 작은 카드 찾기
    let smallest = cardA;
    let winner = "A";

    if (cardB < smallest){
        smallest=cardB;
        winner = "B";
    }

    if(cardC < smallest){
        smallest = cardC;
        winner="C";
    }

    console.log(`${winner}가 가장 작은 카드 ${smallest}를 냈다!`);


}

let player1 = [11, 24, 38];
let player2 = [7,26,41];
let player3 = [13,19,55];

for (let i=0; i<3; i++){
    let pop1 = player1.pop();
    let pop2 = player2.pop();
    let pop3 = player3.pop();
    
    let smallest = pop1;
    let winner = "Player1";

    if (pop2 < smallest){
        smallest = pop2;
        let winner = "Player2";
    }

    if (pop3 < smallest){
        smallest = pop3;
        let winner = "Player3";
    }


    console.log(smallest);

}


let alpha = [10, 22, 35];
let beta = [12, 25, 40];
let gamma = [8, 30, 50];

for (let i = 0;i<3;i++){
    let alphaPlayer = alpha.pop();
    let betaPlayer = beta.pop();
    let gammaPlayer = gamma.pop();

    console.log(`${i}번쨰 턴 gamma가 ${gammaPlayer}를 냈습니다.`)
    console.log(`${i}번쨰 턴 alpha가 ${alphaPlayer}를 냈습니다.`)
    console.log(`${i}번쨰 턴 beta가 ${betaPlayer}를 냈습니다.`)

    let smallest = alphaPlayer;
    let winner = "alpha";

    if (betaPlayer < smallest){
        smallest = betaPlayer;
        winner = "beta";
    }

    if(gammaPlayer < smallest){
        smallest = gammaPlayer;
        winner = "gamma";
    }

    console.log(`${i+1}번째 턴 : ${winner}가 ${smallest}를 냈습니다.`)
}

console.log("게임 종료!")


// 1. 전체 카드 덱 만들기
let cardDeck = [];
for(let i = 1; i <= 50; i++){
    cardDeck.push(i);
}

// 2. 카드 덱 섞기 (랜덤)
cardDeck.sort(()=>Math.random()-0.5);

// 3. 플레이어 카드 배분 (5장씩)
let alpha1 = cardDeck.slice(0,5);
let beta1 = cardDeck.slice(5,10);
let gamma1 = cardDeck.slice(10,15);

// 4. 초기 카드 상태 출력
console.log("alpha1 : ", alpha1);
console.log("beta1 : ",beta1);
console.log("gamma1 : ",gamma1);

// 5. 턴 진행
for(let i = 0; i <5; i++){
    let card1 = alpha1.pop();
    let card2 = beta1.pop();
    let card3 = gamma1.pop();

    console.log(`${i}번째 턴`);
    console.log(`alpha1이 낸 카드 : ${card1}`);
    console.log(`beta1이 낸 카드 : ${card2}`);
    console.log(`gamma1이 낸 카드 : ${card3}`);

    // 6. 가장 작은 카드 찾기
    let smallest = card1;
    let winner = "alpha1";

    if (card2<smallest){
        smallest = card2;
        winner = "beta1";
    }

    if(card3<smallest){
        smallest = card3;
        winner = "gamma1";
    }

    console.log(`${i+1} 턴에서 승자는 ${winner}이며 가장 작은수 ${smallest} 이다.`);
}

console.log("게임종료");

let cards=[];
for(let i = 1; i<= 60;i++){
    cards.push(i);
}

cards.sort(()=>Math.random()-0.5);
console.log(cards);

let apple = cards.slice(0,4);
let banana = cards.slice(4,8);
let cherry = cards.slice(8,12);

for(let i = 0; i < 4 ; i++){
    let card1 = apple.pop();
    let card2 = banana.pop();
    let card3 = cherry.pop();


    let smallest = card1;
    let winner = "apple"

    console.log(`${i}턴 apple : [${card1}] banana:  [${card2}] cherry : [${card3}]`)

    if (card2 < smallest){
        smallest = card2;
        winner = "banana";
    }

    if (card3 < smallest){
        smallest = card3;
        winner = "cherry";
    }

    console.log(`${i+1}턴 ==> 가장작은 수 : ${smallest} 로 ${winner}가 승!!`);
}

console.log("게임종료");

function shuffleDeck(deck){
    deck.sort(()=>Math.random() - 0.5);
}

function dealCards(deck){
    let dog = deck.slice(0,4);
    let cat = deck.slice(4,8);
    let fox = deck.slice(8,12);

    return {dog, cat, fox};
}


function playTurn(dog,cat,fox){
    let card1 = dog.pop();
    let card2 = cat.pop();
    let card3 = fox.pop();



    let smallest = card1;
    let winner = "dog";

    if (card2 < smallest){
        smallest = card2;
        winner = "cat";
    }

    if (card3 < smallest){
        smallest = card3;
        winner = "fox";
    }

 

    return winner;

}

function playGame(){

    let deck = []
    for (let i = 1; i <=60; i++){
        deck.push(i);
    }

    shuffleDeck(deck);

    let dogGrade = 0;
    let catGrade = 0;
    let foxGrade = 0;
    
  

    let {dog , cat, fox } = dealCards(deck);

    for(let i= 1; i <=4;i++){
        let winner = playTurn(dog,cat,fox);

        if (winner === "dog") dogGrade++;
        if (winner === "cat") catGrade++;
        if (winner === "fox") foxGrade++;
    }

    console.log("최종 점수:\n");
    console.log(`dog: ${dogGrade}`);
    console.log(`cat: ${catGrade}`);
    console.log(`fox: ${foxGrade}`);
    



    console.log("게임 종료!")
    
}
playGame();


let deck2 = [];
for(let i = 1; i <= 60; i++){
    deck2.push(i);
}

deck2.sort(()=>Math.random - 0.5);

let players = [
    {name : "dog", cards:deck.slice(0,4),score:0},
    {name : "cat", cards:deck.slice(4,8), score:0},
    {name : "fox", cards:deck.slice(8,12)}
];

let playedCards = [];

for (let player of players){
    let card = player.cards.pop();
    playedCards.push({name:player.name, card:card});
}

let winner = playedCards[0];

for(let played of playedCards){
    if(played.card < winner.card){
        winner = played;
    }

for (let player of players){
    if (player.name === winner.name){
        player.score++;
    }
}    
}
