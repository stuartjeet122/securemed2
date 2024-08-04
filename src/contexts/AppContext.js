import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import { address, abi } from '../utils/constant';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const connectToMetaMask = async () => {
    try {
      setConnecting(true);
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3Instance.eth.getAccounts();
        const contractInstance = new web3Instance.eth.Contract(abi, address);
        setWeb3(web3Instance);
        setAccount(accounts[0]);
        setContract(contractInstance);
        setConnected(true);
      } else {
        console.log('MetaMask not found');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setConnecting(false);
    }
  };

  useEffect(() => {
    if (connected) {
      // Perform any additional setup after connection is established
    }
  }, [connected]);

  return (
    <AppContext.Provider value={{ web3, account, connectToMetaMask, connected, connecting, contract }}>
      {children}
    </AppContext.Provider>
  );
};
