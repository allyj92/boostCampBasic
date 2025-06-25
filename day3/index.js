



function find(searchDate, minStock){


let books =  [
    {title:"Great", isSoldOut:true, genre:"Novel",star:3.1, stock:2},
    {title:"Laws", isSoldOut:true, genre:"Novel",star:4.8, stock:3},
    {title:"Dracula", isSoldOut:true, genre:"Drama",star:2.3, stock:6},
    {title:"Mario", isSoldOut:true, genre:"Drama", star:2.3, stock:4},
    {title:"House", isSoldOut:false, genre:"Magazine",star:4.4, stock:1},
    {title:"Art1", isSoldOut:true, genre:"Design",star: 4.2, stock:2},
    {title:"Art2", isSoldOut:true, genre:"Design",star:3.0, stock:3},
    {title:"Wars", isSoldOut:true, genre:"Novel",star:4.6, stock:2},
    {title:"Solo", isSoldOut:false, genre:"Poem",star:4.9, stock:2},
    {title:"Lost", isSoldOut:false, genre:"Web",star:3.2, stock:8},
    {title:"Ocean", isSoldOut:true, genre:"Magazine",star:4.3, stock:1}
];

let timeline = [
    {title:"Great", start:197001, end: 198104},
    {title:"Laws", start:198006, end: 198507},
    {title:"Dracula", start:199105, end: 199605},
    {title:"Mario", start:200109, end: 201211},
    {title:"House", start:198707, end: 202506},
    {title:"Art1", start:198506, end: 199107},
    {title:"Art2", start:199502, end: 200512},
    {title:"Solo", start:200703, end: 202506},
    {title:"Wars", start:198204, end: 200305},
    {title:"Lost", start:199806, end: 202506},
    {title:"Ocean", start:200502, end: 202006},
]

// 게임에 대한 데이터 구조에서 판매 시작 시점과 판매 종료 시점을 param0와 비교해서 판매 중인 시점의 책을 출력해야 합니다.
// 절판되지 않은 기간 동안만 구할 수 있다고 가정합니다.
let availableBooks = timeline.filter((book) => String(book.start) <= searchDate && String(book.end) >= searchDate);

// param1 권수까지 비교해서 해당 권수 이상인 책을 출력해야 합니다.
let findBooks = availableBooks.filter((book)=>{
  let bookInfo = books.find(b=>b.title == book.title);
  return bookInfo.stock >= minStock;
}
)

// 최종 출력값은 별점(내림차순)으로 정렬해야 합니다.
findBooks.sort((a,b)=>{
    let bookA = books.find(bk => bk.title === a.title);
    let bookB = books.find(bk => bk.title === b.title);
    return bookB.star - bookA.star;
}
);

// 문자열 가공
let result = findBooks.map(book=>{
    let bookInfo = books.find(b=>b.title == book.title);
    // 절판된 책의 경우는 이름 뒤에 * 문자를 붙여서 출력합니다.
    let bookTitle = book.title + (bookInfo.isSoldOut?"*":"");
    return `${bookTitle}(${bookInfo.genre}) ${bookInfo.star}`
}).join(", ");

if (result === "") return "!EMPTY";

return result;
    

}

// 예시 1
console.log(find("198402", 2)); // 결과: "Laws*(Novel) 4.8, Wars*(Novel) 4.6"

// 예시 2
console.log(find("200008", 6)); // 결과: "Lost(Web) 3.2"

// 예시 3
console.log(find("199004", 3)); // 결과: "!EMPTY"
