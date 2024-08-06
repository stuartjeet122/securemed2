import React, { useEffect, useRef, useState } from 'react';
import styles from './home.module.css';
import { useAppContext } from '../contexts/AppContext';
import toast from 'react-hot-toast';

const Home = () => {
  const { web3, account, connectToMetaMask, connected, connecting, contract, ensureConnectionAndCall } = useAppContext();
  const inputRef = useRef(null);

  const [isLoading, setIsLoading] = useState('idle');
  const [number, setNumber] = useState('');

  const getNumber = async () => {
    try {
      setIsLoading('fetching');
      const number = await ensureConnectionAndCall('getAllDoctors');
      console.log(number);
      // setNumber(number.toString());
    } catch (error) {
      toast.error('Error fetching number');
    } finally {
      setIsLoading('idle');
    }
  };

  const handleAddNumber = async (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;

    if (inputValue === '') {
      toast.error('Please enter a number');
      return;
    }

    try {
      setIsLoading('adding');
      if (!account) {
        toast.error('Please connect to your wallet');
        setIsLoading('idle');
        return;
      }

      await ensureConnectionAndCall('setData', [inputValue], true, { gas: 3000000 })
        .on('receipt', () => {
          inputRef.current.value = '';
          getNumber();
          toast.success('Number added successfully');
        })
        .on('error', (error) => {
          toast.error(`Error in adding number: ${error.message}`);
        });
    } catch (error) {
      toast.error(`Error in adding number: ${error.message}`);
    } finally {
      setIsLoading('idle');
    }
  };

  useEffect(() => {
    const connectWallet = async () => {
      if (!connected) {
        await connectToMetaMask();
      }
    };

    connectWallet();
  }, [connected, connectToMetaMask]);

  useEffect(() => {
    if (connected) {
      getNumber();
    }
  }, [connected]);

  return (
    <section className={styles.home}>
      <div className={styles.wallet}>
        {connected ? (
          <p>Connected: {account}</p>
        ) : (
          <p>Connecting to MetaMask...</p>
        )}
      </div>
      <div className={styles.number}>
        {isLoading === 'fetching' ? (
          <p>Fetching number...</p>
        ) : (
          <p>Number: <span>{number}</span></p>
        )}
      </div>
      <div className={styles.form}>
        <form onSubmit={handleAddNumber}>
          <input
            type="number"
            placeholder="Enter number"
            ref={inputRef}
            disabled={!connected}
          />
          <button type="submit" disabled={!connected || isLoading === 'adding'}>
            {isLoading === 'adding' ? 'Adding...' : 'Add Number'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
