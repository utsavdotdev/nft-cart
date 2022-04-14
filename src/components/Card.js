import React,{useContext} from "react";
import style from "../css/Card.module.css";
import {mainContext} from '../App';

function Card() {
  const {add} = useContext(mainContext);
  const Cards = (props) => {
    return (
      <div className={style.card}>
        <img src={props.img} alt="" className={style.cardImg} />
        <div className={style.disWrapper}>
          <span className={style.imgTitle}>Savage Monkey</span>
          <span className={style.price}>$99.99</span>
          <button className={style.btn} onClick={() => add()}>Add to cart</button>
        </div>
      </div>
    );
  };
  return (
    <div className={style.wrapper}>
      <Cards img="/nft.png" />
      <Cards img="/nft2.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft2.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft2.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft2.png" />
      <Cards img="/nft.png" />
      <Cards img="/nft.png" />
    </div>
  );
}

export default Card;
