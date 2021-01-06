function rangeSlide(valueSlider) {
    const valor250Tc = 52
    const valor25Tc = 6
    const moneyValue = valor250Tc * Math.floor(valueSlider / 250) + valor25Tc * Math.floor((valueSlider % 250) / 25)
    document.getElementById('rangeValue').innerHTML = `${valueSlider} TC`;
    document.getElementById('moneyValue').innerHTML = `R$ ${moneyValue},00`;
    console.log('DragEvent')
}