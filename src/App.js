import React from 'react';
import { Provider } from 'react-redux'; 
import store from './store/store';
import ShoesComponent from './components/ShoesComponent';
import WatchComponent from './components/WatchComponent';
import CartComponent from './components/CartComponent'; 
import './App.css';
const App = () => {

  
  return (
    <Provider store={store}>
      <div className="app-container">
        <div className="pages-container">
          <ShoesComponent />
          <WatchComponent />
        </div>
      </div>
        <CartComponent /> 
    </Provider>
  );
};

export default App;
