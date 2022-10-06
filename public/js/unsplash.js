//Image Container

const imageContainer = document.getElementById('image-container');
const imageParentContainer = document.getElementById('image-parent-container');


let isReady = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];


// Unsplash API
// API keys 
//Unsplash API limits count to 30 images per load along with 50 refreshes per hour
let count = 30;
const apiKey = '-OJdg0SYrZJhb6DWDfcEz2P7X98AfCIyuC5qvxEBFi4';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//Check if all images are loaded

function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        isReady = true;
        count = 30;
        console.log('ready =', isReady)
    }

}

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {

    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log('totalImages =', totalImages);
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {

        console.log(photo)

        var linkUrl = photo.links.html;
        var imgSrc = photo.urls.regular;
        var usr = photo.user.name;

        var camModel = photo.exif.name;
        var camMake = photo.exif.model;


        /* If the image string for make/model = null then display unknown */

        if(camMake == null){
            camMake =` <div class="camera hide"> Unknown  </div>`
        } else {

            camModel =` <div class="camera"> Unknown </div>`

        }


        var imgAlt = photo.alt_description
        // Create <a> to link to full photo
        const item = document.createElement('a');
        setAttributes(item, {
            href: linkUrl,
            target: '_blank',
        });
        

        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: imgSrc,
            alt: imgAlt,

        });

        const container = document.createElement('div');

        var nameTag = `<div class="photographer">${usr}</div>`


        let htmlBlock = `
        <div class="photoCard"> 
        <a href="${linkUrl}" target="_blank">
          <img  src="${imgSrc}" alt="${imgAlt}">
        </a>
        <div class="photographer"> Captured by: ${usr}</div>
        <div class="captured"> Captured with: ${camMake}</div>

      </div>
    `

        img.addEventListener('load', imageLoaded)
        $(imageContainer).append(htmlBlock)

    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);  //change (apiUrl) for category page to have images render after a category is selected
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error Here
    }
}



//Check if scrolling is happening at the bottom

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && isReady) {
        isReady = false;
        getPhotos();
    }
});


// On Load
getPhotos();