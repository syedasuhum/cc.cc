// import React from 'react'
// import "../Assets/css/Footer.css"

// const Footer = () => {
//   return (
//     <>
//       <footer id="footer">
//         <div class="container">
//             <div class="row">
    
//               <div class="col-md-3">
//                 <div class="useful-link">
//                     <h2>Useful Links</h2>
//                 <div class="use-links">
//                     <li><a href="index.html"><i class="fa-solid fa-angles-right"></i> Home</a></li>
//                     <li><a href="about.html"><i class="fa-solid fa-angles-right"></i> About Us</a></li>
//                     <li><a href="gallery.html"><i class="fa-solid fa-angles-right"></i> Gallery</a></li>
//                     <li><a href="contact.html"><i class="fa-solid fa-angles-right"></i> Contact</a></li>
//                 </div>
//                 </div>

//              </div>
//                 <div class="col-md-3">
//                     <div class="social-links">
//                     <h2>Follow Us</h2>
//                      {/* <img src="./assets/images/about/home_line.png" alt=""> */}
//                   <div class="social-icons">
//                     <li><a href=""><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
//                     <li><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></li>
//                     <li><a href=""><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
//                   </div>
//                 </div>
//              </div>

//              <div class="col-md-3">
//                 <div class="address">
//                 <h2>Address</h2>
//                  {/* <img src="./assets/images/about/home_line.png" alt="" class="img-fluid"> */}
//               <div class="address-links">
//                 <li class="address1"><i class="fa-solid fa-location-dot"></i> Kolathur ramankulam- Malappuram Dt Kerala 679338</li>
//                 <li><a href=""><i class="fa-solid fa-phone"></i> +91 90904500112</a></li>
//                 <li><a href=""><i class="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
//               </div>
//             </div>
//          </div>
              
//         </div>
//      </div>

// </footer>

//     </>
//   )
// }

// export default Footer



// src/Footer.js
import React from 'react';
import "../Assets/css/css/Footer.css" // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
         <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="/">Demo Store United States</a></li>
          <li><a href="/">0123-456-789</a></li>
          <li><a href="/">demo@demo.com</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Products</h4>
        <ul>
          <li><a href="/">Featured Product</a></li>
          <li><a href="/">BestSeller</a></li>
          <li><a href="/">Latest Products</a></li>
          <li><a href="/">Featured Product</a></li>
          <li><a href='/'>Special Product</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Services</h4>
        <ul>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">Information</a></li>
          <li><a href="/">Privacy & Policy</a></li>
          <li><a href="/">Terms & Conditions</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
