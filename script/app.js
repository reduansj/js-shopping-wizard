//global variable definition
let mainProductImage = document.getElementById('mainProductImage')
let miniatureActiveImage = document.querySelectorAll('[default]')[0] //Select element by existing attribute
let colorActiveImage = document.querySelectorAll('[default]')[1]
const productViewMiniaturesContainer = document.getElementById('productViewMiniaturesContainer')
const productPrice = document.getElementById('productPrice')
const productDescription = document.getElementById("productDescription")
const nextSectionBtn = document.getElementById('next');
const clearInput = document.getElementById('clearForm');
const profileInputs = document.querySelectorAll('#profile input');
const buyBtn = document.getElementById('productBuy');

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

  product: {
    userName: false,
    password: false,
    email: true,
  },
  profile: {
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
  address: {
    firstName: false,
    lastName: false,
    birthday: false,
    address1: false,
    address: false,
    country: false,
    phone: false,
  },
  shipping: {
    type: 'free',
    giftMessage: '',
    giftSrc: '',
  }
}

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
//Declare events
clearInput.addEventListener("click", clearInputs);
// nextSectionBtn.addEventListener("click", nextSection);

profileInputs.forEach((input) => {
  input.addEventListener('input', updateInputs);
});

buyBtn.addEventListener('click', nextSection);
nextSectionBtn.addEventListener('click', nextSection);
//

//Hovers last mouseover image and change the src of mainProductImage
function miniatureProductImageHover(e) {
  if (e.target.src != mainProductImage.src) {
    //Changes miniatureDefault selection
    miniatureActiveImage.classList.replace('miniatureProductImageSelected', 'miniatureProductImage')
    e.target.classList.replace('miniatureProductImage', 'miniatureProductImageSelected')
    miniatureActiveImage = e.target
    //change mainProductImage
    mainProductImage.src = e.target.src
  }
}

function colorProductImageClick(e) {
  if (e.target.src != mainProductImage.src) {
    changeAllImagesPath(e.target.getAttribute('color'), productViewMiniaturesContainer.children)
    colorActiveImage.classList.replace('productColorSelectorImageSelected', 'productColorSelectorImage')
    e.target.classList.replace('productColorSelectorImage', 'productColorSelectorImageSelected')
    colorActiveImage = e.target
    productPrice.textContent = productData[e.target.getAttribute('color')]['price']
    productDescription.textContent = `${productDescription.textContent.split(" ")[0]} ${productData[e.target.getAttribute('color')]['text']}`
  }
}

//Function that change miniature image path depending on color of element that has produced the event
function changeAllImagesPath(color, miniatureImages) {
  relativePath = productData[color]['path']
  for (let miniature of miniatureImages) {
    viewProductFile = miniature.src.split('/')[miniature.src.split('/').length - 1].split('-')
    viewProductFile[1] = color;
    miniature.src = `${relativePath}${viewProductFile.join('-')}`
    if (viewProductFile[2] = 'main.jpg') {
      mainProductImage.src = `${relativePath}${viewProductFile.join('-')}`
    }
  }
}

// Profile section

const checkInputexpression = {
  userName: /^[A-Z][A-Za-z0-9_]{4,20}$/,
  password: /^.{4,12}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]+$/,
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

  }
}

function validateInput(exp, input) {
  if (exp.test(input.value)) {
    document.getElementById(`${input.id}`).classList.add("correctInput");
    document.getElementById(`${input.id}`).classList.remove("requiredInput");
    inputStatus[input.parentNode.parentNode.id][input.id] = true;
  } else if (!exp.test(input.value)) {
    document.getElementById(`${input.id}`).classList.remove("correctInput");
    document.getElementById(`${input.id}`).classList.add("requiredInput");
    inputStatus[input.parentNode.parentNode.id][input.id] = false;
  }
}

function matchPassword(input) {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  if (!confirmPassword.value.length == 0) {
    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.remove("correctInput");
      confirmPassword.classList.add("requiredInput");
      inputStatus[input.parentNode.parentNode.id][input.id] = false;
    } else {
      confirmPassword.classList.add("correctInput");
      confirmPassword.classList.remove("requiredInput");
      inputStatus[input.parentNode.parentNode.id][input.id] = true;
    }
  }
}

function clearInputs() {
  profileInputs.forEach(input => {
    input.classList.remove("correctInput");
    input.classList.remove("requiredInput");
    input.value = '';
  });

}


function nextSection() {
  const addressSection = document.getElementById('address');
  const profileSection = document.getElementById('profile');
  const activeSection = document.querySelector('.showSection');

  if (activeSection.id == addressSection.id || activeSection.id == profileSection.id) {
    if (Object.values(inputStatus[activeSection.id]).every(e => e === true)) {
      activeSection.classList.replace('showSection', 'hideSection');
      activeSection.nextElementSibling.classList.replace('hideSection', 'showSection');
    }
  } else {
    activeSection.classList.replace('showSection', 'hideSection');
    activeSection.nextElementSibling.classList.toggle('hideSection');
    activeSection.nextElementSibling.classList.toggle('showSection');

  }

}
