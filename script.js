const span = document.querySelector("span");

const wordsList = ['Developer.', 'Teacher.', 'YouTuber.', 'Coder.']

let wordsIndex = 0
let characterIndex = 0
let skipUpdate = 0
let reverseType = false
setInterval(() => {
    if(skipUpdate) {
        skipUpdate--
        return
    }

    if(!reverseType) {
        skipUpdate = 2
        span.innerText = span.innerText + wordsList[wordsIndex] [characterIndex]
        characterIndex++
    }else {
        span.innerText = span.innerText.slice(0, span.innerText.length - 1)
        characterIndex--
    }

    if(characterIndex === wordsList[wordsIndex].length){
        skipUpdate = 6
        reverseType = true
    }

    if(span.innerText.length === 0 && reverseType) {
        reverseType = false
        characterIndex = 0
        wordsIndex++
        skipUpdate = 3

    }
    
    if(wordsIndex === wordsList.length) {
        wordsIndex = 0
    }


}, 100)

// const word = 'Teacher'

// let characterIndex = 0
// let reversetype = false

// setInterval(() => {
//     if(!reversetype){
//         span.innerText = span.innerText + word[characterIndex]
//         characterIndex++
//     }else {
//         span.innerText = span.innerText.slice(0, span.innerText.length - 1)
//     }

//     if(span.innerText.length === 0 && reversetype){
//         characterIndex = 0
//         reversetype = false
//     }

//     if(characterIndex === word.length){
//         reversetype = true
//     }

// }, 300)






