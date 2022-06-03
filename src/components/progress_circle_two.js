import React from 'react';
import './circle_two.css';

function ProgressCircleTwo() {

    let number = document.getElementById('number_two');
    let counter = 0;
    setInterval(() => {

        if(counter == 25){clearInterval();
        }
        else{
        counter += 1;
        number.innerHTML = counter + '%';}

    },50);
  return (
      <div className='container'>
         <div className='progress_circle'>
                <div className='outer_circle_two'>
                  <div className='inner_circle_two'>
                      <h3 id='number_two'></h3>
                  </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <circle className='circle' cx="45" cy="45" r="38" stroke-linecap="round" />
 </svg>
        </div>

        <script>
            
        </script>
     </div>
  )
}

export default ProgressCircleTwo