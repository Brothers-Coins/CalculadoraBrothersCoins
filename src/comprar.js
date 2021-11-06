const valor250Tc = 53
const valor25Tc = 6.50
const timeArrowClick = 200
const timeToast = 2500
let moneyValue = valor250Tc
let timer

const pierrePixKey = 'e948646f-2da8-4596-90a0-2e54fefaf218'
const alexPixKey = '6873a533-5f28-4347-936e-0133bedfc62f'

function getValueSlider() {
    return parseInt(document.getElementById('slider').value, 10)
}

function getMoneyValue(value) {
    return ((value + 25) % 250) === 0 ? valor250Tc * Math.floor((value + 25) / 250) - 0.5 : valor250Tc * Math.floor(value / 250) + valor25Tc * Math.floor((value % 250) / 25)
}

function setTcValue(valueSlider) {
    document.getElementById('rangeValue').innerHTML = `${valueSlider} TC`
    document.getElementById('slider').value = valueSlider
}

function numbersOfCharsDecimal(textMoneyValue) {
    let count = 0
    const commaPosition = textMoneyValue.indexOf(',')
    for (let i = commaPosition + 1; i < textMoneyValue.length; i++) {
        count++;
    }
    return count
}

function getTextFromMoneyValue() {
    if (moneyValue % 1 === 0) {
        return `R$ ${moneyValue},00`
    }
    let textMoneyValue = `R$ ${moneyValue.toString().replace('.', ',')}`
    if (numbersOfCharsDecimal(textMoneyValue) < 2) {
        textMoneyValue += '0'
    }
    return textMoneyValue
}

function setMoneyValue() {
    document.getElementById('moneyValue').innerHTML = getTextFromMoneyValue()
}

function setFields(value) {
    moneyValue = getMoneyValue(value)
    setTcValue(value)
    setMoneyValue(moneyValue)
    console.log(`Tc value: ${value}\nMoney value: ${moneyValue}`)
}

function rangeSlide() {
    const valueSlider = getValueSlider()
    setFields(valueSlider)
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
    if (value > 10000) {
        value = '10000'
    }
    setFields(value)
}

const mouseDown = (type) => {
    timer = setInterval(function () {
        type === 'right' ? arrowRightClick() : arrowLeftClick()
    }, timeArrowClick)
}

const mouseUp = () => {
    clearTimeout(timer)
}

const Toast = {
    init() {
        this.hideTimeout = null
        this.el = document.createElement('div')
        this.el.className = 'toast'
        document.body.appendChild(this.el)
    },

    show(message) {
        clearTimeout(this.hideTimeout)
        this.el.textContent = message
        this.el.className = 'toast toast-visible toast-success'
        this.hideTimeout = setTimeout(() => {
            this.el.classList.remove('toast-visible')
        }, timeToast)
    }
}

document.addEventListener('DOMContentLoaded', () => Toast.init())

function copyPixKey() {
    const pixKey = alexPixKey
    const element = document.createElement('textarea')
    element.value = pixKey
    document.body.appendChild(element)
    element.select()
    document.execCommand('copy')
    document.body.removeChild(element)
    Toast.show(`Chave PIX copiada com sucesso`)
}

function openPicPayToPay() {
    window.open(`https://picpay.me/alexvfilho/` + moneyValue.toFixed(1))
}