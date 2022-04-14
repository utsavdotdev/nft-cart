import React,{useContext} from 'react';
import style from '../css/Navbar.module.css';
import {BiCart} from 'react-icons/bi';
import {mainContext} from '../App';
function Navbar() {
  const {cartItem} = useContext(mainContext);
  return (
      <div className={style.container}>
          <div className={style.left}>
           <a href=""><p className={style.logo}>U-Cart</p></a>
          </div>
          <div className={style.right}>
            <img src="/pic.jpg" alt="" className={style.profile} />
            <div className={style.cartBtn}>
              <span>{cartItem}</span>
                <BiCart className={style.btn}/>
            </div>
          </div>
      </div>
  )
}

export default Navbar