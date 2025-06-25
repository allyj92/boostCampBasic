let products = [
    { id: 1, name: "Laptop", stock: 5 },
    { id: 2, name: "Mouse", stock: 0 },
    { id: 3, name: "Keyboard", stock: 2 }
];

let discounts = [
    { id: 1, discountRate: 0.1 },
    { id: 3, discountRate: 0.2 }
];

let result = [];

for (let product of products) {
    if (product.stock < 1) continue; // 재고가 없으면 건너뛰기

    let discount = discounts.find(d => d.id === product.id);
    if (!discount) continue; // 할인 없는 상품은 건너뛰기

    result.push(`${product.name}: ${discount.discountRate * 100}% 할인`);
}

console.log(result.join(", "));


let students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let scores = [
    { id: 1, score: 85 },
    { id: 2, score: 92 },
    { id: 3, score: 78 }
];


let result2 = [];

for (let student of students){
    let studentScore = scores.find(s=>s.id ==student.id);
    if(studentScore){
        result2.push(`${student.name}: ${studentScore.score}`);
    }
}

console.log(result2.join(", "));


result3 = [];
let items = [
    { id: 1, name: "Desk", stock: 4 },
    { id: 2, name: "Chair", stock: 0 },
    { id: 3, name: "Lamp", stock: 6 },
    { id: 4, name: "Bookshelf", stock: 2 }
];

let reviews = [
    { id: 1, rating: 4.5 },
    { id: 2, rating: 4.0 },
    { id: 4, rating: 4.7 }
];

for (item of items){
    let itemReviews = reviews.find(i => i.id == item.id);
    if(itemReviews){
        result3.push(`${item.name} : ${itemReviews.rating}`);
    } 
}

console.log(result3.join(", "));