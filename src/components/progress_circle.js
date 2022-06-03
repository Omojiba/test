import React from 'react';
import './circle.css'

function ProgressCircle() {

    let number = document.getElementById('number');
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
                <div className='outer_circle'>
                  <div className='inner_circle'>
                      <h3 id='number'>{Number}</h3>
                  </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <circle cx="45" cy="45" r="38" stroke-linecap="round" />
 </svg>
        </div>

        <script>
            
        </script>
     </div>
  )
}

export default ProgressCircle