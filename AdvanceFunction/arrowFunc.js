const mult = (x, y) => {
    return x * y;
}

const isEven = num => num % 2 === 0;


const greet = () => {
    console.log("YOOOOOOOOOO!!!");
}

const nums = [1, 2, 3, 4, 5, 6, 7];

const doubles = nums.map(n => n * 2)

const evenOdd = nums.map((n) => n % 2 === 0 ? "even" : "odd" );