import React from 'react';
import './circle.css'

function ProgressCircle() {

  return (
      <div className='container'>
         <div className='progress_circle'>
                <div className='outer_circle'>
                  <div className='inner_circle'>
                      <h3 id='number'>25%</h3>
                  </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <circle cx="45" cy="45" r="38" stroke-linecap="round" />
 </svg>
        </div>

     </div>
  )
}

export default ProgressCircle