function nextPosition(current, dice) {
    const next = current + dice;
    if (next === 4) {
        return 14;
    } else if (next === 8) {
        return 30;
    } else if (next === 21) {
        return 42;
    } else if (next === 28) {
        return 76;
    } else if (next === 50) {
        return 67;
    } else if (next === 71) {
        return 92;
    } else if (next === 80) {
        return 99;
    }
    
    return next;    
}

function nextPositionDown(current, dice) {
    const next = current + dice;
    if (next === 97) {
        return 78;
    } else if (next === 95) {
        return 56;
    } else if (next === 88) {
        return 24;
    } else if (next === 62) {
        return 18;
    } else if (next === 48) {
        return 26;
    } else if (next === 36) {
        return 6;
    } else if (next === 32) {
        return 10;
    }
    
    return next;    
}

let start = 1;
let dice = 3;
next = nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 4;
next = nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 3;
next = nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next = nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 1;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

start = next;
dice = 6;
next =  nextPositionDown(start, dice);
console.log("from=",start,", dice=",dice,", next=", next);

