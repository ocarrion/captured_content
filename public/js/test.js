$(function(){
;

    $('#submitForm').on('click', function (e){
        e.preventDefault();

        const apiKey = '-OJdg0SYrZJhb6DWDfcEz2P7X98AfCIyuC5qvxEBFi4';
    
        var selectedOption = $( "#select-category option:selected" ).val();
        console.log(selectedOption);
        
        let count = 30;
    
        const url = `https://api.unsplash.com/search/photos/?query=${selectedOption}&client_id=${apiKey}&per_page=${count}`
    
        $('#image-container').empty();
    
        $.ajax({
          method: 'GET',
          url: url,
          success: function(data){
            data.results.forEach(photo => {
                // console.log(url)
    
            let pictureUrl = photo.urls.regular;
    
            // console.log(pictureUrl)
    
    
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
})