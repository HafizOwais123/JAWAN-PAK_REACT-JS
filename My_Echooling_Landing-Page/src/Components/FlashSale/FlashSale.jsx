// const products = [
//   { title: 'Smartphone XYZ', price: '15,999', img: 'src/assets/img/mobile.jpg' },
//   { title: 'Wireless Earbuds', price: '2,499', img: 'src/assets/img/airpods.jpg' },
//   { title: 'Smartwatch Pro', price: '3,999', img: 'src/assets/img/watch.jpg' },
//   { title: 'Bluetooth Speaker', price: '1,999', img: 'src/assets/img/speaker.jpg' },
//   { title: 'Gaming Mouse', price: '1,299', img: 'src/assets/img/mouse.jpg' },
//   { title: 'Laptop Bag', price: '2,799', img: 'src/assets/img/laptopBag.jpg' },
//   { title: 'Power Bank', price: '999', img: 'src/assets/img/charger.jpg' },
//   { title: 'Fitness Band', price: '1,599', img: 'src/assets/img/fitnessBand.jpg' },
// ];


// const FlashSale = () => {
//   return (
//     <div className="container my-4">
//       <h3 className="mb-3">Flash Sale</h3>
//       <div className="row row-cols-2 row-cols-md-5 g-3">
//         {products.map((p, i) => (
//           <div className="col" key={i}>
//             <div className="card h-100">
//               <img src={p.img} className="card-img-top" alt={p.title} />
//               <div className="card-body p-2">
//                 <p className="card-text small">{p.title}</p>
//                 <strong className="text-danger">Rs. {p.price}</strong>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FlashSale;



const products = [
  { title: 'Smartphone XYZ', price: '15,999', img: 'src/assets/img/mobile.jpg' },
  { title: 'Wireless Earbuds', price: '2,499', img: 'src/assets/img/airpods.jpg' },
  { title: 'Smartwatch Pro', price: '3,999', img: 'src/assets/img/watch.jpg' },
  { title: 'Bluetooth Speaker', price: '1,999', img: 'src/assets/img/speaker.jpg' },
  { title: 'Gaming Mouse', price: '1,299', img: 'src/assets/img/mouse.jpg' },
  { title: 'Laptop Bag', price: '2,799', img: 'src/assets/img/laptopBag.jpg' },
  { title: 'Power Bank', price: '999', img: 'src/assets/img/charger.jpg' },
  { title: 'Fitness Band', price: '1,599', img: 'src/assets/img/fitnessBand.jpg' },
];

const FlashSale = () => {
  return (
    <div className="container my-4">
      <h3 className="mb-3">Flash Sale</h3>
      <div className="row row-cols-2 row-cols-md-5 g-3">
        {products.map((p, i) => (
          <div className="col" key={i}>
            <div className="card h-100">
              <img src={p.img} className="card-img-top" alt={p.title} />
              <div className="card-body p-2 d-flex flex-column justify-content-between">
                <div>
                  <p className="card-text small mb-1">{p.title}</p>
                  <strong className="text-danger">Rs. {p.price}</strong>
                </div>
                <button className="btn btn-sm btn-info mt-2">Add to Cart</button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;

