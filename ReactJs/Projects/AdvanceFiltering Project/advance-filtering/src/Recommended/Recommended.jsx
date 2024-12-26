import Button from "../components/Button";
import "./Recommended.css";
const Recommended = ({ handleClick}) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products"/>
          <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
          <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
          <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
        </div>
      </div>
    </>
  )
}


// export default function Recommended() {
//   return (
//     <div>
//       <h2 className="recommended-title">Recommended</h2>
//       <div className="recommended-flex">
//         <button className="btns">All Products</button>
//         <button className="btns">Nike</button>
//         <button className="btns">Adidas</button>
//         <button className="btns">Puma</button>
//         <button className="btns">Vans</button>
//       </div>
//     </div>
//   )
// }

export default Recommended;
