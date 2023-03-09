import React from "react";
import { useSelector } from "react-redux";
import "./cart.css"
import { Link } from "react-router-dom";



function Header({ itemCount }) {
  return (
    <header className="container">
      <h1>Shopping Cart</h1>

      <ul className="breadcrumb">
        <li>
          <Link to={'/'}>Home</Link>
          </li>
        <li>Shopping Cart</li>
      </ul>

      <span className="count">{itemCount} items in the bag</span>
    </header>
  );
}

//truncate the descriptiom
const displayDesc = (str)=>{
  // capital the first char of the string
  str = str.charAt(0).toUpperCase() + str.slice(1);
  if(str.length > 200){
    return str.substring(100) + "...";
  }
  else
    return str
}

function ProductList({  onChangeProductQuantity, onRemoveProduct }) {
  const products = useSelector((state)=> state.handleCart)
  console.log(products);
  return (

    <section className="container">
      <ul className="products">
        {products.map((product, index) => {
          return (
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="detail">
                  <div className="name">
                    {product.title}
                  </div>
                  <div className="description">{displayDesc(product.description)}</div>
                  <div className="price">{formatCurrency(product.price * 80)}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                <label htmlFor="Quantity">Quantity </label>

                  <input name="Quantity"
                    id="Quantity"
                    type="text"
                    className="quantity"
                    step="1"
                    // value={product.quantity}
                    onChange={(event) => onChangeProductQuantity(index, event)}
                  />
                </div>

                <span className="remove">
                  <svg
                    onClick={() => onRemoveProduct(index)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Summary({
  subTotal,
  discount,
  tax,
  onEnterPromoCode,
  checkPromoCode
}) {
  
  const total = subTotal - discount + tax;

  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" onChange={onEnterPromoCode} />
        <button type="button" onClick={checkPromoCode} />
      </div>

      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span>{formatCurrency(discount)}</span>
            </li>
          )}
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}

const PROMOTIONS = [
  {
    code: "SUMMER",
    discount: "50%"
  },
  {
    code: "AUTUMN",
    discount: "40%"
  },
  {
    code: "WINTER",
    discount: "30%"
  }
];
const TAX = 5;

function Cart() {
  const PRODUCTS = useSelector((state)=> state.handleCart)
  const CLONE_PRODUCTS = JSON.parse(JSON.stringify(PRODUCTS));
  const [products, setProducts] = React.useState(CLONE_PRODUCTS);
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);

  const itemCount = products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);
  const subTotal = products.reduce((total, product) => {
    
    return total + product.price*80 * +product.quantity;
  }, 0);

  const discount = (subTotal * discountPercent) / 100;

  const onChangeProductQuantity = (index, event) => {
    console.log(index);
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...products];

    // Minimum quantity is 1, maximum quantity is 1000, can left blank to input easily
    if (value === "") {
      cloneProducts[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 1000) {

      cloneProducts[index].quantity = valueInt;
    }
    setProducts(cloneProducts);
  };

  const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => {
      return index !== i;
    });

    setProducts(filteredProduct);
  };

  const onEnterPromoCode = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    for (var i = 0; i < PROMOTIONS.length; i++) {
      if (promoCode === PROMOTIONS[i].code) {
        setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));

        return;
      }
    }

    alert("Sorry, the Promotional code you entered is not valid!");
  };

  return (
    <div className="cart">
      <Header itemCount={itemCount} />

      {products.length > 0 ? (
        <div>
          <ProductList
            products={products}
            onChangeProductQuantity={onChangeProductQuantity}
            onRemoveProduct={onRemoveProduct}
          />

          <Summary
            subTotal={subTotal}
            discount={discount}
            tax={TAX}
            onEnterPromoCode={onEnterPromoCode}
            checkPromoCode={checkPromoCode}
          />
        </div>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <Link to = "/">
          <button onClick={() => setProducts(PRODUCTS)}>Shopping now</button>

          </Link>
        </div>
      )}
    </div>
  );
}

// ReactDOM.render(<Page />, document.getElementById("root"));

function formatCurrency(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "INR"
  });
}

export default Cart