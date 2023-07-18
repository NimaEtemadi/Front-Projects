const bill = document.querySelector('.bill')
const rate = document.querySelector('.rate')
const btn = document.querySelector('.btn')
const tip = document.querySelector('.tip')
const total = document.querySelector('.total')
const error = document.querySelector('.error')

btn.addEventListener('click', () => {

    calculate()
})

function calculate() {
    let billVal = bill.value;
    let rateVal = rate.value;
    if (billVal === '' || rateVal === '') {
        error.style.display = 'block'
        error.innerHTML = 'Please enter a number'
    }
    else {
        calcTip = rateVal * billVal
        calcTip = Math.ceil(calcTip)
        tip.innerHTML = calcTip
        totalCalc = Number(billVal) + calcTip
        totalCalc = Math.floor(totalCalc)
        total.innerHTML = totalCalc
    }
}
// type writer//

let type = document.querySelector('#title');

let headerTypewriter = new Typewriter (type, {
    loop: true
});

headerTypewriter
  .pauseFor(2500)
  .typeString('Tip Calculator')
  .pauseFor(300)
  .start();