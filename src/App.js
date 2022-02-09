import React from 'react';
import { AppRouter } from './routes/AppRouter';
import './globlal.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {


  return (
    <div className="App">
      <Provider store={ store }>
        <AppRouter/> 
      </Provider>

    </div>
  );
}

export default App;
