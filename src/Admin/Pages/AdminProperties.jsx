import React, {useState, useEffect} from 'react'
import AdminPartialNavbar from '../Partial/AdminPartialNavbar'
import AdminSidebar from '../Partial/AdminSidebar'

import { FaPlusCircle } from 'react-icons/fa'

import { ethers } from 'ethers';
import Mover from '../../artifacts/contracts/Mover.sol/Mover.json';

const moverAddress = "0x8adB84375356D7a7938007B655f17b41599F07EB";

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

       <div className='relative px-4 pt-4 sm:pt-4 sm:pb-12 text-black'>
        <form className='flex mb-8 flex-col sm:flex-row'>
          <input className=' mt-12 p-2 rounded-md mx-4' type="text" placeholder='Filter Properties..'/>
        </form>

        <table className="border-collapse w-full">
            <thead>
                <tr>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Code</th>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Property Location</th>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
                </tr>
            </thead>
            <tbody>
            {currentProperty.map((data) => (
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Code</span>
                        {data.propertynumber}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Property Location</span>
                       {data.nested.propertylocation}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">View</span>
                     
                          <img className="object-cover w-full h-60 rounded-2xl" src={data.nested.hash} alt="" />
                         
                    </td>
                </tr>
                ))
                }
               
            </tbody>
        </table>

        </div>

     
         
   </div>
</div>
</>
</div>
  )
}

export default AdminProperties