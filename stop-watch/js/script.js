const $ = document;

const hour = $.getElementById('hour')
const minut = $.getElementById('minut')
const second = $.getElementById('second')
const start = $.getElementById('start')
const reset = $.getElementById('reset')
const pause = $.getElementById('pause')
const lap = $.getElementById('lap')
const laps = $.getElementById('laps')

let timer = null
let digit = 0

function startFunc() {
    if (digit > 0) {
        return
    }
    digit = 1

    timer = setInterval(() => {
        second.innerHTML = +second.innerHTML + 1
        if (second.innerHTML.length < 2) {
            second.innerHTML = "0" + second.innerHTML
        }
        if (minut.innerHTML.length < 2) {
            minut.innerHTML = "0" + minut.innerHTML
        }
        if (hour.innerHTML.length < 2) {
            hour.innerHTML = "0" + hour.innerHTML
        }

        if (+second.innerHTML > 59) {
            second.innerHTML = "00"
            minut.innerHTML = +minut.innerHTML + 1
        }
        if (+minut.innerHTML > 59) {
            minut.innerHTML = "00"
            hour.innerHTML = +hour.innerHTML + 1
        }
    }, 1000);
}

function resetFunc() {
    second.innerHTML = "00"
    minut.innerHTML = "00"
    hour.innerHTML = "00"
    clearInterval(timer)
    digit = 0

    let lapsRemove = $.querySelectorAll('.lap')
    lapsRemove.forEach(element => {
        element.remove()
    });
}

function pauseFunc() {
    clearInterval(timer)
    digit = 0
}

function lapFunc() {
    if (second.innerHTML == "00" && minut.innerHTML == "00" && hour.innerHTML == "00") {
        return
    }

    let newLap = $.createElement('div')
    newLap.classList.add('lap')
    newLap.innerHTML = hour.innerHTML + ":" + minut.innerHTML + ":" + second.innerHTML 
    laps.append(newLap)
}

start.addEventListener('click', startFunc)
reset.addEventListener('click', resetFunc)
pause.addEventListener('click', pauseFunc)
lap.addEventListener('click', lapFunc)