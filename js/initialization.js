if (!localStorage.getItem("arrNewCards")) {
    const startCards = [{
        id: 1111,
        name: 'Наименование товара',
        info: 'Довольно-таки интересное описание товара в несколько строк.',
        link: 'image/card_image.jpg',
        price: 10000,
    }, {
        id: 2222,
        name: 'Лама',
        info: 'Красотка лама',
        link: 'image/llama.jpg',
        price: 90000,
    }, {
        id: 3333,
        name: 'Альпака',
        info: 'Милейшая альпака',
        link: 'image/alpaka.jpg',
        price: 110500,
    }, {
        id: 4444,
        name: 'Gorilla',
        info: 'Brutal gorilla',
        link: 'image/Gorilla.jpg',
        price: 6492,
    }, {
        id: 5555,
        name: 'Squirrel',
        info: 'Sweety squirrel',
        link: 'image/Squirrel.jpg',
        price: 99462,
    }
    ]

    localStorage.setItem("arrNewCards", JSON.stringify(startCards));
}



