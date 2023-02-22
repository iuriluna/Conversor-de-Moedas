const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('currencySelect')






    const convertValues = async () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReal)

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReal / dolar)
    } else if (select.value === '₿ Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'XBT',
        }).format(inputReal / bitcoin)
    } else {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency', 
            currency: 'EUR',
        }).format(inputReal / euro)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById('currencyName')
    const currencyImg = document.getElementById('currencyImage')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/eua.png'
    } else if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    } else {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)