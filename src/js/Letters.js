export class Letters {
    _alphabetString = "abcdefghijklmnopqrstuvwxyz"
    _alphabetArray
    _u
    
    constructor(u) {
        this._u = u
        this._alphabetArray = this._alphabetString.split('')
    }

    randomLetter() {
        return this._alphabetArray[this._u.randomNumber(this._alphabetArray.length)]
    }

    randomWord(len) {
        let tmp = ""
        for(let i =  0; i < len; i++) {
            tmp += this._alphabetArray[this._u.randomNumber(this._alphabetArray.length)]
        }
        return tmp
    }
}