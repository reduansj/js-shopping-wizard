//global variable definition
let mainProductImage = document.getElementById("mainProductImage");
let miniatureActiveImage = document.querySelectorAll("[default]")[0]; //Select element by existing attribute
let colorActiveImage = document.querySelectorAll("[default]")[1];
const productViewMiniaturesContainer = document.getElementById(
  "productViewMiniaturesContainer"
);
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");
const nextSectionBtn = document.getElementById("next");
const clearInput = document.getElementById("clearForm");
const profileInputs = document.querySelectorAll("#profile-page input");
const buyBtn = document.getElementById("productBuy");
const productSizeInput = document.querySelector("select#productSize");
const shippingInput = document.getElementById("shipping");
const actualDate = new Date();
const outputDeliveryDate = document.getElementById("output__delivery-date");
const checkboxGiftMessage = document.querySelector("input[name='gift-check']");
let inputGiftMessage = document.getElementById("input__gift-message");

//Product Data Information
const productData = {
  black: {
    path: "./assets/Products/GM500-black/",
    price: "45.99€",
    text: "Black",
  },
  blackyellow: {
    path: "./assets/Products/GM500-blackyellow/",
    price: "32.99€",
    text: "Black/Yellow",
  },
  goldenhour: {
    path: "./assets/Products/GM500-goldenhour/",
    price: "36.99€",
    text: "Goldenhour",
  },
  green: {
    path: "./assets/Products/GM500-green/",
    price: "58.99€",
    text: "Green",
  },
  marblehead: {
    path: "./assets/Products/GM500-marblehead/",
    price: "78.99€",
    text: "Marblehead",
  },
  moonbeam: {
    path: "./assets/Products/GM500-moonbeam/",
    price: "16.99€",
    text: "Moonbeam",
  },
  naturalindigo: {
    path: "./assets/Products/GM500-naturalindigo/",
    price: "25.99€",
    text: "Natural Indigo",
  },
  navy: {
    path: "./assets/Products/GM500-navy/",
    price: "36.99€",
    text: "Navy",
  },
  teamforestgreen: {
    path: "./assets/Products/GM500-teamforestgreen/",
    price: "88.99€",
    text: "Team Forest Green",
  },
  true: {
    path: "./assets/Products/GM500-true/",
    price: "45.99€",
    text: "True",
  },
  white: {
    path: "./assets/Products/GM500-white/",
    price: "67.99€",
    text: "White",
  },
};

const inputStatus = {
  "product-page": {
    color: true,
    size: true,
    price: true,
  },
  "profile-page": {
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
  "address-page": {
    firstName: false,
    lastName: false,
    birthday: false,
    address1: false,
    address: false,
    country: false,
    phone: false,
  },
  "shipping-page": {
    type: false,
  },
  "finish-page": {
    termsConditions: false,
  },
};

const shippingProp = {
  free: {
    time: 72,
    cost: 0,
  },
  extra: {
    time: 48,
    cost: 4.99,
  },
  premium: {
    time: 24,
    cost: 9.99,
  },
};

const purchaseSummary = {
  color: null,
  size: null,
  price: null,
  shipping: null,
  deliveryDate: null,
  giftMessage: null,
  giftSrc: null,
};

//EVENT LISTENERS DECLARATION

//Declaration event only for the parent
document
  .getElementById("productViewMiniaturesContainer")
  .addEventListener("mouseover", (e) => {
    if (e.target !== e.currentTarget) {
      miniatureProductImageHover(e);
    }
  });

document
  .getElementById("productColorSelectorContainer")
  .addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {
      colorProductImageClick(e);
    }
  });
//Declare events
clearInput.addEventListener("click", clearInputs);
// nextSectionBtn.addEventListener("click", nextSection);

profileInputs.forEach((input) => {
  input.addEventListener("input", updateInputs);
});

buyBtn.addEventListener("click", nextSection);
nextSectionBtn.addEventListener("click", nextSection);
productSizeInput.addEventListener(
  "change",
  (e) => (purchaseSummary.size = e.target.value)
);
shippingInput.addEventListener("change", (e) => {
  purchaseSummary.shipping = e.target.value;
  deliveryDateEstimation(e);
});
checkboxGiftMessage.addEventListener(
  "click",
  () => (inputGiftMessage.disabled = !inputGiftMessage.disabled)
);
//

function deliveryDateEstimation(e) {
  const shippingTime = shippingProp[e.target.value].time * 3600 * 1000;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (actualDate.getHours() >= 15) {
    shippingTime += 24 * 3600;
  }
  const deliveryDate = new Date(
    actualDate.valueOf() + shippingTime
  ).toLocaleDateString("en-EN", options);
  purchaseSummary.deliveryDate = deliveryDate;
  outputDeliveryDate.innerHTML = `${deliveryDate} between <b>9:00h-15:00h</b>`;
}

//Hovers last mouseover image and change the src of mainProductImage
function miniatureProductImageHover(e) {
  if (e.target.src != mainProductImage.src) {
    miniatureActiveImage.classList.replace(
      "miniatureProductImageSelected",
      "miniatureProductImage"
    );
    e.target.classList.replace(
      "miniatureProductImage",
      "miniatureProductImageSelected"
    );
    miniatureActiveImage = e.target;
    mainProductImage.src = e.target.src;
  }
}

function colorProductImageClick(e) {
  if (e.target.src != mainProductImage.src) {
    const color = e.target.getAttribute("color");
    const price = productData[color].price;

    changeAllImagesPath(color, productViewMiniaturesContainer.children);
    colorActiveImage.classList.replace(
      "productColorSelectorImageSelected",
      "productColorSelectorImage"
    );
    e.target.classList.replace(
      "productColorSelectorImage",
      "productColorSelectorImageSelected"
    );
    colorActiveImage = e.target;
    productPrice.textContent = price;
    productDescription.textContent = `${
      productDescription.textContent.split(" ")[0]
    } ${productData[color]["text"]}`;
    purchaseSummary.color = color;
    purchaseSummary.price = price;
  }
}

//Function that change miniature image path depending on color of element that has produced the event
function changeAllImagesPath(color, miniatureImages) {
  relativePath = productData[color]["path"];
  for (let miniature of miniatureImages) {
    viewProductFile = miniature.src
      .split("/")
      [miniature.src.split("/").length - 1].split("-");
    viewProductFile[1] = color;
    miniature.src = `${relativePath}${viewProductFile.join("-")}`;
    if ((viewProductFile[2] = "main.jpg")) {
      mainProductImage.src = `${relativePath}${viewProductFile.join("-")}`;
    }
  }
}

// Profile section

const checkInputexpression = {
  userName: /^[A-Z][A-Za-z0-9_]{4,20}$/,
  password: /^.{4,12}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]+$/,
};

function updateInputs(e) {
  switch (e.target.id) {
    case "userName":
      validateInput(checkInputexpression.userName, e.target);
      break;
    case "email":
      validateInput(checkInputexpression.email, e.target);
      break;
    case "password":
      validateInput(checkInputexpression.password, e.target);
      matchPassword(e.target);
      break;
    case "confirmPassword":
      matchPassword(e.target);
      break;
  }
}

//Verifies if input is OK
function validateInput(exp, input) {
  const validation = exp.test(input.value);
  if (validation) {
    document.getElementById(`${input.id}`).classList.add("correctInput");
    document.getElementById(`${input.id}`).classList.remove("requiredInput");
    inputStatus[input.closest("section").id][input.id] = validation;
  } else {
    console.log("no es valido");
    document.getElementById(`${input.id}`).classList.remove("correctInput");
    document.getElementById(`${input.id}`).classList.add("requiredInput");
    inputStatus[input.closest("section").id][input.id] = validation;
  }
}

//Verifies if password confirmation is OK
function matchPassword(input) {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  if (!confirmPassword.value.length == 0) {
    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.remove("correctInput");
      confirmPassword.classList.add("requiredInput");
      inputStatus[input.closest("section").id][input.id] = false;
    } else {
      confirmPassword.classList.add("correctInput");
      confirmPassword.classList.remove("requiredInput");
      inputStatus[input.closest("section").id][input.id] = true;
    }
  }
}

//Reset input values
function clearInputs() {
  profileInputs.forEach((input) => {
    input.classList.remove("correctInput");
    input.classList.remove("requiredInput");

    input.value = "";
  });
}

//Identifies activeSection and check if all inputs are OK
function nextSection() {
  const activeSection = document.querySelector("[activeSection]");
  if (
    Object.values(inputStatus[activeSection.id]).every(
      (input) => input === true
    )
  ) {
    activeSection.classList.toggle("hideSection");
    activeSection.nextElementSibling.classList.toggle("hideSection");
    activeSection.removeAttribute("activeSection");
    activeSection.nextElementSibling.setAttribute("activeSection", "");
  }
}
