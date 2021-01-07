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

function chooseTcImage(value) {
    if (value < 200) {
        return 1
    } else if (value < 1000) {
        return 2
    } else if (value < 2500) {
        return 3
    } else if (value < 5000) {
        return 4
    } else if (value < 12000) {
        return 5
    }
    return 6
}

function setImage(value) {
    let tcImage
    tcImage = chooseTcImage(value);
    document.getElementById('tcImage').src = '../imgs/tcs/tibia-coins'+tcImage+'.png'
}

function setFields(value) {
    const moneyValue = getMoneyValue(value)
    setTcValue(value);
    setMoneyValue(moneyValue);
    setImage(value)
    console.log(`Tc value: ${value}\nMoney value: ${moneyValue}`)
}

function rangeSlide() {
    const valueSlider = getValueSlider()
    setFields(valueSlider);
}

function buttonLeftClick() {
    let value = getValueSlider() - 25
    if (value < 25) {
        value = '25'
    }
    setFields(value)
}

function buttonRightClick() {
    let value = getValueSlider() + 25
    if (value > 15000) {
        value = '15000'
    }
    setFields(value)
}