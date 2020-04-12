function upperCaser(input) {
    return input.toUpperCase()
}

function repeat (operation, num){
    if (num !== 0){
        return operation(num-1)
    }
}

function doubleAll(numbers) {
    return numbers.map(numbers => numbers * 2)
}

function getShortMessages(messages) {
    return messages
    .filter(messages => messages.message.length < 50)
    .map(messages => messages.message)
}

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(submittedUsers => goodUsers.includes(submittedUsers))
    };
}

function countWords(inputWords){
    return 
}

function reduce(arr, fn, initial){
    return
}


module.exports = upperCaser
module.exports = repeat
module.exports = doubleAll
module.exports = getShortMessages
module.exports = checkUsersValid
module.exports = countWords
module.exports = reduce