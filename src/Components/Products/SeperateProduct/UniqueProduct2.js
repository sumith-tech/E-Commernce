import Header from "../../ContactUs/Components/Header";

const UniqueProduct2 = () => {
  const product = {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity:1,
  };
  return (
    <>
      <Header />
      <div>
        <h3>{product.title}</h3>
        <div>
          <figure>
            <img src={product.imageUrl} style={{ paddingLeft: "32em" }}></img>
          </figure>
        </div>
        <span>{`$${product.price}`}</span>
        <p style={{fontFamily:'sans-serif',fontWeight:'bolder',textAlign:'center',padding:'3em'}}>
          They are high-quality and worth the money. The store also offered free
          shipping at that price so that's a plus!” “I recently purchased a
          [product] from [Store Name], and I couldn't be happier with my online
          shopping experience. Their website was user-friendly, making it easy
          to find the perfect item
        </p>
      </div>
    </>
  );
};
export default UniqueProduct2;
