// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import img from "../../assets/pics/mobile.jpg";

// function Cards() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={img} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
       
//       </Card.Body>
//     </Card>
//   );
// }

// export default Cards;


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../../assets/img/pic111.png";
import styles from './Cards.module.css'; // import CSS module

function Cards() {
  return (
    <div className={styles.cardContainer}>
      {[1, 2, 3, 4].map((item, index) => (
        <Card className={styles.cardItem} key={index}>
          <Card.Img variant="top" src={img} className={styles.cardImage} />
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
             <strong className={styles.strongText}>This is strong text.</strong>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
