console.log("hello")

let clockSeconds = 00
let clockMinutes = 5
let clockMinutesInput = 5
let restMinutes = 2
let innerTimer = clockMinutesInput + 1

const secondsTimer = () => {
    clockMinutes = clockMinutesInput
    document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
    const sTimer = setInterval(() => {
        if (clockSeconds === 0 && clockMinutes === 0) {
            document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
            clearInterval(sTimer)
            restSecondsTimer()
            document.querySelector("#text-feild").className = "hidden"
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

const restSecondsTimer = () => {
    const RSTimer = setInterval(() => {
        if (clockMinutes === restMinutes) {
            document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
            clearInterval(RSTimer)
            document.querySelector("#start").className = ""
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

const weatherStyle = () => {
    const weatherType = document.querySelector("#weather-info").textContent 
    // clear & Sunny
    if (weatherType.includes("Sunny") || weatherType.includes("Clear")) {
        document.querySelector(".main-content").className = "main-content-sunny"
    }
    
}

weatherStyle()

document.querySelector("#start").addEventListener("click", () => {
    secondsTimer()
    document.querySelector("#start").className = "hidden"
    document.querySelector("#subtract-focus-time").className = "hidden"
    document.querySelector("#add-focus-time").className = "hidden"
    document.querySelector("#subtract-down-time").className = "hidden"
    document.querySelector("#add-down-time").className = "hidden"
    document.querySelector("#text-feild").className = ""
})

document.querySelector("#subtract-focus-time").addEventListener("click", () => {
    if (clockMinutesInput > 0)
    clockMinutesInput--
    clockMinutes--
    document.querySelector("#focus-time").innerHTML = `${clockMinutesInput}:00`
    document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
})

document.querySelector("#add-focus-time").addEventListener("click", () => {
    if (clockMinutesInput >= 0 && clockMinutesInput < 60)
    clockMinutesInput++
    clockMinutes++
    document.querySelector("#focus-time").innerHTML = `${clockMinutesInput}:00`
    document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
})

document.querySelector("#subtract-down-time").addEventListener("click", () => {
    if (restMinutes > 0)
    restMinutes--
    document.querySelector("#down-time").innerHTML = `${restMinutes}:00`
    document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
})

document.querySelector("#add-down-time").addEventListener("click", () => {
    if (restMinutes >= 0 && restMinutes < clockMinutesInput - 1)
    restMinutes++
    document.querySelector("#down-time").innerHTML = `${restMinutes}:00`
    document.querySelector("#time").innerHTML = `${clockMinutes}:0${clockSeconds}`
})