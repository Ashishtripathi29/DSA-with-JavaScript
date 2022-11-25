//there is an array reverse that 

function reverseArr(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7]
// let res=reverseArr(arr)
// console.log(res)


// now revers without using temp variable 
function reversArr2(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        arr[i] = arr[i] + arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = arr[i] - arr[arr.length - i - 1]
        arr[i] = arr[i] - arr[arr.length - 1 - i]
    }
    return arr
}

// console.log(reversArr2(arr))


// reverse array with while loop

// function reverseArr4(arr){
//     let left=0
//     let right=arr.length-1
//     while(left<right){
//         let temp=arr[left]
//         arr[left]=arr[right]
//         arr[right]=temp
//         left++
//         right--
//     }
//     return arr
// }
// console.log(arr)
// console.log(reverseArr4(arr))


// reverse with while loop and without temp variable

// function reverseArr5(arr) {
//     let left = 0
//     let right = arr.length - 1
//     while (left < right) {
//         arr[left] = arr[left] + arr[right]
//         arr[right] = arr[left] - arr[right]
//         arr[left] = arr[left] - arr[right]
//         left++
//         right--

//     }
//     return arr
// }
// let arr4 = [2, 3, 4, 5, 6, 7,8]
// console.log(reverseArr5(arr4))



