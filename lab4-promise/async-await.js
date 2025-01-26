//callback hell
const buyFruit = function(fruit, callback) {
    setTimeout(() => {
        console.log(fruit)
        callback()
    }, 1000)
}