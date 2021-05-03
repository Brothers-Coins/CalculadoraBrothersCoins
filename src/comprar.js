const valor250Tc = 54.5
const valor25Tc = 6.5
const timeArrowClick = 200
const timeToast = 2500
let moneyValue = 54.5
let timer

function getValueSlider() {
    return parseInt(document.getElementById('slider').value, 10)
}

function getMoneyValue(value) {
    return ((value + 25) % 250) === 0 ? valor250Tc * Math.floor((value + 25) / 250) - 1 : valor250Tc * Math.floor(value / 250) + valor25Tc * Math.floor((value % 250) / 25)
}

function setTcValue(valueSlider) {
    document.getElementById('rangeValue').innerHTML = `${valueSlider} TC`
    document.getElementById('slider').value = valueSlider
}

function setMoneyValue() {
    document.getElementById('moneyValue').innerHTML = moneyValue - Math.trunc(moneyValue) !== 0.5 ? `R$ ${moneyValue},00` : `R$ ${moneyValue.toString().replace('.', ',')}0`
}

function setFields(value) {
    moneyValue = getMoneyValue(value)
    setTcValue(value);
    setMoneyValue(moneyValue);
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
    timer = setInterval(function () {
        type === 'right' ? arrowRightClick() : arrowLeftClick()
    }, timeArrowClick);
};

const mouseUp = () => {
    clearTimeout(timer);
};

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
    const pixKey = "e948646f-2da8-4596-90a0-2e54fefaf218"
    const element = document.createElement('textarea');
    element.value = pixKey;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    Toast.show(`Chave PIX copiada com sucesso`)
}

function openPicPayToPay() {
    window.open(`https://picpay.me/pierrevieira/` + moneyValue.toFixed(1))
}