import React, {useState, useEffect} from 'react'
import Footer from './Footer'

import Navbar from './Navbar';

import { useLocation } from 'react-router-dom'

import { ethers } from 'ethers';
import Mover from '../artifacts/contracts/Mover.sol/Mover.json';

const moverAddress = "0x07999D7C31F94360CcD9Ed545D0935B140Ee4198";

const SinglePage = () => {

    let location = useLocation();
  const single = location.state;
  console.log(location);

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

        <div className='mx-4'>

            <section>
            <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                    <div className="aspect-w-1 aspect-h-1">
                    <img
                        alt="Mobile Phone Stand"
                        className="object-cover w-[800px] rounded-xl"
                        src={single.hash}
                    />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:mt-4">
                    <div className="aspect-w-1 aspect-h-1">
                        <img
                        alt="Mobile Phone Stand"
                        className="object-cover lg:h-48 h-24 rounded-xl"
                        src={single.supportimage1}
                        />
                    </div>

                    <div className="aspect-w-1 aspect-h-1">
                        <img
                        alt="Mobile Phone Stand"
                        className="object-cover lg:h-48 h-24  rounded-xl"
                        src={single.supportimage2}
                        />
                    </div>

                   
                    </div>
                </div>

                <div className="sticky top-0">
                <strong className="border border-green-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-green-600"> 
                For {single.propertytype} 
                </strong>

                    <div class="flex justify-between mt-8">
                    <div className="max-w-[35ch]">
                        <h1 className="text-2xl font-bold">
                        {single.propertylocation}
                        </h1>

                        <p className="mt-0.5 text-sm">
                        Highest Rated
                        </p>

                        <div class="flex mt-2 -ml-0.5">
                        <svg
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                            className="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                            className="w-5 h-5 text-gray-200"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        </div>
                    </div>

                    <p className="text-lg font-bold">
                       ETH {single.propertyprice}/ $240,000
                    </p>
                    </div>

                    <details className="relative mt-4 group">
                    <summary className="block">
                        <div>
                        <div className="prose max-w-none group-open:hidden">
                            <p>
                            {single.propertydescription.slice(0, 82)}
                            </p>
                        </div>

                        <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                            Read More
                        </span>
                        </div>
                    </summary>

                    <div className="pb-6 prose max-w-none">
                        {single.propertydescription}
                    </div>
                    </details>

                    <form className="mt-8">

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
                                {single.propertyparkingspace} spaces
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
                                {single.propertybathroom} rooms
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
                                {single.propertybedroom} rooms
                            </dd>
                            </div>
                        </div>
                        </dl>
                    </p>
                    

                    <div className="flex mt-8">
                        <button
                        className="block px-5 py-3 w-full text-lg font-medium"
                        >
                        Book Session
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>

           
        </div>

        <div className='w-full text-white my-24'>
            <div className='w-full h-[750px] bg-slate-900 absolute mix-blend-overlay'></div>

            <div className='max-w-[1240px] mx-auto py-12'>

                <div className='px-4 py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Similar</h2>
                <span class="inline-block w-12 h-1 bg-white"></span>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3'>

                {currentProperty.slice(-3).map((data) => (
                     <div className="block overflow-hidden mx-4 my-4 rounded-2xl">
                     <img className="object-cover w-full h-56" src={data.nested.hash} alt="" />
     
                      <div className="p-4 bg-gray-900">
                             <dl>
                             <div>
                                 <dt className="sr-only">
                                 Price
                                 </dt>
     
                                 <dd className="text-sm text-gray-100">
                                 ETH {data.nested.propertyprice}/ $
                                 </dd>
                             </div>
     
                             <div>
                                 <dt className="sr-only">
                                 Address
                                 </dt>
     
                                 <dd className="font-medium">
                                 {data.nested.propertylocation}
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
                                 <dt className="text-gray-100">
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
                                 <dt className="text-gray-100">
                                     Bedroom
                                 </dt>
     
                                 <dd className="font-medium">
                                 {data.nested.propertybedroom} rooms
                                 </dd>
                                 </div>
                             </div>
                             </dl>
                         </div>
                     </div>
                    ))
                }


                </div>
            </div>
        </div>

        
        
        <Footer />
    </div>
    </div>
  )
}

export default SinglePage