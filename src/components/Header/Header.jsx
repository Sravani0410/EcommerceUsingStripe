import React, { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";

const Header = () => {
  const [scroll,setScroll]=useState(false)
 const [showcart,setShowCart]=useState(false)
 const [showsearch,setShowSearch]=useState(false)

  const handleScroll=()=>{
    const offset=window.scrollY;
    // console.log(offset);
    if(offset>200){
      setScroll(true)
    }
    else{
      setScroll(false)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
  },[])
  return (
    <>
       <header className={`main-header ${scroll?"sticky-header":""}`}>
      <div className="header-content">
        <ul className="left ">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">STORE</div>
        <div className="right">
          <TbSearch onClick={()=>setShowSearch(true)}/>
          <AiOutlineHeart />
          <span className="cart-icon" onClick={()=>setShowCart(true)}>
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
    {showcart&&<Cart setShowCart={setShowCart}/>}
    {showsearch&&<Search setShowSearch={setShowSearch}/>}
    </>
 
  );
};

export default Header;
