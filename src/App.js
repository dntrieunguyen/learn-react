import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import './App.css';
function App() {
   // Cau 2
   function binarySearch(arr, x) {
      let low = 0;
      let high = arr.length - 1;
      let mid;
      while (high >= low) {
         mid = low + Math.floor((high - low) / 2);

         if (arr[mid] == x) return mid;

         if (arr[mid] > x) high = mid - 1;
         else low = mid + 1;
      }

      return -1;
   }
   console.log('Cau 2');
   console.log(binarySearch([1, 2, 3, 12, 14, 16], 5));
   console.log(binarySearch([1, 2, 3, 6, 9, 11], 6));

   // Cau 3
   function cycle(...values) {
      let index = 0;
      return function () {
         const value = values[index];
         index = (index + 1) % values.length;
         return value;
      };
   }

   const onOffFn = cycle('on', 'off');
   console.log('Cau 3');
   console.log(onOffFn()); // "on"
   console.log(onOffFn()); // "off"
   console.log(onOffFn()); // "on"

   return (
      <div className="App">
         <header>
            <div className="brand">
               <img
                  src={require('./assets/logo.png')}
                  alt=""
                  style={{
                     height: 50,
                  }}
               />
            </div>

            <div className="header-left">
               <ul>
                  <li className="isActive">Top</li>
                  <li>How it works?</li>
                  <li>Features</li>
                  <li>About Us</li>
                  <li>Login</li>
               </ul>
            </div>
         </header>
         <div className="container">
            <section className="form-container">
               <div className="form-title">
                  <div className="title">
                     <img src={require('./assets/logo.png')} alt="" />
                     <div
                        className="sub-title"
                        style={{
                           display: 'flex',
                           width: '100%',
                           justifyContent: 'flex-end',
                        }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              flexDirection: 'column',
                           }}
                        >
                           <span>welcome back!</span>
                           <span>Please login/Signup to your account</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="form-group">
                  <form action="">
                     <div className="form-items">
                        <label htmlFor="email">
                           <span className="required">*</span> Email
                        </label>
                        <input type="email" name="email" />
                     </div>

                     <div className="form-items">
                        <label htmlFor="password">
                           <span className="required">*</span>
                           Password
                        </label>
                        <div className="password-input">
                           <input type="password" name="password" />
                           <span className="icon-display-password">
                              <FontAwesomeIcon icon={faEyeSlash} />
                           </span>
                        </div>
                     </div>

                     <div className="action">
                        <input type="checkbox" />
                        Remember me
                        <button
                           style={{
                              backgroundColor: 'transparent',
                              color: 'orange',
                              outline: 'none',
                              border: 'none',
                              padding: 0,
                           }}
                        >
                           forgot password?
                        </button>
                     </div>

                     <button
                        style={{
                           width: '100%',
                           height: '40px',
                           backgroundColor: 'orange',
                           textAlign: 'left',
                           outline: 'none',
                           border: 'none',
                           padding: '10px',
                           color: 'white',
                           margin: '30px 0',
                        }}
                     >
                        Login
                     </button>
                  </form>
                  <span
                     style={{
                        color: 'orange',
                     }}
                  >
                     Register now
                  </span>
               </div>
            </section>

            <div className="logo">
               <img src={require('./assets/banner_login.png')} alt="" />
            </div>
         </div>
      </div>
   );
}

export default App;
