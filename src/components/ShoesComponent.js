import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';
import { Button, IconButton } from '@mui/material';
import shoes from './images/shoes.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../../src/index.css';

const ShoesComponent = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [size, setSize] = useState('Small'); 
  const price = 2500;

  const handleAddToCart = () => {
    dispatch(addToCart({ name: 'Shoes', count, size, price,shoes }));
    setCount(0)
  };

  return (
    <div className='card'>
      <img
        height="200px"
        width="100%"
        src={shoes}
        style={{ objectFit: 'cover' }}
        alt="Shoes"
      />
      <div className='CardContent'>
        <div className='MainFont' >
          Shoes
        </div>
        <div className='CardContentInner'>
          <span>
            <IconButton onClick={() => setCount(count - 1)} size="small">
              <RemoveIcon />
            </IconButton>
          </span>
          <span style={{ fontSize: '20px', margin: '0 10px' }}>{count}</span>
          <span>
            <IconButton onClick={() => setCount(count + 1)} size="small">
              <AddIcon />
            </IconButton>
          </span>
        </div>
        <div className="price">Price: {price} PKR</div>
        <Button onClick={() => setSize('Small')} size="small" variant={size === 'Small' ? 'contained' : 'outlined'}>Small</Button>
        <Button onClick={() => setSize('Medium')} size="small" variant={size === 'Medium' ? 'contained' : 'outlined'}>Medium</Button>
        <Button onClick={() => setSize('Large')} size="small" variant={size === 'Large' ? 'contained' : 'outlined'}>Large</Button>
      </div>
      <div style={{ paddingLeft: "10px", paddingBottom: '20px', paddingTop: "10px" }}>
        <Button disabled={count <= 0 ?true: false} onClick={handleAddToCart} variant="contained" size="small" >Add to Cart</Button>
      </div>
    </div>
  );
};

export default ShoesComponent;
