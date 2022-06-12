import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
//styles
import styles from './Product.module.css'
//functions
import { shorten , isInCart , quantityCount } from '../helper/functions';
//context
import {CartContext} from '../../context/CartContextProvider';
//icon
import trashIcon from '../../icon/trash-svgrepo-com.svg'
const Product = ({productData}) => {
    const {state, dispatch}=useContext(CartContext);
    return (
        <div className={styles.container}>
            <img src={productData.image} alt="Products" className={styles.cardImage}/>
            <h3>{shorten(productData.title)}</h3>
            <p>${productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state , productData.id) === 1 && <button className={styles.smallButton} onClick={()=> dispatch({type:"REMOVE-ITEM" , payload:productData})}><img src={trashIcon} alt="icon" /></button>}
                    {quantityCount(state , productData.id) >1 && <button className={styles.smallButton} onClick={()=> dispatch({type:"DECREASE" , payload:productData})}>-</button>}
                    {quantityCount(state , productData.id) >0 && <span className={styles.counter}>{quantityCount(state , productData.id)}</span>}
                    {
                        isInCart(state , productData.id) ?
                        <button className={styles.smallButton} onClick={()=> dispatch({type:"INCREASE" , payload:productData})}>+</button> :
                        <button onClick={() => dispatch({type:"ADD-ITEM" , payload:productData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;