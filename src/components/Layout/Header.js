import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from "./Header.module.css";

const mealsImage = "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const Header = (props) => {
  return (
    <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="food"/>
    </div>
      
    </Fragment>
  )
}

export default Header
