const valor250Tc = 52
const valor25Tc = 6
const timeArrowClick = 200
const timeToast = 2500
let timer

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

function copyKey() {
    let key = "6873a533-5f28-4347-936e-0133bedfc62f"
    const element = document.createElement('textarea');
    element.value = key;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    Toast.show("Chave copiada PIX com sucesso")
}
