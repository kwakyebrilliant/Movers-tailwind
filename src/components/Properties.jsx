import React, {useState, useEffect} from 'react'
import Footer from './Footer'

import { FaSearch } from 'react-icons/fa'

import {
  OfficeBuildingIcon,
  HomeIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

import { ethers } from 'ethers';
import Mover from '../artifacts/contracts/Mover.sol/Mover.json';

const moverAddress = "0xe1EC8601A53d06D74eE628D06528C3e43d10C0Ee";


const Properties = () => {

  const [showModal, setShowModal] = React.useState(false);
  const [currentProperty, setCurrentProperty] = useState([]);

  useEffect(() => {
    async function fetchPropertyOwner() {
      // If MetaMask exists
      if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
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
    <div>
      <Navbar />
    <div className='w-full h-screen pt-20'>

      <div className='mx-4 my-8'>
        <div className="flex items-center justify-between">
          <h2 className='text-3xl font-bold'>Categories</h2>
          <>
      <FaSearch onClick={() => setShowModal(true)} className='w-6 h-6 hover:text-black text-green-700 mr-5 mt-4 ' />
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 dark:bg-zinc-300  rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Search Properties
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-slate-500 text-lg leading-relaxed">
                  <input type="text" id="text" className="border border-green-700 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-zinc-300 dark:border-gray-500 dark:placeholder-gray-900 dark:text-gray-900" placeholder="search..." required/>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Submit
                  </button>
                  <button
                    className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
      </div>
      </div>


          
        <div className="flex flex-col bg-white m-auto p-auto">
              <div className="flex overflow-x-scroll hide-scroll-bar">

                <div className="flex flex-nowrap lg:ml-6 md:ml-20 py-4 ml-6">

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-green-800  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl mt-20 flex justify-center font-bold text-white'><HomeIcon className='h-16 w-16 text-white' /></p>
                        <p className='text-white mt-2'>Home</p>
                    </div>
                  </div>


                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-blue-800 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl mt-20 flex justify-center font-bold text-white'><OfficeBuildingIcon className='h-16 w-16 text-white' /></p>
                        <p className='text-white mt-2'>Offices</p>
                    </div>
                  </div>

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-red-700 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl flex mt-20 justify-center  font-bold text-white'>
                          <svg className='h-16 w-16 text-white' version="1.1" id="building-alt1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"> <path d="M11,13.5v-9C11,4.2,10.8,4,10.5,4H9V1L5,2.1v11.4H2V14h11v-0.5H11z M7,13.5V3h1v10.5H7z" fill="white"></path> </svg>
                        </p>
                        <p className='text-white mt-2'>Luxury</p>
                    </div>
                  </div>

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-yellow-700 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl flex mt-20 justify-center font-bold text-white'>
                          <svg className='h-16 w-16' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"></rect><path d="M4 44V4H12V20L28 12V20L44 12V44H4Z" fill="white" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><rect x="12" y="28" width="8" height="8" fill="none" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="28" y="28" width="8" height="8" fill="none" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></rect></svg>
                          </p>
                        <p className='text-white mt-2'>Industrial</p>
                    </div>
                  </div>

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl flex mt-20 justify-center font-bold text-black'>
                        <QuestionMarkCircleIcon className='h-16 w-16 text-black' />
                        </p>
                        <p className='text-black mt-2'>Others</p>
                    </div>
                  </div>

                  </div>
                </div>
          </div>


          <div>
          <section>
  <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div
      className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start"
    >
    <div className="lg:sticky lg:top-4">
      <details
        open
        className="overflow-hidden border border-gray-200 rounded"
      >
        <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
          <span className="text-sm font-medium">
            Filters
          </span>

          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </summary>

        <form
          action=""
          className="border-t border-gray-200 lg:border-t-0"
        >
          <fieldset>
            <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Type
            </legend>

            <div className="px-5 py-6 space-y-2">
              <div className="flex items-center">
                <input
                  id="toy"
                  type="checkbox"
                  name="type[toy]"
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <label
                  for="toy"
                  class="ml-3 text-sm font-medium"
                >
                  Sale
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="game"
                  type="checkbox"
                  name="type[game]"
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <label
                  for="game"
                  className="ml-3 text-sm font-medium"
                >
                  Rent
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="outdoor"
                  type="checkbox"
                  name="type[outdoor]"
                  className="w-5 h-5 border-gray-300 rounded"
                />

                <label
                  for="outdoor"
                  className="ml-3 text-sm font-medium"
                >
                  Lease
                </label>
              </div>

              <div class="pt-2">
                <button
                  type="button"
                  className="text-xs text-green-500 px-2 py-1"
                >
                  Reset Type
                </button>
              </div>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Year
              </legend>

              <div class="px-5 py-6 space-y-2">
                <div class="flex items-center">
                  <input
                    id="3+"
                    type="checkbox"
                    name="age[3+]"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <label
                    for="3+"
                    className="ml-3 text-sm font-medium"
                  >
                    1-5
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="8+"
                    type="checkbox"
                    name="age[8+]"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <label
                    for="8+"
                    className="ml-3 text-sm font-medium"
                  >
                   6-10
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="12+"
                    type="checkbox"
                    name="age[12+]"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <label
                    for="12+"
                    className="ml-3 text-sm font-medium"
                  >
                    11-20
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="16+"
                    type="checkbox"
                    name="age[16+]"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <label
                    for="16+"
                    className="ml-3 text-sm font-medium"
                  >
                    21-50
                  </label>
                </div>

                <div className="pt-2">
                <button
                  type="button"
                  className="text-xs text-green-500 px-2 py-1"
                >
                  Reset Year
                </button>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="flex justify-between px-5 py-3 border-t border-gray-200">
          <button
                  type="button"
                  className="text-xs text-green-500 px-2 py-1"
                >
                  Reset All
                </button>

            <button
              name="commit"
              type="button"
              className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </details>
    </div>

      <div className="lg:col-span-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            <span className="hidden sm:inline">
              Showing
            </span>
            6 of 24 Products
          </p>
          
        </div>
        

        <div className="grid grid-cols-1 gap-px mt-4 bg-white border border-gray-200 sm:grid-cols-2 lg:grid-cols-2">

                <div className="block overflow-hidden mx-4 my-4 rounded-2xl">
                <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

                 <div className="p-4 bg-gray-900">
                        <dl>
                        <div>
                            <dt className="sr-only">
                            Price
                            </dt>

                            <dd className="text-sm text-gray-100">
                            $240,000
                            </dd>
                        </div>

                        <div>
                            <dt className="sr-only">
                            Address
                            </dt>

                            <dd className="font-medium text-gray-100">
                            123 Wallaby Avenue, Park Road
                            </dd>
                        </div>
                        </dl>

                        <dl className="flex items-center mt-6 space-x-8 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Parking
                            </dt>

                            <dd className="font-medium text-gray-100">
                                2 spaces
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bathroom
                            </dt>

                            <dd className="font-medium text-gray-100">
                                2 rooms
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bedroom
                            </dt>

                            <dd className="font-medium text-gray-100">
                                4 rooms
                            </dd>
                            </div>
                        </div>
                        </dl>
                    </div>
                </div>

                <div className="block overflow-hidden mx-4 my-4 rounded-2xl">
                <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

                 <div className="p-4 bg-gray-900">
                        <dl>
                        <div>
                            <dt className="sr-only">
                            Price
                            </dt>

                            <dd className="text-sm text-gray-100">
                            $240,000
                            </dd>
                        </div>

                        <div>
                            <dt className="sr-only">
                            Address
                            </dt>

                            <dd className="font-medium text-gray-100">
                            123 Wallaby Avenue, Park Road
                            </dd>
                        </div>
                        </dl>

                        <dl className="flex items-center mt-6 space-x-8 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Parking
                            </dt>

                            <dd className="font-medium text-gray-100">
                                2 spaces
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bathroom
                            </dt>

                            <dd className="font-medium text-gray-100">
                                2 rooms
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bedroom
                            </dt>

                            <dd className="font-medium text-gray-100">
                                4 rooms
                            </dd>
                            </div>
                        </div>
                        </dl>
                    </div>
                </div>

                <div className="block overflow-hidden mx-4 my-4 rounded-2xl">
                <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

                 <div className="p-4 bg-gray-900">
                        <dl>
                        <div>
                            <dt className="sr-only">
                            Price
                            </dt>

                            <dd className="text-sm text-gray-100">
                            $240,000
                            </dd>
                        </div>

                        <div>
                            <dt className="sr-only">
                            Address
                            </dt>

                            <dd className="font-medium text-gray-100">
                            123 Wallaby Avenue, Park Road
                            </dd>
                        </div>
                        </dl>

                        <dl className="flex items-center mt-6 space-x-8 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Parking
                            </dt>

                            <dd className="font-medium text-gray-100">
                                2 spaces
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bathroom
                            </dt>

                            <dd className="font-medium text-gray-100">
                                2 rooms
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bedroom
                            </dt>

                            <dd className="font-medium text-gray-100">
                                4 rooms
                            </dd>
                            </div>
                        </div>
                        </dl>
                    </div>
                </div>

                <div className="block overflow-hidden mx-4 my-4 rounded-2xl">
                <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

                 <div className="p-4 bg-gray-900">
                        <dl>
                        <div>
                            <dt className="sr-only">
                            Price
                            </dt>

                            <dd className="text-sm text-gray-100">
                            $240,000
                            </dd>
                        </div>

                        <div>
                            <dt className="sr-only">
                            Address
                            </dt>

                            <dd className="font-medium text-gray-100">
                            123 Wallaby Avenue, Park Road
                            </dd>
                        </div>
                        </dl>

                        <dl className="flex items-center mt-6 space-x-8 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Parking
                            </dt>

                            <dd className="font-medium text-gray-100">
                                2 spaces
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bathroom
                            </dt>

                            <dd className="font-medium text-gray-100">
                                2 rooms
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bedroom
                            </dt>

                            <dd className="font-medium text-gray-100">
                                4 rooms
                            </dd>
                            </div>
                        </div>
                        </dl>
                    </div>
                </div>
            
         
              </div>
            </div>
          </div>
        </div>
      </section>
     </div>


           <div className='w-full my-32'>

          <div className='mx-4 my-8'>
            <h2 className='text-3xl font-bold'>Hot Deal</h2>
          </div>

          {currentProperty.slice(-1).map((data) => (
            <div className='grid md:grid-cols-2 gap-4 mx-8 text-center'>
              
            <div className="flex flex-col bg-white rounded-sm group hover:shadow-lg">
              <img className="object-cover rounded-2xl w-full h-full" src={data.nested.hash} alt="" />  
            </div>


            <div className="flex flex-col bg-white rounded-sm">
             
                    <h5 className="text-5xl mt-20 font-bold text-green-900">
                    ETH {data.nested.propertyprice}/ $ 240, 000
                    </h5>
                    <div className="pt-2 mt-4 border-t-2 border-indigo-100">
                    <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                    {data.nested.propertylocation}
                    </p>

                    <p className="text-lg inline-flex font-medium">
                    <dl className="flex items-center mt-6 space-x-8 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-900">
                                Parking
                            </dt>

                            <dd className="font-medium">
                            {data.nested.propertyparkingspace}  spaces
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-900">
                                Bathroom
                            </dt>

                            <dd className="font-medium">
                            {data.nested.propertybathroom}  rooms
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-900">
                                Bedroom
                            </dt>

                            <dd className="font-medium">
                            {data.nested.propertybedroom} rooms
                            </dd>
                            </div>
                        </div>
                        </dl>
                    </p>

                    </div>
                    <div className="items-center mt-4">
                    <div className='inline-flex flex-col'>
                      <Link to="/single" 
                      state={{
                        
                      }}>
                       <button className='px-3 py-2'>View Details</button>
                      </Link>
                      </div>
                     </div>
                    
            </div>

            </div>
             ))
            }
          </div>


      <Footer />
    </div>
    </div>
  )
}

export default Properties