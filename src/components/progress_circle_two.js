import React from 'react';
import './circle_two.css';

function ProgressCircleTwo() {

  return (
      <div className='container'>
         <div className='progress_circle'>
                <div className='outer_circle_two'>
                  <div className='inner_circle_two'>
                      <h3 id='number_two'>25%</h3>
                  </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <circle className='circle' cx="45" cy="45" r="38" stroke-linecap="round" />
 </svg>
        </div>

     </div>
  )
}

export default ProgressCircleTwo