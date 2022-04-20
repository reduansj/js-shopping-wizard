//global variable definition
let mainProductImage = document.getElementById('mainProductImage')
const productViewMiniaturesContainer = document.getElementById('productViewMiniaturesContainer')
const productPrice = document.getElementById('productPrice')
const productDescription = document.getElementById("productDescription")
const nextSectionBtn = document.getElementById('next');
const clearInput = document.getElementById('clearForm');
const formInputs = document.querySelectorAll('#main input');
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
const MAX_STEPS = 4;
let currentStep =1;
const progressBar = document.getElementById('progress-bar')
const bullets = [...document.querySelectorAll('.bullet')]
const finishBtn = document.getElementById('finishBtn')
const btnContainer = document.getElementById('btnContainer')
let [miniatureActiveImage, colorActiveImage] =
  document.querySelectorAll("[default]");
const timeLeftMessg = document.getElementById("timeLeft");
const modal = document.getElementById("myModal");
const imageZoom = document.getElementById("image-zoom")

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
  "profile-page": {
    userName: true,
    email: true,
    password: true,
    confirmPassword: true,
  },
  "address-page": {
    firstName: true,
    lastName: true,
    birthday: true,
    address1: true,
    postalCode: true,
    phone: true,
  },
  "shipping-page": {
    type: true,
  },
  "finish-page": {
    termsConditions: true,
  },
};

const saveInputData = {
  "profile-page": {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  "address-page": {
    firstName: "",
    lastName: "",
    birthday: "",
    address1: "",
    address2: "",
    country: "",
    postalCode: "",
    phone: "",
    regularAddress: "",
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
  color: 'black',
  size: 78,
  price: 45.99,
  imgSrc: '',
  shipping: '',
  deliveryDate: 'dious',
  giftMessage: null,
  giftSrc: null,
  shippingPrice: 23
}


const countryCodes = {
  Spain: "+34",
  Andorra: "+367",
  Germany: "+49",
  France: "+33",
  Greece: "+30",
};

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

finishBtn.addEventListener('click', nextSection);
// document.getElementById("input__gift-image").addEventListener('input', e => console.log(e.target.value))
clearInput.addEventListener("click", clearInputs);
country.addEventListener("click", addCountryCode);
productSizeInput.addEventListener("change", (e) => {
  purchaseSummary.size = e.target.value;
  inputStatus["product-page"].size = true;
});
shippingInput.addEventListener("change", (e) => {
  purchaseSummary.shipping = e.target.value;
  deliveryDateEstimation(e);
});
checkboxGiftMessage.addEventListener("click", () => {
  inputGiftMessage.disabled = !inputGiftMessage.disabled;
  inputGiftMessage.value = "";
  giftInformationContainer.classList.toggle("hideElement");
});
formInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    updateInputs(e);
  });
});
buyBtn.addEventListener("click", (e) => {
  timer();
  nextSection(e);
});
nextSectionBtn.addEventListener("click", (e) => {
  getFormData();
  nextSection(e);
});

//Zoom Image


mainProductImage.addEventListener('click', zoomImage)

function zoomImage(){
  modal.style.display = 'block';
  imageZoom.src = mainProductImage.src
}

document.getElementById("close__image-zoom").addEventListener('click', () =>{
  modal.style.display='none'
})

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
    miniatureActiveImage.classList.toggle('miniatureProductImageSelected')
    e.target.classList.toggle('miniatureProductImageSelected')
    miniatureActiveImage = e.target
    mainProductImage.src = e.target.src
  }
}

function colorProductImageClick(e) {
  if (e.target.src != mainProductImage.src) {
    const color = e.target.getAttribute('color')
    const price = productData[color].price
    const images = document.querySelectorAll("#productViewMiniaturesContainer img")
    changeAllImagesPath(color, images)
    colorActiveImage.classList.toggle('productColorSelectorImageSelected')
    e.target.classList.toggle('productColorSelectorImageSelected')
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
    productColorText.innerHTML = `Color: <b>${purchaseSummary.color}</b>`
  }
}

//Function that change miniature image path depending on color of element that has produced the event
function changeAllImagesPath(color, miniatureImages) {
  relativePath = productData[color]['path']
  for (let miniature of miniatureImages) {
    const viewProductFile = miniature.src.split('/')[miniature.src.split('/').length - 1].split('-')
    viewProductFile[1] = color;
    miniature.src = `${relativePath}${viewProductFile.join('-')}`
    if (miniature === miniatureActiveImage) {
      mainProductImage.src = `${relativePath}${viewProductFile.join('-')}`
    }
  }
}

//RegExr to test all inputs
const checkInputexpression = {
  userName: /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g,
  firstName: /^(?=.{0,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z]+(?<![_.])$/g,
  lastName: /^(?=.{0,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z]+(?<![_.])$/g,
  password:
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])[^\s]{8,16}$/g,
  email: /^(?=.{0,50}$)[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]+$/g,
  address1: /^(?=.{0,50}$)[a-zA-z0-9\s]+$/g,
  birthday: /^(\d{4})-(\d{2})-(\d{2})/g,
  postalCode: /^[0-9]{0,5}$/g,
  phone: /^(?:[\+][0-9]{2,3})?[0-9]{9}$/g,
  country: /[A-Z][A-Za-z]+/g,
};

// Verifys the inputs and set the requirment
function updateInputs(e) {
  const currentInput = e.target;
  const activeSectionId = getActiveSectionId();
  const isShippingSection = activeSectionId === "shipping-page";

  if (isShippingSection) {
    return;
  }
  if (
    currentInput.id !== "confirmPassword" &&
    currentInput.id !== "address2" &&
    currentInput.id !== "regularAddress" &&
    currentInput.type !== "checkbox"
  ) {
    const isValid = new RegExp(checkInputexpression[currentInput.id]).test(
      currentInput.value
    );
    inputStatus[currentInput.closest("section").id][currentInput.id] = isValid;

    if (!currentInput.value.length == 0 && !isValid) {
      document
        .getElementById(`${currentInput.id}`)
        .classList.add("requiredInput");
      document
        .getElementById(`${currentInput.id}_errorMssg`)
        .classList.remove("hideElement");
      inputStatus[currentInput.closest("section").id][currentInput.id] =
        isValid;
    } else {
      document
        .getElementById(`${currentInput.id}`)
        .classList.remove("requiredInput");
      document
        .getElementById(`${currentInput.id}_errorMssg`)
        .classList.add("hideElement");
    }
  }
  if (currentInput.id == "confirmPassword" || currentInput.id == "password") {
    matchPassword(currentInput);
  }
}

//Verifies if password confirmation is OK
function matchPassword(input) {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  if (
    !confirmPassword.value.length == 0 &&
    password.value !== confirmPassword.value
  ) {
    confirmPassword.classList.add("requiredInput");
    inputStatus[input.closest("section").id][input.id] = false;
    document
      .getElementById(`${input.id}_errorMssg`)
      .classList.remove("hideElement");
  } else {
    document
      .getElementById(`${input.id}_errorMssg`)
      .classList.add("hideElement");
    confirmPassword.classList.remove("requiredInput");
  }
  if (password.value == confirmPassword.value) {
    inputStatus[input.closest("section").id][input.id] = true;
  }
}

//Add country code to the phone input
function addCountryCode() {
  phone.value = countryCodes[country.value];
}

//Reset input values
function clearInputs() {
  const formId = getActiveSectionId();
  const formInputs = document.querySelectorAll(`#${formId} input`);
  outputDeliveryDate.innerHTML = "";
  formInputs.forEach((input) => {
    if (input.type !== "checkbox" && input.type !== "radio") {
      input.classList.remove("correctInput");
      input.classList.remove("requiredInput");
      document
        .getElementById(`${input.id}_errorMssg`)
        .classList.add("hideElement");
      input.value = "";
    } else {
      input.checked = false;
    }
  });
}

//Identifies activeSection and check if all inputs are OK
function nextSection() {
  const activeSection = document.querySelector("[active-section]");

  // if (
  //   Object.values(inputStatus[activeSection.id]).every(
  //     (input) => input === true
  //   )
  // ) {
  // }
  bullets[currentStep - 1].classList.add("completed");
  if (activeSection.id == "shipping-page") {
    document.getElementById("btnContainer").classList.add("hideElement");
  } else if (activeSection.id === "product-page") {
    btnContainer.classList.toggle("hideElement");
    progressBar.classList.toggle("hideElement");
  }
  currentStep += 1;
  activeSection.classList.toggle("hideElement");
  activeSection.nextElementSibling.classList.toggle("hideElement");
  activeSection.removeAttribute("active-section");
  activeSection.nextElementSibling.setAttribute("active-section", "");
}

const imageMoveZoom = document.getElementById("mainProductImage");

//Event on mouse move
imageMoveZoom.addEventListener("mousemove", (e) => {
  // This gives you the position of the image on the page
  var bbox = e.target.getBoundingClientRect();

  // Then we measure how far into the image the mouse is in both x and y directions
  var mouseX = e.clientX - bbox.left;
  var mouseY = e.clientY - bbox.top;

  // Then work out how far through the image as a percentage the mouse is
  var xPercent = (mouseX / bbox.width) * 100;
  var yPercent = (mouseY / bbox.height) * 100;

  // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
  //let c = imageZoom.getContext('2d');
  //c.translate(0, 0);
  e.target.style.transformOrigin = xPercent + "% " + yPercent + "%";
  // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.
});

//Get active section id
const getActiveSectionId = () => {
  const activeSection = document.querySelector("[active-section]");
  return activeSection.id;
};

function getFormData() {
  const formId = getActiveSectionId();
  const formInputs = document.querySelectorAll(`#${formId} input`);
  if (formId === "shipping-page") {
    return;
  }
  formInputs.forEach((input) => {
    if (input.id !== "regularAddress") {
      saveInputData[formId][input.id] = input.value;
    } else {
      if (input.checked) {
        saveInputData[formId][input.id] = "true";
      }
    }
  });
}

//Timer for end of purchase
const timer = (duration = 5, every = 60) => {
  const showTimeLeft = document.getElementById("timeRemainder");
  const end = new Date();
  end.setMinutes(end.getMinutes() + duration);

  const intervalId = setInterval(() => {
    //Stops the timer purchase correct
    const activeSectionId = getActiveSectionId();
    if (activeSectionId === "finish-page") {
      clearInterval(intervalId);
    }
    //
    const now = new Date();
    const timeLeft = end.getMinutes() - now.getMinutes();
    timeLeftMessg.innerHTML = `Limit time for the purchase is ${timeLeft} minutes`;
    console.log(timeLeft);
    //Show time left
    showTimeLeft.classList.toggle("hideElement");

    setTimeout(() => {
      showTimeLeft.classList.toggle("hideElement");
    }, 5000);

    if (now > end) {
      clearInterval(intervalId);
      location.reload();
    }
  }, every * 1000);
};



//Finish page
const purchase_size = document.getElementById('purchase_size');
const purchase_img = document.getElementById('product_img');
const purchase_color = document.getElementById('purchase_color');
const purchase_time = document.getElementById('purchase_time');
const order_shoe_price = document.getElementById('purchase_order_shoe');
const order_shipping_type =document.getElementById('purchase_order_shipping');
const order_total_price =document.getElementById('purchase_order_total');


function finishPageDisplay(){
  
  purchase_img.src = purchaseSummary.imgSrc;
  purchase_size.textContent += purchaseSummary.size;
  purchase_color.textContent += purchaseSummary.color;
  purchase_time.textContent += purchaseSummary.deliveryDate;
  order_shoe_price.textContent += purchaseSummary.price;
  order_shipping_type.textContent += purchaseSummary.shipping;
  order_total_price.textContent += eval(purchaseSummary.price + purchaseSummary.shippingPrice);

}
finishPageDisplay()

const checkbox_finish = document.getElementById('finishBtn');
const terms = document.getElementById('accept_terms');

checkbox_finish.addEventListener('click', () => {
  console.log(terms.checked)

  if(terms.checked){
    document.getElementById('order_complete_msg').classList.remove('noDisplay');

  }else {
		document.getElementById('terms_msg').classList.remove('noDisplay');
  }


})


