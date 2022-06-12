import React , {useContext} from 'react';
//styles
import styles from './cart.module.css';
//context
import {CartContext} from '../../context/CartContextProvider';
//function
import {shorten} from '../helper/functions';
//icons
import trashIcon from '../../icon/trash-svgrepo-com.svg'
const Cart = (props) => {
    const {dispatch}=useContext(CartContext);
    const {image , title , price , quantity}= props.data;
    return (
        <div className={styles.container}>
            <img src={image} alt="Product"/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>$ {price}</p>
            </div>
            <div className={styles.quantity}>
                <span>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity>1 ?
                    <button onClick={() => dispatch({type:"DECREASE" ,payload:props.data})}>-</button> :
                    <button onClick={() => dispatch({type:"REMOVE-ITEM" ,payload:props.data})}><img src={trashIcon} alt="icon" /></button>
                }
                <button onClick={() => dispatch({type:"INCREASE" , payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;