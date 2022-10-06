
$(function(){
    $('#submitForm').on('click', function (e){
        e.preventDefault();
    
        var selectedOption = $( "#select-category option:selected" ).text();
        console.log(selectedOption);
        
        let count = 30;
        
        const apiKey = '-OJdg0SYrZJhb6DWDfcEz2P7X98AfCIyuC5qvxEBFi4';
    
        const url = `https://api.unsplash.com/search/photos/?query=${selectedOption}&client_id=${apiKey}&per_page=${count}`
    
        $('#image-container').empty();
    
        $.ajax({
          method: 'GET',
          url: url,
          success: function(data){
            data.results.forEach(photo => {
                console.log(url)
    
            let pictureUrl = photo.urls.regular;
    
            console.log(pictureUrl)
    
    
             let pictureLink = photo.links.html;
    
    
            const item = document.createElement('a');
                    setAttributes(item, {
                        href: photo.links.html,
                        target: '_blank',
                
              });

              $('#results').append(`<div class="image-container" id="image-container"></div>`)
    
    
    
            const img = document.createElement('img');
              setAttributes(img, {
                  src: pictureUrl,
              });
    
            item.appendChild(img);
            imageContainer.appendChild(item);
    
    
            });


          }
        })
    
    })
    

const imageContainer = document.getElementById('image-container');


// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}


        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });


// Get photos from Unsplash API
//changed (apiUrl) to render images after a category is selected as discussed in unsplash.js 
async function getPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos/?query=${selectedOption}&client_id=${apiKey}&count=${count}`);
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

