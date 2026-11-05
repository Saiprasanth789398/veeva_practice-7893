import React from 'react';
import { useCart } from '../context/Cartcontext';

const Usecart = () => {
    const { cartItems , removeFromCart } = useCart();

    const styles = {
        container: {
            maxWidth: 900,
            margin: '20px auto',
            padding: 20,
            borderRadius: 8,
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        },
        title: {
            margin: 0,
            marginBottom: 16,      
            fontSize: 22,
            color: '#111'
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 12
        },
        listItem: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: 12,
            border: '1px solid #eee',
            borderRadius: 6,
            background: '#fafafa'
        },
        imageWrapper: {
            width: 84,
            height: 84,
            flex: '0 0 84px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: 6,
            background: '#fff'
        },
        image: {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6
        },
        name: {
            fontSize: 16,
            fontWeight: 600,
            color: '#222'
        },
        price: {
            fontSize: 14,
            color: '#666'
        }
    };

    return (
        <div className="cart-container" style={styles.container}>
            <h2 className="cart-title" style={styles.title}>Shopping Cart</h2>

            <ul className="cart-list" style={styles.list}>
                {cartItems.map((item) => (
                    <li className="cart-list-item" key={item.id} style={styles.listItem}>
                        <div className="cart-item-image" style={styles.imageWrapper}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-image"
                                style={styles.image}
                            />
                        </div>

                        <div className="cart-item-details" style={styles.details}>
                            <span className="cart-item-name" style={styles.name}>{item.name}</span>
                            <span className="cart-item-price" style={styles.price}>${item.price}</span>

                        </div>

                        <div className='remove-button' onClick={()=>removeFromCart(item.id)}>
                            <button className='removebtn'>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Usecart;