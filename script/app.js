//global variable definition
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
const productColorText = document.getElementById('productColor')
const giftInformationContainer = document.getElementById('gift-information__container')

//Product Data Information
const productData = {
  black: {
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
    color: true,
    size: false,
    price: true,
  },
  'profile-page': {
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
  'address-page': {
    firstName: false,
    lastName: false,
    birthday: false,
    address1: false,
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

const shippingProp = {
  free: {
    time: 72,
    cost: 0,
  },
  extra: {
    time: 48,
    cost: 4.99
  },
  premium: {
    time: 24,
    cost: 9.99,
  }
}

const purchaseSummary = {
  color: 'black',
  size: null,
  price: 45.99,
  shipping: null,
  deliveryDate: null,
  giftMessage: null,
  giftSrc: null,
}

const countryCodes = {
  Spain: '+34-',
  Andorra: '+367-',
  Germany: '+49-',
  France: '+33-',
  Greece: '+30-',
}

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

//EVENT LISTENERS DECLARATION

//Declaration event only for the parent
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

document.getElementById("productColorSelectorContainer").addEventListener('mouseover', e => {
  if (e.target !== e.currentTarget){
    colorProductImageHover(e)
  }
})

document.getElementById("productColorSelectorContainer").addEventListener('mouseout', e => {
  if (e.target !== e.currentTarget) {
    colorProductImageMouseOut(e)
  }
})

document.getElementById("input__gift-image").addEventListener('input', e => console.log(e.target.value))

//Declare events
clearInput.addEventListener("click", clearInputs);
profileInputs.forEach((input) => {
  input.addEventListener('input', updateInputs);
});
buyBtn.addEventListener('click', nextSection);
nextSectionBtn.addEventListener('click', nextSection);
country.addEventListener('click', addCountryCode);
productSizeInput.addEventListener('change', e => {purchaseSummary.size = e.target.value; inputStatus["product-page"].size = true})
shippingInput.addEventListener('change', e => {
  purchaseSummary.shipping = e.target.value;
  deliveryDateEstimation(e)
})
checkboxGiftMessage.addEventListener('click', () => {inputGiftMessage.disabled = !inputGiftMessage.disabled; inputGiftMessage.value = ''; giftInformationContainer.classList.toggle('hideElement')})

/*FUNCTIONS*/

function deliveryDateEstimation(e) {
  let shippingTime = shippingProp[e.target.value].time * 3600 * 1000
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  if (actualDate.getHours() >= 15) {
    shippingTime += 24 * 3600 * 1000
  }
  const deliveryDate = new Date(actualDate.valueOf() + shippingTime).toLocaleDateString('en-EN', options)
  purchaseSummary.deliveryDate = deliveryDate
  outputDeliveryDate.innerHTML = `${deliveryDate} between <b>9:00h-15:00h</b>`
}

//Hovers last mouseover image and change the src of mainProductImage
function miniatureProductImageHover(e) {
  if (e.target.src != mainProductImage.src) {
    miniatureActiveImage.classList.replace('miniatureProductImageSelected', 'miniatureProductImage')
    e.target.classList.replace('miniatureProductImage', 'miniatureProductImageSelected')
    miniatureActiveImage = e.target
    mainProductImage.src = e.target.src
  }
}

function colorProductImageClick(e) {
  if (e.target.src != mainProductImage.src) {
    const color = e.target.getAttribute('color')
    const price = productData[color].price
    changeAllImagesPath(color, productViewMiniaturesContainer.children)
    colorActiveImage.classList.replace('productColorSelectorImageSelected', 'productColorSelectorImage')
    e.target.classList.replace('productColorSelectorImage', 'productColorSelectorImageSelected')
    productPrice.textContent = price
    productDescription.textContent = `${productDescription.textContent.split(" ")[0]} ${productData[color]['text']}`
    purchaseSummary.color = color
    purchaseSummary.price = price
    colorActiveImage.style.border = 'none'
    colorActiveImage = e.target
  }
}

function colorProductImageHover(e) {
  e.target.style.border = '1px solid black';
  productColorText.innerHTML = `Color: <b>${e.target.getAttribute('color')}</b>`
}

function colorProductImageMouseOut(e){
  if(e.target !== colorActiveImage){
    e.target.style.border = 'none';
    productColorText.innerHTML = `Color: <b>black</b>`
  }
}

//Function that change miniature image path depending on color of element that has produced the event
function changeAllImagesPath(color, miniatureImages) {
  relativePath = productData[color]['path']
  for (let miniature of miniatureImages) {
    viewProductFile = miniature.src.split('/')[miniature.src.split('/').length - 1].split('-')
    viewProductFile[1] = color;
    miniature.src = `${relativePath}${viewProductFile.join('-')}`
    if (miniature === miniatureActiveImage) {
      mainProductImage.src = `${relativePath}${viewProductFile.join('-')}`
    }
  }
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
      break;
  }
}

function addCountryCode() {
  phone.value = countryCodes[country.value];
}

//Verifies if input is OK
function validateInput(exp, input) {
  const validation = exp.test(input.value)
  inputStatus[input.closest('section').id][input.id] = validation;
  if (validation) {
    document.getElementById(`${input.id}`).classList.add("correctInput");
    document.getElementById(`${input.id}`).classList.remove("requiredInput");
    document.getElementById(`${input.id}_paragraph`).classList.add("hideElement");
  } else {
    document.getElementById(`${input.id}`).classList.remove("correctInput");
    document.getElementById(`${input.id}`).classList.add("requiredInput");
    document.getElementById(`${input.id}_paragraph`).classList.remove("hideElement");
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
    }
  }
}

//Reset input values
function clearInputs() {
  profileInputs.forEach(input => {
    input.classList.remove("correctInput", "requiredInput");
    input.value = '';
    console.log(input)
  });
}

//Identifies activeSection and check if all inputs are OK
function nextSection() {
  const activeSection = document.querySelector('[activeSection]');
  if (Object.values(inputStatus[activeSection.id]).every(input => input === true)) {
    activeSection.classList.toggle('hideElement');
    activeSection.nextElementSibling.classList.toggle('hideElement');
    activeSection.removeAttribute('activeSection')
    activeSection.nextElementSibling.setAttribute('activeSection', '')
  }
}
