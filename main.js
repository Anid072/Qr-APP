let form = document.querySelector('form')
let input = document.querySelector('input')
let image = document.querySelector('img')


async function getQr(e){
    e.preventDefault()
    let response = await fetch(` https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input.value}`)
    let qrImageUrl = response.url
    image.setAttribute('src', qrImageUrl)
    form.reset()
}
form.addEventListener('submit', getQr);