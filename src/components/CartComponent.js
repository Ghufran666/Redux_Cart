import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../actions/actions";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleDeleteItem = (index) => {
    dispatch(removeFromCart(index));
  };
  return (
    <div>
      <h4 className="CartMainHeading">Cart</h4>
      {cartItems.length <= 0 ? (
        <div className="noData"> Your cart is empty... </div>
      ) : (
        <List>
          {cartItems.map((item, index) => (
            <ListItem
              style={{ display: "flex", alignItems: "center" }}
              key={index}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <img
                  style={{ objectFit: "cover", marginRight: "10px" }}
                  height="80"
                  width="80"
                  alt={item.name}
                  src={item.name === "Shoes" ? item.shoes : item.watchVariant}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${item.name} - Count: ${item.count}`}
                secondary={
                  item.name === "Shoes"
                    ? `Size: ${item.size}`
                    : `Color: ${item.color}`
                }
                secondaryTypographyProps={{ color: "textPrimary" }}
              />
              <ListItemText
                primary={`Price: ${item.price} PKR`}
                secondary={null}
                secondaryTypographyProps={{ color: "textPrimary" }}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteItem(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default CartComponent;
