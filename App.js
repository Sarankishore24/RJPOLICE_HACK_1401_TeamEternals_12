
// import React from 'react';
// import BlockchainTxns from './components/BlockchainTxns';
// import BalanceComponent from './components/BalanceComponent';
// function App() {

//   return <>

//    {/* <BlockchainTxns /> */}
//     <BalanceComponent/>
//   </>

// }

// export default App
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import BalanceComponent from './components/BalanceComponent';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's assume the login is successful
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <BalanceComponent /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
