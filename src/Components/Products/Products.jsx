import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://megasport.ua/ua/image/products/09_20211_bq3204_002_1_1612912321-68e7b68.jpg' },
//     { id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'https://img.ktc.ua/img/base/1_505/6/316536.jpg' }
// ]

const Products = ( {products, onAddToCart} ) => {
    const classes = useStyles();

    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
            ))}
        </Grid>
    </main>
    );
};

export default Products;