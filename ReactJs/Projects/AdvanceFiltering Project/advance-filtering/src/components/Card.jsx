import { BsFillBagHeartFill } from "react-icons/bs";

const card = ({ img, title, star, reviews, prePrice, newPrice}) => {
  return (
    <section className="card">
      <img 
      src={img}
      alt={title}
      className="card-img" />
      <div className="card-details">
      <h3 className="card-title">{title}</h3>
      <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prePrice}</del> {newPrice}
          </div>

          <div className="bag">
            <BsFillBagHeartFill className="bag-icon"/>
          </div>
          </section>
      </div>
    </section>
  )
}



export default card;