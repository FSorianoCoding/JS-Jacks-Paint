// When the user hovers over a paint swatch with the mouse, the paint color name is displayed.
// When the user hovers over a paint swatch with the mouse, the price of the paint is displayed.
// When the user hovers over a paint swatch with the mouse, the opacity of the image is reduced.

function configureListeners() {
    let images = document.getElementsByTagName('img');// select img elements  
    // originally had querySelectorAll, but solution showed tag which seems cleaner.

     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        // Could not understand having true or false as the last parameter here.
        // I know it deals with capturing something, but not sure what that means in plain English.
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity)
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    // I'll be honest, I could not solve this function to save my life.    
    if (this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     // used remove to be opposite of addOpacity function.
     if (this.classList.contains('dim')){
        this.classList.remove('dim')
    }
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    // Did not know this was a built in function to cancel an event!
    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)
            break;           
        case 'pn2':
            price = '$11.14'
            colorName = 'Medium Brown'
            updatePrice(colorName, price)            
            break;            
        case 'pn3':
            price = '$22.99'
            colorName = 'Royal Blue'
            updatePrice(colorName, price)
            break;   
        case 'pn4':
            price = '$13.42'
            colorName = 'Solid Red'
            updatePrice(colorName, price)
            break;   
        case 'pn5':
            price = "$21.98"
            colorName = "Solid White"
            updatePrice(colorName, price)
            break;   
        case 'pn6':
            price = "$4.99"
            colorName = "Solid Black"
            updatePrice(colorName, price)
            break;   
        case 'pn7':
            price = '$8.22'
            colorName = 'Solid Cyan'
            updatePrice(colorName, price)
            break;   
        case 'pn8':
            price = '$11.99'
            colorName = 'Solid Purple'
            updatePrice(colorName, price)
            break;   
        case 'pn9':
            price = '$14.99'
            colorName = 'Solid Yellow'
            updatePrice(colorName, price)
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');// select element with corresponding id
        colorPrice.textContent = price;// display price
        // originally used innnerHTML, but realized textContent seemed approrpriate since we weren't adding html.
        
        let color = document.getElementById('color-name');// select element with corresponding id
        color.textContent = colorName;
        //display color name
    }
    
}
