const valor250Tc = 52
const valor25Tc = 6

function getValueSlider() {
    return parseInt(document.getElementById('slider').value, 10)
}

function getMoneyValue(value) {
    return valor250Tc * Math.floor(value / 250) + valor25Tc * Math.floor((value % 250) / 25)
}

function setTcValue(valueSlider) {
    document.getElementById('rangeValue').innerHTML = `${valueSlider} TC`
    document.getElementById('slider').value = valueSlider
}

function setMoneyValue(moneyValue) {
    document.getElementById('moneyValue').innerHTML = `R$ ${moneyValue},00`
}

function setFields(value) {
    const moneyValue = getMoneyValue(value)
    setTcValue(value);
    setMoneyValue(moneyValue);
    console.log(`Tc value: ${value}\nMoney value: ${moneyValue}`)
}

function rangeSlide() {
    const valueSlider = getValueSlider()
    setFields(valueSlider);
}

function buttonLeftClick() {
    const value = getValueSlider() - 25
    setFields(value)
}

function buttonRightClick() {
    const value = getValueSlider() + 25
    setFields(value)
}