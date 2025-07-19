// // import Carousel from 'react-bootstrap/Carousel';
// // import banner1 from "../../assets/img/banner1.jpg";
// // import banner2 from "../../assets/img/banner2.jpg";
// // import banner3 from "../../assets/img/banner3.jpg";

// // function Slider() {
// //   return (
// //     <Carousel slide={false}>
// //       <Carousel.Item>
// //         <img
// //           className="d-block w-100"
// //           src={banner1}
// //           alt="First slide"
// //         />
// //         <Carousel.Caption>
// //           <h3>First slide label</h3>
// //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// //         </Carousel.Caption>
// //       </Carousel.Item>

// //       <Carousel.Item>
// //         <img
// //           className="d-block w-100"
// //           src={banner2}
// //           alt="Second slide"
// //         />
// //         <Carousel.Caption>
// //           <h3>Second slide label</h3>
// //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //         </Carousel.Caption>
// //       </Carousel.Item>

// //       <Carousel.Item>
// //         <img
// //           className="d-block w-100"
// //           src={banner3}
// //           alt="Third slide"
// //         />
// //         <Carousel.Caption>
// //           <h3>Third slide label</h3>
// //           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
// //         </Carousel.Caption>
// //       </Carousel.Item>
// //     </Carousel>
// //   );
// // }

// // export default Slider;



// import Carousel from 'react-bootstrap/Carousel';
// import slider1 from "../../assets/img/slider1.jpg";
// import slider2 from "../../assets/img/slider2.jpg";

// import styles from './Slider.module.css'; // 👈 Import the CSS module

// function Slider() {
//   return (
//     <div className="m-0"> {/* Adds margin on all sides */}
//       <Carousel slide={false}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={slider1}
//             alt="First slide"
//           />


import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";

import styles from './Slider.module.css'; // Import CSS Module


function Slider() {
  return (
    <div className="m-0">
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption className={styles.leftCaption}>
            <h3>Great Quality Social Life</h3>
            <p>Discover the World of Possible University</p>
          
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
          <Carousel.Caption className={styles.leftCaption}>
            <h3>Great Quality Social Life</h3>
            <p>Discover the World of Possible University</p>
           
            
          </Carousel.Caption>

        </Carousel.Item>


      </Carousel>

   </div>
  );
}

export default Slider;


