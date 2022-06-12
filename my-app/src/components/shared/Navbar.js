import React , {useContext} from 'react';
import {Link} from 'react-router-dom';
//context
import {CartContext} from '../../context/CartContextProvider';
//icon
import cartIcon from '../../icon/cart-svgrepo-com.svg';
//style
import styles from './Navbar.module.css';
const Navbar = () => {
    const {state} = useContext(CartContext);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                    <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={cartIcon} alt="icon" style={{width:"40px" , height:"40px"}}/></Link>
                    <span>{state.itemCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;