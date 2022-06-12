import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
//styles
import styles from './productDetail.module.css';
//context
import {ProductsContext} from '../context/ProductsContextProvider';
const ProductsDetail = (props) => {
    const id=props.match.params.id;
    const data=useContext(ProductsContext);
    const product=data[id-1];
    const {image,title,description,category,price}=product;
    return (
        <div className={styles.container}>
            <img src={image} alt="product"/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span>$ {price}</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetail;