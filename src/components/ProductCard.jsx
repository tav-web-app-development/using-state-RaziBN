import { useState } from "react";
export default function ProductCard({ product }) {
  let [currentImageIndex, setCurrentImageIndex] = useState(0);
  let [showdetail, setShowDetail] = useState(false);
  let [addedToCart, setAddedToCart] = useState(0);
  //let itemsInCart = 0;
  const handleAddToCartClick = () => {
    setAddedToCart(addedToCart + 1);
    alert(`you added ${addedToCart} items to your cart`);
  };
  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <br />
        <button
          onClick={() => {
            setCurrentImageIndex((currentImageIndex += 1));
          }}
          disabled={currentImageIndex === product.imageUrls.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => {
            setCurrentImageIndex((currentImageIndex -= 1));
          }}
          disabled={currentImageIndex === 0}
        >
          Previous
        </button>
      </div>

      <h3>{product.name}</h3>
      <p>{showdetail ? product.description : ""}</p>
      <button
        onClick={() => {
          setShowDetail(!showdetail);
        }}
      >
        {showdetail ? "Hide Description" : "Show Description"}
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>
      <span>{addedToCart}</span>
      <br />
      {!product.isInStock && "The product is out of stock"}
      <br />
    </>
  );
}
