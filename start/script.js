
const button = {
    widht : 200,
    text : 'buy',
    color: 'black'
}
const param = {
    height : 300,
    material : 'wood'
}

const redButton = {
    ...button,
    color: 'red'
}

const item = Object.assign({}, button, param)

console.log(redButton, button, "some text", item)
console.log(item.height, param.height)
item.height = 200

console.log(item.height, param.height)

