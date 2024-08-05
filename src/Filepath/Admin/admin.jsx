import React, { useState,useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

function Admin(){

    const { web3, account, connectToMetaMask, connected, connecting, contract } = useAppContext();

    const [isLoading, setIsLoading] = useState('idle');

    const getNumber = async () => {
        try {
          setIsLoading('fetching');
          const number = await contract.methods.getData().call();
        } catch (error) {
          setIsLoading('Error')
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

    const [patient, setPatient] = useState(0);
    const [doctor, setDoctor] = useState(0);
    const [nurse, setNurse] = useState(0);
    const [pharmacist, setPharmacist] = useState(0);
    const [department, setDepartment] = useState(0);
    const [specialization, setSpecialization] = useState(0);


    const containerpanel = [
        {headername: 'doctor', count: doctor,addto: '/admin/managedoctor'},
        {headername: 'nurse', count: nurse,addto: '/admin/managenurse'},
        {headername: 'pharmacist', count: pharmacist,addto: '/admin/managepharmacist'},
        {headername: 'department', count: department,addto: '/admin/managedepartment'},
        {headername:'specialization', count: specialization,addto: '/admin/managespecialization'},
        {headername: 'patient', count: patient,addto: '/admin/managepatient'}
    ];
    const containerPanelcss = "border border-black rounded p-5";

    return (
        <div className="mt-12 container mx-auto">
            <h1 className='text-2xl uppercase text-center mb-5 font-extrabold'>Admin Mode</h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-10 justify-center">
                {
                    containerpanel.map((item, index) => (
                        <div className={containerPanelcss} key={index}>
                            <div className='text-center font-bold uppercase'>{item.headername}</div>
                            <div className='text-center'><CountUp start={0} end={item.count.toString()} /></div>
                            <Link to={item.addto} className='flex justify-center'>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Manage {item.headername}
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
    
}

export default Admin;