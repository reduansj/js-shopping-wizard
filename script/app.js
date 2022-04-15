//global variable definition
<<<<<<< HEAD
let mainProductImage = document.getElementById('mainProductImage')
let miniatureActiveImage = document.querySelectorAll('[default]')[0] //Select element by existing attribute
let colorActiveImage = document.querySelectorAll('[default]')[1]
const productViewMiniaturesContainer = document.getElementById('productViewMiniaturesContainer')
const productPrice = document.getElementById('productPrice')
const productDescription = document.getElementById("productDescription")
const nextSectionBtn = document.getElementById('next');
const clearInput = document.getElementById('clearForm');
const profileInputs = document.querySelectorAll('#main input');
const buyBtn = document.getElementById('productBuy');
const productSizeInput = document.querySelector('select#productSize');
const shippingInput = document.getElementById('shipping');
const actualDate = new Date();
const outputDeliveryDate = document.getElementById('output__delivery-date');
const checkboxGiftMessage = document.querySelector("input[name='gift-check']");
let inputGiftMessage = document.getElementById('input__gift-message');
const country = document.getElementById('country');
const phone = document.getElementById('phone');
=======
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
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09

//Product Data Information
const productData = {
  black: {
<<<<<<< HEAD
    path: './assets/Products/GM500-black/',
    price: '45.99€',
    text: 'Black'
  },
  blackyellow: {
    path: './assets/Products/GM500-blackyellow/',
    price: '32.99€',
    text: 'Black/Yellow'
  },
  goldenhour: {
    path: './assets/Products/GM500-goldenhour/',
    price: '36.99€',
    text: 'Goldenhour'
  },
  green: {
    path: './assets/Products/GM500-green/',
    price: '58.99€',
    text: 'Green'
  },
  marblehead: {
    path: './assets/Products/GM500-marblehead/',
    price: '78.99€',
    text: 'Marblehead'
  },
  moonbeam: {
    path: './assets/Products/GM500-moonbeam/',
    price: '16.99€',
    text: 'Moonbeam'
  },
  naturalindigo: {
    path: './assets/Products/GM500-naturalindigo/',
    price: '25.99€',
    text: 'Natural Indigo'
  },
  navy: {
    path: './assets/Products/GM500-navy/',
    price: '36.99€',
    text: 'Navy'
  },
  teamforestgreen: {
    path: './assets/Products/GM500-teamforestgreen/',
    price: '88.99€',
    text: 'Team Forest Green'
  },
  true: {
    path: './assets/Products/GM500-true/',
    price: '45.99€',
    text: 'True'
  },
  white: {
    path: './assets/Products/GM500-white/',
    price: '67.99€',
    text: 'White'
  },
}

const inputStatus = {

  'product-page': {
=======
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
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
    color: true,
    size: true,
    price: true,
  },
<<<<<<< HEAD
  'profile-page': {
=======
  "profile-page": {
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
<<<<<<< HEAD
  'address-page': {
=======
  "address-page": {
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
    firstName: false,
    lastName: false,
    birthday: false,
    address1: false,
<<<<<<< HEAD
    postalCode: false,
    phone: false,
  },
  'shipping-page': {
    type: false,
  },
  'finish-page': {
    termsConditions: false,
  }
}
=======
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
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09

const shippingProp = {
  free: {
    time: 72,
    cost: 0,
  },
  extra: {
    time: 48,
<<<<<<< HEAD
    cost: 4.99
=======
    cost: 4.99,
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
  },
  premium: {
    time: 24,
    cost: 9.99,
<<<<<<< HEAD
  }
}
=======
  },
};
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09

const purchaseSummary = {
  color: null,
  size: null,
  price: null,
  shipping: null,
  deliveryDate: null,
  giftMessage: null,
  giftSrc: null,
<<<<<<< HEAD
}

const countryCodes = {
  Spain: '+34-',
  Andorra: '+367-',
  Germany: '+49-',
  France: '+33-',
  Greece: '+30-',
}

=======
};
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09

//EVENT LISTENERS DECLARATION

//Declaration event only for the parent
<<<<<<< HEAD
document.getElementById("productViewMiniaturesContainer").addEventListener('mouseover', e => {
  if (e.target !== e.currentTarget) {
    miniatureProductImageHover(e)
  }
})

document.getElementById("productColorSelectorContainer").addEventListener('click', e => {
  if (e.target !== e.currentTarget) {
    colorProductImageClick(e)
  }
})
//Declare events
clearInput.addEventListener("click", clearInputs);
profileInputs.forEach((input) => {
  input.addEventListener('input', updateInputs);
});
buyBtn.addEventListener('click', nextSection);
nextSectionBtn.addEventListener('click', nextSection);
country.addEventListener('click', addCountryCode);
productSizeInput.addEventListener('change', e => purchaseSummary.size = e.target.value)
shippingInput.addEventListener('change', e => {
  purchaseSummary.shipping = e.target.value;
  deliveryDateEstimation(e)
})
checkboxGiftMessage.addEventListener('click', () => inputGiftMessage.disabled = !inputGiftMessage.disabled)
//

function deliveryDateEstimation(e) {
  const shippingTime = shippingProp[e.target.value].time * 3600 * 1000
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  if (actualDate.getHours() >= 15) {
    shippingTime += 24 * 3600
  }
  const deliveryDate = new Date(actualDate.valueOf() + shippingTime).toLocaleDateString('en-EN', options)
  purchaseSummary.deliveryDate = deliveryDate
  outputDeliveryDate.innerHTML = `${deliveryDate} between <b>9:00h-15:00h</b>`
=======
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
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
}

//Hovers last mouseover image and change the src of mainProductImage
function miniatureProductImageHover(e) {
  if (e.target.src != mainProductImage.src) {
<<<<<<< HEAD
    miniatureActiveImage.classList.replace('miniatureProductImageSelected', 'miniatureProductImage')
    e.target.classList.replace('miniatureProductImage', 'miniatureProductImageSelected')
    miniatureActiveImage = e.target
    mainProductImage.src = e.target.src
=======
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
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
  }
}

function colorProductImageClick(e) {
  if (e.target.src != mainProductImage.src) {
<<<<<<< HEAD
    const color = e.target.getAttribute('color')
    const price = productData[color].price
    changeAllImagesPath(color, productViewMiniaturesContainer.children)
    colorActiveImage.classList.replace('productColorSelectorImageSelected', 'productColorSelectorImage')
    e.target.classList.replace('productColorSelectorImage', 'productColorSelectorImageSelected')
    colorActiveImage = e.target
    productPrice.textContent = price
    productDescription.textContent = `${productDescription.textContent.split(" ")[0]} ${productData[color]['text']}`
    purchaseSummary.color = color
    purchaseSummary.price = price
=======
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
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
  }
}

//Function that change miniature image path depending on color of element that has produced the event
function changeAllImagesPath(color, miniatureImages) {
<<<<<<< HEAD
  relativePath = productData[color]['path']
  for (let miniature of miniatureImages) {
    viewProductFile = miniature.src.split('/')[miniature.src.split('/').length - 1].split('-')
    viewProductFile[1] = color;
    miniature.src = `${relativePath}${viewProductFile.join('-')}`
    if (viewProductFile[2] = 'main.jpg') {
      mainProductImage.src = `${relativePath}${viewProductFile.join('-')}`
=======
  relativePath = productData[color]["path"];
  for (let miniature of miniatureImages) {
    viewProductFile = miniature.src
      .split("/")
      [miniature.src.split("/").length - 1].split("-");
    viewProductFile[1] = color;
    miniature.src = `${relativePath}${viewProductFile.join("-")}`;
    if ((viewProductFile[2] = "main.jpg")) {
      mainProductImage.src = `${relativePath}${viewProductFile.join("-")}`;
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
    }
  }
}

<<<<<<< HEAD
//RegExr to test all inputs
const checkInputexpression = {
  userName: /^[A-Z][A-Za-z0-9_]{4,20}/g,
  name: /^[A-Z][A-Za-z]{4,20}/g,
  password: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])[^\s]{8,16}$/g,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]+$/g,
  address: /^[a-zA-z\s(\d{2})]{5,50}/g,
  birthday: /^(\d{4})-(\d{2})-(\d{2})/g,
  zip: /^[0-9]{5}$/g,
  phone: /^([\+][0-9]{2,3})-[0-9]{9}$/g,
  country: /[A-Z][A-Za-z]+/g,
}

function updateInputs(e) {
  switch (e.target.id) {
    case 'userName':
      validateInput(checkInputexpression.userName, e.target)
      break;
    case 'email':
      validateInput(checkInputexpression.email, e.target)
      break;
    case 'password':
      validateInput(checkInputexpression.password, e.target);
      matchPassword(e.target)
      break;
    case 'confirmPassword':
      matchPassword(e.target)
      break;
    case 'firstName':
      validateInput(checkInputexpression.name, e.target)
      break;
    case 'lastName':
      validateInput(checkInputexpression.name, e.target)
      break;
    case 'birthday':
      validateInput(checkInputexpression.birthday, e.target);
      break;
    case 'address1':
      validateInput(checkInputexpression.address, e.target)
      break;
    case 'postalCode':
      validateInput(checkInputexpression.zip, e.target)
      break;
    case 'phone':
      validateInput(checkInputexpression.phone, e.target);
=======
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
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
      break;
  }
}

<<<<<<< HEAD
function addCountryCode() {
  phone.value = countryCodes[country.value];
}

//Verifies if input is OK
function validateInput(exp, input) {
  const validation = exp.test(input.value)
  if (validation) {
    document.getElementById(`${input.id}`).classList.add("correctInput");
    document.getElementById(`${input.id}`).classList.remove("requiredInput");	
    document.getElementById(`${input.id}_paragraph`).classList.add("hideElement");													  
    inputStatus[input.closest('section').id][input.id] = validation;
  } else {
    document.getElementById(`${input.id}`).classList.remove("correctInput");
    document.getElementById(`${input.id}`).classList.add("requiredInput");
    document.getElementById(`${input.id}_paragraph`).classList.remove("hideElement");																	 
    inputStatus[input.closest('section').id][input.id] = validation;
  }
}


//Verifies if password confirmation is OK
function matchPassword(input) {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  if (!confirmPassword.value.length == 0) {
    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.remove("correctInput");
      confirmPassword.classList.add("requiredInput");																			   
      inputStatus[input.closest('section').id][input.id] = false;
    } else {
      confirmPassword.classList.add("correctInput");
      confirmPassword.classList.remove("requiredInput");																	
      inputStatus[input.closest('section').id][input.id] = true;
=======
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
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
    }
  }
}

//Reset input values
function clearInputs() {
<<<<<<< HEAD
  profileInputs.forEach(input => {
    input.classList.remove("correctInput");
    input.classList.remove("requiredInput");
    input.value = '';
=======
  profileInputs.forEach((input) => {
    input.classList.remove("correctInput");
    input.classList.remove("requiredInput");

    input.value = "";
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
  });
}

//Identifies activeSection and check if all inputs are OK
function nextSection() {
<<<<<<< HEAD
  const activeSection = document.querySelector('[activeSection]');
  if (Object.values(inputStatus[activeSection.id]).every(input => input === true)){
    activeSection.classList.toggle('hideElement');
    activeSection.nextElementSibling.classList.toggle('hideElement');
    activeSection.removeAttribute('activeSection')
    activeSection.nextElementSibling.setAttribute('activeSection', '')
  }
}

=======
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
>>>>>>> 608eb12a76ab4ada22585702134b8b6c2bd93e09
