const valor250Tc = 45
const valor25Tc = 4
const tempo = 200
let timer

function getValueSlider() {
    return parseInt(document.getElementById('slider').value, 10)
}

function getMoneyValue(value) {
    return value >= 250 ? (valor250Tc * (value / 250)).toFixed(2).replace('.', ',') : valor25Tc * (value / 25)
}

function setTcValue(valueSlider) {
    document.getElementById('rangeValue').innerHTML = `${valueSlider} TC`
    document.getElementById('slider').value = valueSlider
}

function setMoneyValue(moneyValue) {
    console.log(moneyValue)
    document.getElementById('moneyValue').innerHTML = moneyValue.indexOf(',') === -1 ?`R$ ${moneyValue},00` : `R$ ${moneyValue}`
}

function setFields(value) {
    const moneyValue = getMoneyValue(value)
    setTcValue(value);
    setMoneyValue(moneyValue.toString());
    console.log(`Tc value: ${value}\nMoney value: ${moneyValue}`)
}

function rangeSlide() {
    const valueSlider = getValueSlider()
    setFields(valueSlider);
}

function arrowLeftClick() {
    let value = getValueSlider() - 25
    if (value < 25) {
        value = '25'
    }
    setFields(value)
}

function arrowRightClick() {
    let value = getValueSlider() + 25
    if (value > 15000) {
        value = '15000'
    }
    setFields(value)
}

const mouseDown = (type) => {
    timer = setInterval(function(){
        type === 'right' ? arrowRightClick() : arrowLeftClick()
    }, tempo);
};

const mouseUp = () => {
    clearTimeout(timer);
};