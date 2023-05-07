//Task_3//
//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".//

let str = "Hello";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // "olleH"