function oneThroughTwenty() {
    let resultado = []
    for (let i = 1; i <= 20; i++) {
        resultado.push(i)
    }
    // console.log(resultado)
    return resultado

}
//call function oneThroughTwenty

function evensToTwenty() {

    let resultado = []
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            resultado.push(i)
        }
    }
    // console.log(resultado)
    return resultado
}

//call function evensToTwenty

function oddsToTwenty() {

    let resultado = []
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            resultado.push(i)
        }
    }
    // console.log(resultado)
    return resultado

}

//call function oddsToTwenty

function multiplesOfFive() {
    let resultado = []
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            resultado.push(i)
        }
    }
    // console.log(resultado)
    return resultado

}

//call function multiplesOfFive

function squareNumbers() {

    let resultado = []
    for (let i = 1; i <= 10; i++) {
        for (let l = 1; l <= 100; l++) {

            if (l ** 0.5 === i) {
                resultado.push(l);
            }

        }

    }
    // console.log(resultado)
    return resultado

}

//call function squareNumbers

function countingBackwards() {

    let resultado = []
    for (let i = 20; i > 0; i--) {
        resultado.push(i)
    }
    return resultado
}

//call function countingBackwards

function evenNumbersBackwards() {

    let resultado = []
    for (let i = 20; i > 0; i--) {
        if (i % 2 === 0) {
            resultado.push(i)
        }
    }
    return resultado

}
//call function evenNumbersBackwards

function oddNumbersBackwards() {

    let resultado = []
    for (let i = 20; i > 0; i--) {
        if (i % 2 !== 0) {
            resultado.push(i)
        }
    }
    return resultado

}

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {

    let resultado = []
    for (let i = 100; i > 0; i--) {
        if (i % 5 === 0) {
            resultado.push(i)
        }
    }
    return resultado
}

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {

    let resultado = []
    for (let i = 10; i >= 1; i--) {
        for (let l = 100; l >= 1; l--) {

            if (l ** 0.5 === i) {
                resultado.push(l);
            }

        }

    }
    return resultado
}

//call function squareNumbersBackwards