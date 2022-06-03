
import ProgressCircle from './components/progress_circle';
import './test.css';
import facebook from './components/Assets/facebook.png';
import twitter from './components/Assets/twitter.png';
import logo from './components/Assets/orange_logo.png';
import calendar from './components/Assets/calendar_icon.png';
import clock from './components/Assets/clock.png';
import dashboard from './components/Assets/dashboard_icon.png';
import settings from './components/Assets/settings_icon.png';
import drafts from './components/Assets/drafts.png';
import plus from './components/Assets/plus_icon.png';
import published from './components/Assets/published_icon.png';
import bell from './components/Assets/bell.png';
import profile from './components/Assets/profile_picture.png';
import ProgressCircleTwo from './components/progress_circle_two';
import logout from './components/Assets/logout.png';


function App() {
  return (
    <div className="App">

                                  {/* Left Section */}
       <section className='left'>

         <div className='logo_flexbox'>
           <img src={logo} alt='logo'/>

           <div className='logo_text'>
             <h2>OrangeWhale</h2>
             <p>Growth & Marketing</p>
           </div>
         </div>

         <div className='leftside_first_container'>

           <div className='icon_flexbox' id='dashboard'>
             <img src={dashboard} alt='icon'/>
             <h2>Dashboard</h2>
           </div>

           <div className='icon_flexbox'>
             <img src={calendar} alt='icon'/>
             <p>Activity</p>
           </div>

           <div className='icon_flexbox' id='settings'>
             <img src={settings} alt='icon'/>
             <p>Settings</p>
           </div>

           
         </div>

         <div className='posts'>
             <h1>Posts</h1>
             <img src={plus} alt='icon' />
           </div>

           <div className='leftside_second_container'>
                <div className='icon_flexbox_two' id='published'>
                  <img src={published} alt='icon'/>
                  <p>Published</p>
                </div>

                <div className='icon_flexbox_two' id='settings'>
                  <img src={clock} alt='icon'/>
                  <p>Today's Scheduled</p>
                </div>

                 <div className='icon_flexbox' id='settings'>
                  <img src={drafts} alt='icon'/>
                  <p>Drafts</p>
                 </div>
           </div>
       </section>

                                  {/*  Middle Section  */}
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
            <div className='target weekly_target_two'>
            <div className='target_textbox'>
                <h2>Weekly Target</h2>
                <h3>25% Achieved</h3>
              </div>
              <ProgressCircleTwo/>
            </div>
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
              <img src={twitter} alt='facebook_icon'/>
              <div className='task_description'>
                <h2>Twitter</h2>
                <p>Gain atleast 12,500 views on SET posts</p>
              </div>
            </div>

            <div className='task_flexbox'>
              <img src={facebook} alt='facebook_icon'/>
              <div className='task_description'>
                <h2>Facebook Ads</h2>
                <p>Promote the SET even on facebook with 5 posts</p>
              </div>
            </div>

            <div className='task_flexbox'>
              <img src={facebook} alt='facebook_icon'/>
              <div className='task_description'>
                <h2>Facebook Ads</h2>
                <p>Promote even photos taken by Michael Scott (Photographer)</p>
              </div>
            </div>
          </div>


        </section>

                                   {/* Right Section */}
        <section className='right'>
          <div className='username_flexbox'>
            <div className='username'>
              <h1>Hi John</h1>
              <h2>Good Morning!</h2>
            </div>
           
           <img src={bell} alt='icon'/>
          </div>

          <div className='picture_flexbox'>
            <img src={profile} alt='profile_picture'/>
            <h1>Marketing Manager @ orangewhale</h1>
          </div>

          <div className='account_flexbox'>
            <div className='metric_item'>
              <h1>736k</h1>
              <h2>Followers</h2>
            </div>

            <div className='metric_item'>
              <h1>76k</h1>
              <h2>Following</h2>
            </div>

            <div className='metric_item'>
              <h1>432</h1>
              <h2>Posts</h2>
            </div>
          </div>

          <div className='logout_flexbox'>
         <img src={logout} alt='logout'/>
         <h1>Log out of account</h1>
       </div>
    

        </section>

        </div>
  );
}

export default App;
