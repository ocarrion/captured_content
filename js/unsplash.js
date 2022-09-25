const imageContainer = document.getElementById('image-container');
const imageParentContainer = document.getElementById('image-parent-container');


let isReady = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];


// Unsplash API
let count = 10;
const apiKey = 'fyjG6ju9FL12nBLo0tntSbufZe-bPZtt9r0vN8Phh6Y';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//Check if all images are loaded

function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        isReady = true;
        loader.hidden = true;
        count = 10;
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

        img.addEventListener('load', imageLoaded)

        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
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