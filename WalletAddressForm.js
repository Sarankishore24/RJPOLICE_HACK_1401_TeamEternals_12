
import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../actions/walletActions';
// eslint-disable-next-line no-unused-vars
import uuid from 'uuid';
import './walletAddressForm.css';

const WalletAddressForm = () => {
  const [textValue, setTextValue] = useState('');
  // const [isValid, setIsValid] = useState(false);
  // const [selectValue, setSelectValue] = useState('Select Token')
  const address = useSelector(state => state.wallet.address);
  const dispatch = useDispatch(address);

  const handleForm = (e) => {
    e.preventDefault()
    const url1000 = `https://api.etherscan.io/api?module=account&action=txlist&address=${textValue}&startblock=0&endblock=99999999&page=1&offset=1000&sort=desc&apikey=${process.env.REACT_APP_API_KEY}`;

    let getWalletData = async () => {
      try {
        const response = await fetch(url1000); //api call for symbol information
        const walletData = await response.json();
        if(walletData.message !== 'OK'){
          alert(`${walletData.message} for address ${textValue}.  Please try another address`);
          setTextValue("");
          console.log("API Key:", process.env.REACT_APP_API_KEY);

        }
        else {
          // const uuID = {...state, id: uuid() };
          dispatch(submit(textValue, walletData));
          setTextValue("");
        }
      }
      catch(err) {
        alert(`Failed to fetch data. Please try again. ${err}`);
      }
    }
    getWalletData();
  }

  return <>
    <div className="form-group fg--search">
      <form onSubmit={handleForm}>
        <input className="input" onSubmit={handleForm} type="text" value={textValue} placeholder="type an address" onChange={(e)=>setTextValue(e.target.value)} />
        {/* <button type="submit"> <FontAwesomeIcon icon="coffee" className="search"/> </button> */}
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>
    </div>
  </>;
};

export default WalletAddressForm;