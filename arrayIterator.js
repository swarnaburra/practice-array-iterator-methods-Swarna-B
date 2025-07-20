/*
Task 1: Using forEach()
1. Create an array of five of your favorite cities.
2. Use forEach( ) to log each city name to the console in uppercase.
3. Submit the output format by adding comments to the code.
*/

let cities = ["Rourkela", "Dhanbad", "Asansol", "Raipur", "Nagpur"]
cities.forEach(city =>  {
  console.log(city.toUpperCase());
});
//ROURKELA
//DHANBAD
//ASANSOL
//RAIPUR
//NAGPUR

/*
Task 2: Transforming with map()
1. Create an array called numbers with the numbers 1-5.
2. Use map( ) to create an array where each number is squared. Call this array
squares.
3. Log the new array.
4. Submit the output by adding comments to the code.
*/
let numbers = [1,2,3,4,5];
let squares  = numbers.map(number => {
    return number * number
})
console.log(squares);
//Output: [ 1, 4, 9, 16, 25 ]

/*
Task 3: Filtering with filter()
1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and
100.
2. Use filter ( ) to create a new array containing only the scores greater than or
equal to 80. Call this array highScores.
3. Log the new array.
4. Submit the output by adding comments to the code.
*/
let scores = [85, 42, 90, 75, 30, 100]
let highScores = scores.filter(score => {
    return score >= 80
})
console.log(highScores);
//Output: [ 85, 90, 100 ]

/*
Task 4: Finding with find() and findIndex()
1. Create an array called favoriteFood that contains a list of your favorite
dishes. Try to add 5 or 6 elements.
2. Use find() to locate the first food with more than 4 letters.
3. Use findIndex( ) to find the index of that fruit
*/
let favoriteFood = ["Waffle", "Pancakes", "Cakes", "Croissant", "Cinnamon roll", "Breadsticks"]

let firstFoodWithMoreThan4Characters = favoriteFood.find(food => food.length > 4);


let firstFoodWithMoreThan4Index = favoriteFood.findIndex(food => food.length > 4);


console.log("First food with more than 4 letters:", firstFoodWithMoreThan4Characters);
console.log("Index of that food:", firstFoodWithMoreThan4Index); 