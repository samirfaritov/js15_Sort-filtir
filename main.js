let numbers = [45, 4545, 4,54,89,45,4585,4,74,8,48,9,48,94,87,84,87,84,8, 1]

// let b = numbers.sort((a,b) => a - b)

// console.log(b);

// let total = 0

//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]
//     }


// console.log(total);

// let total = numbers.reduce((a, b) => {
//     return a + b
// }, 0) 
// console.log(total);

let a = []

for (let i = 0; i < numbers.length; i++) {
    // if (numbers[i] < 100) {
    //     a.push(numbers[i])
    //     break
    // }

    if (numbers[i] === 1) {
        continue
    }
    console.log(numbers[i]);
}

// console.log(a);