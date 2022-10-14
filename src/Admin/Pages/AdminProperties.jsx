import React, {useState, useEffect} from 'react'
import AdminPartialNavbar from '../Partial/AdminPartialNavbar'
import AdminSidebar from '../Partial/AdminSidebar'

import { FaPlusCircle } from 'react-icons/fa'

import { ethers } from 'ethers';
import Mover from '../../artifacts/contracts/Mover.sol/Mover.json';

const moverAddress = "0xe1EC8601A53d06D74eE628D06528C3e43d10C0Ee";

const AdminProperties = () => {

  const [currentProperty, setCurrentProperty] = useState([]);
  const [accountAddress, setAccountAddress] = useState('');

  useEffect(() => {
    async function fetchPropertyOwner() {
      const { ethereum } = window;
      // If MetaMask exists
      if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
      const contract = new ethers.Contract(
        moverAddress,
        Mover.abi,
        provider
      );
      try {
        const data = await contract.fetchPropertyOwner();
        console.log("data: ", data);
        setCurrentProperty(data);
        for (var i = 1; i <= data; i++) {
          const currentPropertys = await contract.idPropertyOwner(i);
          setCurrentProperty((currentProperty) => [...currentProperty, currentPropertys]);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }
  fetchPropertyOwner();
  }, []);

  return (
    <div className='text-black'>
    <>
    <div className='flex flex-auto'>
        <AdminSidebar />
        <div className='grow'>
            <AdminPartialNavbar />
       
       <div className='m-5'>
       <header className="rounded-2xl inset-x-0 bottom-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="sm:justify-between sm:items-center sm:flex">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back, {accountAddress.slice(0, 6)}…{accountAddress.slice(accountAddress.length - 6)}!
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-900">
                    Check properties on MOVERS 🎉
                    </p>
                </div>

                
                </div>
            </div>
            </header>
       </div>

       <div className='justify-center flex'>
       <a
                className="inline-flex items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring"
                href="/addproperties"
              >
                <span className="text-sm font-medium">Add Property </span>

                <FaPlusCircle className='mx-2' />
              </a>
       </div>


       <section>
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center"
          >
            <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
              <h2 className="text-3xl font-bold sm:text-4xl mb-8">No Property Selected</h2>

              <img className="object-cover w-full h-80 rounded-2xl" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

              <a
                className="inline-flex items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring"
                href="/adminpropertiesdetail"
              >
                <span className="text-sm font-medium">View Property </span>

                <svg
                  className="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 d-flex flex-row flex-nowrap overflow-auto">
            {currentProperty.map((data) => (
              <div key={data.id}>
                 <img className="object-cover w-full h-40 rounded-2xl" src={data.nested.hash} alt="" />
                </div>
              ))
            }
              
            </div>
          </div>
        </div>
      </section>

     
         
   </div>
</div>
</>
</div>
  )
}

export default AdminProperties