'use strict';
    
(async function() {
    try {
        let data = await get('./data.json');        
    
        console.log( data );

      const container = document.querySelector('.container');
        let  daily = document.getElementById('daily'),
            weekly = document.getElementById('weekly'),
            monthly = document.getElementById('monthly'),
            li = document.querySelectorAll('.header-list li');
            
            li = Array.from(li);
            


    //   ****************************************************************         
    //     ADD ELEMENTS 
    // ****************************************************************  

      data.forEach((obj) => {

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
        
          let headLines = document.querySelectorAll('.title-time h1'),
              paragraphs = document.querySelectorAll('.inform p');
            
                headLines = Array.from(headLines);
                paragraphs = Array.from(paragraphs);

          let [one,two,three,four,five,six] = headLines;
          let [paragraphsOne,paragraphsTwo,paragraphsThree,paragraphsFour,paragraphsFive,paragraphsSix] = paragraphs;

        daily.addEventListener('click', function(event) {

          event.preventDefault();

              one.textContent = `${data[0].timeframes.daily.current}hrs`;
              two.textContent = `${data[1].timeframes.daily.current}hrs`;
              three.textContent = `${data[2].timeframes.daily.current}hrs`;
              four.textContent = `${data[3].timeframes.daily.current}hrs`;
              five.textContent = `${data[4].timeframes.daily.current}hrs`;
              six.textContent = `${data[5].timeframes.daily.current}hrs`;

              paragraphsOne.textContent = `Last Week - ${data[0].timeframes.daily.previous}hrs`;
              paragraphsTwo.textContent = `Last Week - ${data[1].timeframes.daily.previous}hrs`;
              paragraphsThree.textContent = `Last Week - ${data[2].timeframes.daily.previous}hrs`;
              paragraphsFour.textContent = `Last Week - ${data[3].timeframes.daily.previous}hrs`;
              paragraphsFive.textContent = `Last Week - ${data[4].timeframes.daily.previous}hrs`;
              paragraphsSix.textContent = `Last Week - ${data[5].timeframes.daily.previous}hrs`;
          
            

        }) ;
        weekly.addEventListener('click', function(event) {

          event.preventDefault();

              one.textContent = `${data[0].timeframes.weekly.current}hrs`;
              two.textContent = `${data[1].timeframes.weekly.current}hrs`;
              three.textContent = `${data[2].timeframes.weekly.current}hrs`;
              four.textContent = `${data[3].timeframes.weekly.current}hrs`;
              five.textContent = `${data[4].timeframes.weekly.current}hrs`;
              six.textContent = `${data[5].timeframes.weekly.current}hrs`;

              paragraphsOne.textContent = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
              paragraphsTwo.textContent = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
              paragraphsThree.textContent = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
              paragraphsFour.textContent = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
              paragraphsFive.textContent = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
              paragraphsSix.textContent = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
            

        }) ;
        monthly.addEventListener('click', function(event) {

          event.preventDefault();

              one.textContent = `${data[0].timeframes.monthly.current}hrs`;
              two.textContent = `${data[1].timeframes.monthly.current}hrs`;
              three.textContent = `${data[2].timeframes.monthly.current}hrs`;
              four.textContent = `${data[3].timeframes.monthly.current}hrs`;
              five.textContent = `${data[4].timeframes.monthly.current}hrs`;
              six.textContent = `${data[5].timeframes.monthly.current}hrs`;

              paragraphsOne.textContent = `Last Week - ${data[0].timeframes.monthly.previous}hrs`;
              paragraphsTwo.textContent = `Last Week - ${data[1].timeframes.monthly.previous}hrs`;
              paragraphsThree.textContent = `Last Week - ${data[2].timeframes.monthly.previous}hrs`;
              paragraphsFour.textContent = `Last Week - ${data[3].timeframes.monthly.previous}hrs`;
              paragraphsFive.textContent = `Last Week - ${data[4].timeframes.monthly.previous}hrs`;
              paragraphsSix.textContent = `Last Week - ${data[5].timeframes.monthly.previous}hrs`;
            

        }) ;
        

      // ***************************
      //          CLASS TOGGLE
      // ********************************

        for (let i = 0; i < li.length; i++) {
          li[i].onclick = () => {
            var j = 0;
            while (j < li.length) {
              li[j++].className = '';
            }
            li[i].className = 'active';
          };
        }
          

    }
    catch (err) {
        console.error('ERROR', err);
    }
}())


