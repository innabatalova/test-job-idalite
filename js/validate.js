const validate = () => {
  const addBoardForm = document.querySelector(".add-board");
  const nameFieldWrap = addBoardForm.querySelector(".add-board__part_name");
  const linkFieldWrap = addBoardForm.querySelector(".add-board__part_link");
  const priceFieldWrap = addBoardForm.querySelector(".add-board__part_price");
  const nameField = addBoardForm.querySelector(".name");
  const linkField = addBoardForm.querySelector(".link");
  const priceField = addBoardForm.querySelector(".price");
  const addBoardNumber = addBoardForm.querySelector(".add-board__number");
  const addBoardButton = addBoardForm.querySelector(".add-board__button");

  //проверка валидности
  addBoardForm.addEventListener("input", () => {
    const validityForm = addBoardForm.querySelectorAll(".add-inval");
    if(validityForm.length == 0 && (!nameField.value.trim() == '') && (!linkField.value.trim() == '') && (!priceField.value.trim() == '')){
      addBoardButton.classList.add("add-board__button_create");
      addBoardButton.disabled = false;
    }
  });

  nameField.addEventListener("input", () => {
    nameField.classList.remove("add-inval");
    const deleteError = nameFieldWrap.querySelectorAll(".error");
    deleteError.forEach(item => {
      item.remove()
    })

    if (nameField.value.trim() == '') {
      nameField.classList.add("add-inval");
      let error = document.createElement("div");
      error.className = "error";
      error.innerHTML = "Введите корректное значение";
      addBoardButton.classList.remove("add-board__button_create");
      nameField.parentElement.append(error);
    }

    if ((!nameField.value.trim() == '') && nameField.value.length < 6) {
      nameField.classList.add("add-inval");
      let error = document.createElement("div");
      error.className = "error";
      error.innerHTML = "Мин количество символов: 6";
      addBoardButton.classList.remove("add-board__button_create");
      nameField.parentElement.append(error);
    }

    if (nameField.value.length > 100) {
      nameField.classList.add("add-inval");
      let error = document.createElement("div");
      error.className = "error";
      error.innerHTML = "Макс количество символов: 100";
      addBoardButton.classList.remove("add-board__button_create");
      nameField.parentElement.append(error);
    }
  });

  linkField.addEventListener("input", () => {
    linkField.classList.remove("add-inval");
    const deleteError = linkFieldWrap.querySelectorAll(".error");
    deleteError.forEach(item => {
      item.remove()
    })

    if (linkField.value.trim() == '') {
      linkField.classList.add("add-inval");
      let error = document.createElement("div");
      error.className = "error";
      error.innerHTML = "Введите корректное значение";
      addBoardButton.classList.remove("add-board__button_create");
      linkField.parentElement.append(error);
    }

    if ((!linkField.value.trim() == '') && linkField.value.length < 6) {
      linkField.classList.add("add-inval");
      let error = document.createElement("div");
      error.className = "error";
      error.innerHTML = "Мин количество символов: 6";
      addBoardButton.classList.remove("add-board__button_create");
      linkField.parentElement.append(error);
    }

    if (linkField.value.length > 100) {
      linkField.classList.add("add-inval");
      let error = document.createElement("div");
      error.className = "error";
      error.innerHTML = "Макс количество символов: 100";
      addBoardButton.classList.remove("add-board__button_create");
      linkField.parentElement.append(error);
    }
  });

  priceField.addEventListener("input", () => {
    priceField.classList.remove("add-inval");
    const deleteError = priceFieldWrap.querySelectorAll(".error");
    deleteError.forEach(item => {
      item.remove()
    })

    let check = /^\d+$/.test(priceField.value)

    if (priceField.value.trim() == '') {
      priceField.classList.add("add-inval");
      let error = document.createElement("div");
      error.className = "error";
      error.innerHTML = "Введите цену";
      addBoardButton.classList.remove("add-board__button_create");
      priceField.parentElement.append(error);
    }
    if ((!priceField.value.trim() == '') && check === false) {
      priceField.classList.add("add-inval");
      let error = document.createElement("div");
      error.className = "error";
      error.innerHTML = "Некорректное значение цены";
      addBoardButton.classList.remove("add-board__button_create");
      priceField.parentElement.append(error);
    }
  });

  //маска разделения тысячных пробелом для поля цены
  addBoardNumber.addEventListener("keyup", () => {
    if (addBoardNumber.value.length > 2) {
      let str = addBoardNumber.value;
      let newStr = str.replace(/(\d\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
      addBoardNumber.value = newStr;
      console.log(str);
    }
  });
};

validate();
