const Stack = require('./Stack')

const knows = (i, j) => {
    return MATRIX[i][j] === 1
}

function findCeleb(n) {
    const s = new Stack()
    for(let i = 0; i < n; i++){
        s.push(i)
    }

    while(s.length() > 1){
        const a = s.peek()
        s.pop()
        const b = s.peek()
        s.pop()
        if(knows(a,b)){
            s.push(b)
        }else{
            s.push(a)
        }
    }
    const top = s.peek()

    let rowCheck = false
    let zeroCount = 0
    for(let i = 0; i < n; i++){
        if(MATRIX[top][i] === 0){
            zeroCount++
        }
    }
    if(zeroCount === n){
        rowCheck = true
    }

    let colCheck = false
    let oneCount = 0 
    for(let i = 0; i < n; i++){
        if(MATRIX[i][top] === 1){
            oneCount++
        }
    }
    if(oneCount === n - 1){
        colCheck = true
    }
    if(rowCheck && colCheck){
        return top
    }else {
        return -1;
    }
}

const MATRIX = [
    [0, 1, 0],
    [0, 0, 0], 
    [0, 1, 0]
]


console.log(findCeleb(MATRIX.length))