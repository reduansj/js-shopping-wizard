//import productData from 'productData'
document.addEventListener('DOMContentLoaded', function() {
   
    // this function runs when the DOM is ready, i.e. when the document has been parsed

    //global variable definition
    let mainProductImage = document.getElementById('mainProductImage')
    let miniatureActiveImage = document.querySelectorAll('[default]')[0] //Select element by existing attribute
    let colorActiveImage = document.querySelectorAll('[default]')[1]
    const productViewMiniaturesContainer = document.getElementById('productViewMiniaturesContainer')
    const productPrice = document.getElementById('productPrice')
    const productDescription = document.getElementById("productDescription")

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

    //Declaration event only for the parent
    document.getElementById("productViewMiniaturesContainer").addEventListener('mouseover', e => {
        if (e.target !== e.currentTarget){miniatureProductImageHover(e)}
    })

    document.getElementById("productColorSelectorContainer").addEventListener('click', e => {
        if (e.target !== e.currentTarget){colorProductImageClick(e)}
    })

    //Hovers last mouseover image and change the src of mainProductImage
    function miniatureProductImageHover(e){
        if (e.target.src != mainProductImage.src){
            //Changes miniatureDefault selection
            miniatureActiveImage.classList.replace('miniatureProductImageSelected', 'miniatureProductImage')
            e.target.classList.replace('miniatureProductImage', 'miniatureProductImageSelected')
            miniatureActiveImage = e.target
            //change mainProductImage
            mainProductImage.src = e.target.src
        }
    }

    function colorProductImageClick(e){
        if (e.target.src != mainProductImage.src){
            changeAllImagesPath(e.target.getAttribute('color'), productViewMiniaturesContainer.children)
            colorActiveImage.classList.replace('productColorSelectorImageSelected', 'productColorSelectorImage')
            e.target.classList.replace('productColorSelectorImage', 'productColorSelectorImageSelected')
            colorActiveImage = e.target
            productPrice.textContent = productData[e.target.getAttribute('color')]['price']
            productDescription.textContent = `${productDescription.textContent.split(" ")[0]} ${productData[e.target.getAttribute('color')]['text']}`
        }
    }

    //Function that change miniature image path depending on color of element that has produced the event
    function changeAllImagesPath(color, miniatureImages){
        relativePath = productData[color]['path']
        for (let child of miniatureImages){
            viewProductFile = child.src.split('/')[child.src.split('/').length-1].split('-')
            viewProductFile[1] = color;
            child.src = `${relativePath}${viewProductFile.join('-')}`
            if(viewProductFile[2] = 'main.jpg'){
                mainProductImage.src = `${relativePath}${viewProductFile.join('-')}`
            }
        }
    }
});