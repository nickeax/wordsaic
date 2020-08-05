import { Utils } from './Utils.js'
import { Letters } from './Letters.js'
import {  words } from '../../data/data.js'

const u = new Utils()

const output = document.querySelector('#output')
const kept = document.querySelector('#kept')
const amount = document.querySelector('#amount')

const letters = new Letters(u)

let arr = []
let tmpStr = ""

amount.addEventListener('keyup', ev => {
    amount.value = isAllowed(amount.value)
    if(parseInt(amount.value) > 20) amount.value = 20
})

function isAllowed(chr) {
    console.log("isAllowed()", chr);
    let arr = chr.split('')
    arr = arr.filter(x => {
        return (parseInt(x) > 0 && parseInt(x) <= 9)
    })

    return arr.join('')
}

function drawWords() {
    let tmp = ""
    tmpStr = ""
    let amt = parseInt(amount.value) || 5
    console.log("amt", amt);
    for(let i = 0; i < amt; i++) {
        tmpStr += `${words[u.randomNumber(words.length)]} `
    }
    tmp = `<span class="word">${tmpStr}<span>`
    output.innerHTML = tmp
}

setInterval(drawWords, 5000)
let masterArray = []
document.addEventListener('keydown', ev => {
    let tmp = "<ul>"
    if(ev.keyCode == 32) {
        arr.push(tmpStr)
    }

    let top = arr.pop() || ""

    arr = arr.filter(x => {
        return x !== top
    })

    arr.push(top)
    
    arr.forEach(x => {
        tmp += `<li>${x}</li>`
    })

    tmp += "</ul>"
    kept.innerHTML = tmp
})
