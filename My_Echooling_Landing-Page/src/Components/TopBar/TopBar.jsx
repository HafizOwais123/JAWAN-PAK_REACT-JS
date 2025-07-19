// // const TopBar = () => {
// //   return (
// //     <div className="bg-dark text-white p-2 text-end pe-5">
// //       <small>Login | Signup | Help | Cart</small>
// //     </div>
// //   );
// // };

// // export default TopBar;


// import React from 'react';
// import styles from './TopBar.module.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// const TopBar = () => {
//   return (
    
//     // <div className={styles.topBar}>
//     //   <div className={styles.logo}> (+1) 3344 999 999 
//     //     <div> info@reactheme.com</div> </div>

//       <div className={styles.socialIcons}>
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faFacebookF} />
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faTwitter} />
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faLinkedinIn} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default TopBar;



import React from 'react';
import styles from './TopBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.leftSection}>
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <span>(+1) 3344 999 999</span>
        </div>
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <span>info@reactheme.com</span>
        </div>
      </div>

      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
