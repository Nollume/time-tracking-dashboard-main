'use strict';
    
(async function() {
    try {
        let data = await get('./data.json');        
    
        console.log( data );

        let container = document.querySelector('.container'),
            links = document.querySelectorAll('.header-list a');

            links = Array.from(links);

          links.forEach(function(link){

              link.addEventListener('click', function(){

                 let href = this.getAttribute('href'),
                      value = href.slice(1);

                      return value;
              });


          });

          
        
        data.forEach(function(obj){

            let sectionContainer = document.createElement('div');

            sectionContainer.innerHTML = 
            `<aside class="color-svg">
            </aside>
            <section class="main-content">
              <div class="title-time">
                <h2>${obj.title}</h2>
                <h1>${obj.timeframes.weekly.current}hrs</h1>
              </div>
              <div class="inform">
                <a href="#"></a>
                <p>Last Week - ${obj.timeframes.weekly.previous}hrs</p>
              </div>
            </section>`;
                    
            sectionContainer.classList.add('wrapper');
            container.appendChild(sectionContainer);

        });

    }
    catch (err) {
        console.error('ERRORrrrrrrrrrrrr', err);
    }
}())


