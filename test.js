// const data = [
//     {
//         name: 'Rishi',
//         present: true,
//         rooms: {
//             kitchen: false,
//             ballroom: true,
//             'dining room': false
//         }
//     },
//     {
//         name: 'Rohan',
//         present: true,
//         rooms: {
//             kitchen: false,
//             ballroom: false,
//             'dining room': false
//         }
//     },
//     {
//         name: 'Raj',
//         present: true,
//         rooms: {
//             kitchen: true,
//             ballroom: true,
//             'dining room': false
//         }
//     }
// ]

// const arr1 = [1, 2, 3, 4, 5, 6, 85, 34, 544,]

// const notInRoom = 
//     arr1.reduce((value, curval) => {
//         return value + curval
//     }, arr1[0])


// console.log(notInRoom)

// function sayHi() {
//     return () => {
//         return 'hi'
//     }
// }


// const response = sayHi()

// console.log(response())

function parent (name) {
    const edata = 10
    return () => {
        console.log(edata)
        return 
    } 
}

function child () {
    console.log('I am a child.')
}

const demo = parent(child)

demo()
