const cardsList = document.querySelectorAll(".card");

const arr = []
cardsList.forEach(item => {
    const title = item.querySelector('.card__title')
    const info = item.querySelector('.card__info')
    const link = item.querySelector('.card__image')
    const price = item.querySelector('.card__price')
    const cardListDefoult = {
        id: item.id,
        name: title.outerText,
        info: info.outerText,
        link: link.src,
        price: price.outerText,
    }
    arr.push(cardListDefoult)
    localStorage.setItem("arrNewCards", JSON.stringify(arr));
})