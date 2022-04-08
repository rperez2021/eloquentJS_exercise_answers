function loopinTriangle(num) {
    let string = ""
    let newLine = "\n"
    for (let i = 0; i < num; i++) {
        string += "#"
        console.log(string + newLine)
    }
}

loopinTriangle(10)

function checkerBoard(size) {
    let blank = " "
    let hashtag = "#"
    let newLine = "\n"
    let oddRow = ""
    let evenRow = ""
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            evenRow = ""
            for (let j=0; j < size; j++) {
                evenRow += hashtag + blank 
            }
            console.log(evenRow + newLine)
        } else {
            oddRow = ""
            for (let k=0; k < size; k++) {
                oddRow += blank + hashtag
            }
            console.log(oddRow + newLine)
        }
        
    }
}

checkerBoard(5)

