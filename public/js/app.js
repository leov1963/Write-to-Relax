console.log("hello")

let clockSeconds = 00
let clockMinutes = 2
let clockMinutesInput = 2
let restMinutes = 2
let innerTimer = clockMinutesInput + 1

const secondsTimer = () => {
    const sTimer = setInterval(() => {
        if (clockSeconds === 0 && clockMinutes === 0) {
            document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
            clearInterval(sTimer)
            restSecondsTimer()
            return
        }
        else if (clockSeconds === 0 && clockMinutes === clockMinutesInput) {
            clockSeconds += 59
            clockMinutes--
            innerTimer--
            document.querySelector("#time").innerHTML = `${clockMinutes}:${clockSeconds}`
        }
        else if (clockSeconds === 0 && clockMinutes > 0) {
            clockSeconds += 59
            clockMinutes--
            document.querySelector("#time").innerHTML = `${clockMinutes}:${clockSeconds}`
        }
        else if (clockSeconds >= 11) {
            clockSeconds--
            document.querySelector("#time").innerHTML = `${clockMinutes}:${clockSeconds}`
        } else if (clockSeconds <= 10) {
            clockSeconds--
            document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
        }
    }, 500) 
}

// const minutesTimer = () => {
//     const mTimer = setInterval(() => {
//         if (clockMinutes === 0) {
//             clearInterval(mTimer)
//             return
//         }
//         else if (clockMinutes > 0) {
//             clockMinutes--
//         }
//     }, 30000) 
// }

const restSecondsTimer = () => {
    const RSTimer = setInterval(() => {
        if (clockMinutes === restMinutes) {
            document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
            return
        }
        else if (clockSeconds === 59) {
            clockSeconds -= 59
            clockMinutes++
            document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
        }
        else if (clockSeconds === 9) {
            clockSeconds++
            document.querySelector("#time").innerHTML = `${clockMinutes}:${clockSeconds}`
        }
        else if (clockSeconds >= 10) {
            clockSeconds++
            document.querySelector("#time").innerHTML = `${clockMinutes}:${clockSeconds}`
        } 
        else if (clockSeconds <= 8) {
            clockSeconds++
            document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
        }
    }, 500) 
}

document.querySelector("#start").addEventListener("click", () => {
    secondsTimer()
    minutesTimer()
})