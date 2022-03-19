console.log("Hello World :)");
const grid = document.querySelector(".grid");
const todoNewCard = document.querySelector(".todoNewCard");
let cardsObj = [];
let cardCounter = cardsObj.length;
const btnAddCard = document.getElementById("btn-addCard");

// OBJECT CARD

function Card() {
  // CONTAINERS
  this.cardDiv = document.createElement("div");
  this.cardDiv.classList.add("todoCard");
  this.containerDiv = document.createElement("div");
  this.containerDiv.classList.add("todoContainer");

  // CARD HEADER
  this.cardHeader = document.createElement("div");
  this.cardHeader.classList.add("cardHeader");
  // BTN COLOR
  this.btnColors = document.createElement("div");
  this.btnColors.classList.add("btnColors");
  this.divColors = document.createElement("div");
  this.divColors.classList.add("divColors");
  // this.divColorsBg = document.createElement('div');
  // this.divColorsBg.classList.add('divColorsBg')
  this.btnColorBlue = document.createElement("div");
  this.btnColorBlue.classList.add("btnColorBlue");
  this.btnColorGreen = document.createElement("div");
  this.btnColorGreen.classList.add("btnColorGreen");
  this.btnColorYellow = document.createElement("div");
  this.btnColorYellow.classList.add("btnColorYellow");
  this.btnColorPink = document.createElement("div");
  this.btnColorPink.classList.add("btnColorPink");
  // this.divColors.appendChild(this.divColorsBg)
  this.divColors.appendChild(this.btnColorBlue);
  this.divColors.appendChild(this.btnColorGreen);
  this.divColors.appendChild(this.btnColorYellow);
  this.divColors.appendChild(this.btnColorPink);
  this.btnColors.appendChild(this.divColors);
  this.cardTitleInput = document.createElement("input");
  this.cardTitleInput.classList.add("cardTitleInput");
  this.cardTitleInput.setAttribute("type", "text");

  // UL
  cardCounter++;
  this.cardUl = document.createElement("ul");
  this.cardUl.setAttribute("id", `ul-${cardCounter}`);
  this.cardUl.classList.add("todoList");

  // ADD USER INPUT FIELDS TO CARD
  this.cardForm = document.createElement("form");
  this.cardInputText = document.createElement("input");
  this.cardInputText.setAttribute("type", "text");
  this.cardInputText.classList.add("userInput");
  this.cardInputBtn = document.createElement("input");
  this.cardInputBtn.setAttribute("type", "submit");
  this.cardInputBtn.setAttribute("value", "+");
  this.cardInputBtn.classList.add("btnSubmit");
  this.cardInputBtn.classList.add("fa-solid");
  this.cardInputBtn.classList.add("fa-circle-plus");

  // APPEND ELEMENTS TO CURRENT DIVS
  this.cardHeader.appendChild(this.cardTitleInput);
  this.cardHeader.appendChild(this.btnColors);
  this.cardDiv.appendChild(this.cardHeader);

  this.cardForm.appendChild(this.cardInputText);
  this.cardForm.appendChild(this.cardInputBtn);

  this.cardUl.appendChild(this.cardForm);
  this.containerDiv.appendChild(this.cardUl);
  this.cardDiv.appendChild(this.containerDiv);

  grid.appendChild(this.cardDiv);
  todoNewCard.before(this.cardDiv);
  this.addItem = function (event) {
    // event.preventDefault();

    // CREATE DIV
    this.newDiv = document.createElement("div");
    this.newDiv.classList.add("todoDiv");

    // CREATE AND INSERT LI INSIDE NEWDIV
    this.todoLi = document.createElement("li");
    this.todoLi.classList.add("todoItem");
    this.todoLi.innerText = this.cardInputText.value;
    this.newDiv.appendChild(this.todoLi);

    // CREATE BUTTON CHECK
    this.btnCheck = document.createElement("button");
    this.btnCheck.classList.add("btnCheck");
    this.btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
    this.newDiv.appendChild(this.btnCheck);

    // CREATE BUTTON TRASH
    this.btnTrash = document.createElement("button");
    this.btnTrash.classList.add("btnTrash");
    this.btnTrash.innerHTML = '<i class="fa-solid fa-trash"></i>';
    this.newDiv.appendChild(this.btnTrash);

    // INSERT NEWDIV IN UL
    this.cardUl.appendChild(this.newDiv);

    // CLEAR USERINPUT
    this.cardInputText.value = "";
  };

  this.check = function (item) {
    this.todoParent = item.parentElement;
    this.todoParent.classList.toggle("completed");
  };

  this.delete = function (item) {
    this.todoParent = item.parentElement;
    this.todoParent.classList.add("fall");
    this.todoParent.addEventListener("transitionend", () => {
      this.todoParent.remove();
    });
  };

  this.createTitle = function () {
    this.cardTitleInput.setAttribute("readonly", "");
  };

  this.setColor = function (color) {
    this.btnColors.style.setProperty("background-color", color);
    this.cardHeader.style.setProperty("background-color", color);
    this.cardInputBtn.style.setProperty("background-color", color);

    // TESTE
    this.btnCheck.setProperty("background-color", color);
    this.btnTrash.style.borderColor = color;
  };
}

//CREATE CARDS
function createCards() {
  const newCard = new Card();
  updateCardFunctions(newCard);
  cardsObj.push(newCard);
}

// COLOR TEST
const lightGreen = "var(--lightGreen)";
const lightBlue = "var(--lightBlue)";
const lightPink = "var(--lightPink)";
const lightYellow = "var(--lightYellow)";
// const cardz = new Card();
// cardz.cardHeader.style.setProperty("background-color", lightBlue);
// cardz.cardInputBtn.style.setProperty("background-color", lightBlue);

// EVENT LISTENERS

// CREATE CARDS
btnAddCard.addEventListener("click", (e) => {
  if (todoNewCard.classList.contains("move")) {
  } else {
    e.preventDefault();
    createCards();
    todoNewCard.classList.add("move");
    setTimeout(() => {
      todoNewCard.classList.remove("move");
    }, 1500);
  }
});

//FUNCTIONS
// SET FUNCTIONS TO CARD
function updateCardFunctions(item) {
  //Set Card Colors
  item.divColors.addEventListener("click", (e) => {
    const buttonColor = e.target;
    switch (true) {
      case buttonColor.classList.contains("btnColorBlue"):
        item.setColor(lightBlue);
        break;
      case buttonColor.classList.contains("btnColorGreen"):
        item.setColor(lightGreen);
        break;
      case buttonColor.classList.contains("btnColorYellow"):
        item.setColor(lightYellow);
        break;
      case buttonColor.classList.contains("btnColorPink"):
        item.setColor(lightPink);
        break;
    }
  });

  //Set Title Function
  item.cardTitleInput.addEventListener("keydown", ({ key }) => {
    if (key == "Enter") {
      item.createTitle();
    }
  });
  item.cardTitleInput.addEventListener("focusout", () => {
    item.createTitle();
  });

  //Add new item to list
  item.cardInputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    item.addItem();
  });

  //Check or Delete Item
  item.cardUl.addEventListener("click", (e) => {
    const botao = e.target;
    if (botao.classList.contains("btnCheck")) {
      item.check(botao);
    }
    if (botao.classList.contains("btnTrash")) {
      item.delete(botao);
    }
  });
}
