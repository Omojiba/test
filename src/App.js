
import ProgressCircle from './components/progress_circle';
import './test.css';
import facebook from './components/Assets/facebook.png';
import twitter from './components/Assets/twitter.png';


function App() {
  return (
    <div className="App">
       <section className='left'></section>

         <section className='middle'>
            <h2>May 2022 Performance</h2>

               <div className='middle_grid_one'>

                   <div className='box views_box'>
                      <h2>VIEWS</h2>
                      <h3>7,124,568</h3>
                   </div>

                   <div className=' box follows_box'>
                      <h2>FOLLOWS</h2>
                      <h3>91,344</h3>
                   </div>

                  <div className='box likes_box'>
                     <h2>LIKES</h2>
                     <h3>654,931</h3>
                  </div>
               </div>

          <h2>Statistics</h2>
          <div className='weekly_target_gridbox'>

            <div className='target weekly_target_one'>
              <div className='target_textbox'>
                <h2>Weekly Target</h2>
                <h3>25% Achieved</h3>
              </div>
              <ProgressCircle/>
            </div>
            <div className='target weekly_target_two'></div>
          </div>

          <h2>Monthly Tasks</h2>
          <div className='tasks_container'>

            <div className='task_flexbox'>
              <img src={facebook} alt='facebook_icon'/>
              <div className='task_description'>
                <h2>Facebook Ads</h2>
                <p>Gain atleast 50 visits through facebook ads</p>
              </div>
            </div>

            <div className='task_flexbox'>
              <img src={facebook} alt='facebook_icon'/>
              <div className='task_description'>
                <h2>Facebook Ads</h2>
                <p>Gain atleast 50 visits through facebook ads</p>
              </div>
            </div>

            <div className='task_flexbox'>
              <img src={facebook} alt='facebook_icon'/>
              <div className='task_description'>
                <h2>Facebook Ads</h2>
                <p>Gain atleast 50 visits through facebook ads</p>
              </div>
            </div>

            <div className='task_flexbox'>
              <img src={facebook} alt='facebook_icon'/>
              <div className='task_description'>
                <h2>Facebook Ads</h2>
                <p>Gain atleast 50 visits through facebook ads</p>
              </div>
            </div>
          </div>


        </section>
        <section className='right'></section>

  
    </div>
  );
}

export default App;
