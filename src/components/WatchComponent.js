import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../../src/index.css'
import RemoveIcon from '@mui/icons-material/Remove';
import blueWatch from './images/SilverWatch.jpg'
import presidentGreenWatch from './images/presidentGreen.jpg'
import blackWatch from './images/blackwatch.jpg'

const WatchComponent = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('Black'); 
  const [watchVariant, setWatchVariant] = useState(blackWatch);
  const price = 3500; 

  const handleAddToCart = () => {
    dispatch(addToCart({ name: 'Watch', count, color ,price, watchVariant}));
    setCount(0)
  };
  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
    if(selectedColor === 'Black'){
        setWatchVariant(blackWatch)
    }else if(selectedColor === 'Blue'){
        setWatchVariant(blueWatch)
    }else{
       setWatchVariant(presidentGreenWatch)
    }
  };

  return (
    <div className='card'>
         <img
        height="200px"
        width="100%"
        src={watchVariant}
        alt="Shoes"
      />
      <div className='CardContent'>
      <div className='MainFont' >
          Watch
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
        <Button onClick={() => handleColorChange('Black')} size="small" variant={color === 'Black' ? 'contained' : 'outlined'}>Black</Button>
        <Button onClick={() => handleColorChange('Blue')} size="small" variant={color === 'Blue' ? 'contained' : 'outlined'}>Blue</Button>
        <Button onClick={() => handleColorChange('Green')} size="small" variant={color === 'Green' ? 'contained' : 'outlined'}>Green</Button>
      </div>
      <div style={{paddingLeft:"10px",paddingBottom:'20px',paddingTop:"10px"}}>
        <Button disabled={count <= 0 ? true: false} onClick={handleAddToCart} variant="contained" size="small">Add to Cart</Button>
      </div>
    </div>
  );
};

export default WatchComponent;
