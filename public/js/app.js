console.log("hello")

let clockSeconds = 00
let clockMinutes = 15

const secondsTimer = () => {
    const sTimer = setInterval(() => {
        if (clockMinutes === 0) {
            return
        }
        else if (clockSeconds === 0) {
            clockSeconds += 59
            document.querySelector("#time").innerHTML = `${clockMinutes}:${clockSeconds}`
        }
        else if (clockSeconds >= 11) {
            clockSeconds--
            document.querySelector("#time").innerHTML = `${clockMinutes}:${clockSeconds}`
        } else if (clockSeconds <= 10) {
            clockSeconds--
            document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
        }
    }, 1000) 
}

secondsTimer()

