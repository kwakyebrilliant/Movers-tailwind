/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react'
import AdminPartialNavbar from '../Partial/AdminPartialNavbar'
import AdminSidebar from '../Partial/AdminSidebar'

import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa'

import { Web3Storage } from 'web3.storage';

import { useNavigate } from 'react-router-dom';

import { ethers } from 'ethers';
import Mover from '../../artifacts/contracts/Mover.sol/Mover.json';

const moverAddress = "0x815dA96218BFdb122EA957782Eb7e455f66aA350";

function getAccessToken () {
    
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE0ZGU4NTUwMjAxMTdENDIyY0IxOTRBREJiZERlOTJGZjBkYzkxNzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjIyMDkwNzQ1NjUsIm5hbWUiOiJNb3ZlciJ9.04qLL5Jvrb2ZrrL3Mdpe-zMVmXVGuxroEAl_DwUT97E'
  }
  
  function makeStorageClient () {
    return new Web3Storage({ token: getAccessToken() })
  }


const AddProperties = () => {

    const navigate = useNavigate();

    const [haveMetamask, sethaveMetamask] = useState(true);
    const [useraddress, setUserAddress] = useState('');
    const [propertylocation, setPropertyLocation] = useState("");
    const [propertydescription, setPropertyDescription] = useState("");
    const [propertyprice, setPropertyPrice] = useState("");
    const [propertycategory, setPropertyCategory] = useState("");
    const [propertytype, setPropertyType] = useState("");
    const [image, setImage] = useState(``);
    const [supportimage1, setSupportImage1] = useState(``);
    const [supportimage2, setSupportImage2] = useState(``);

    const hiddenFileInput = useRef(null);
    const hiddenFileSupport1 = useRef(null);
    const hiddenFileSupport2 = useRef(null);

    
    const handleClick = () => {
      hiddenFileInput.current.click();
    };

      const handleClick3 = () => {
        hiddenFileSupport1.current.click();
      };

      const handleClick4 = () => {
        hiddenFileSupport2.current.click();
      };
      

    async function handleChange(event) {
        const fileUploaded = event.target.files[0];
        setImage(URL.createObjectURL(event.target.files[0]));
        const client = makeStorageClient()
        const cid = await client.put([fileUploaded])
        console.log('stored files with cid:', cid)
    
        const res = await client.get(cid)
        console.log(`Got a response! [${res.status}] ${res.statusText}`)
        if (!res.ok) {
          throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
        }
    
    
        const filess = await res.files();
        setImage(`https://${cid}.ipfs.dweb.link/${fileUploaded.name}`);
        console.log(image)
        console.log(fileUploaded)
        for (const file of filess) {
          console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
        }
        return cid
    
      };

      async function handleChange3(event) {
        const supportUploaded1 = event.target.files[0];
        setSupportImage1(URL.createObjectURL(event.target.files[0]));
        const client = makeStorageClient()
        const cid = await client.put([supportUploaded1])
        console.log('stored files with cid:', cid)
    
        const res = await client.get(cid)
        console.log(`Got a response! [${res.status}] ${res.statusText}`)
        if (!res.ok) {
          throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
        }
    
    
        const supports1 = await res.files();
        setSupportImage1(`https://${cid}.ipfs.dweb.link/${supportUploaded1.name}`);
        console.log(supportimage1)
        console.log(supportUploaded1)
        for (const file of supports1) {
          console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
        }
        return cid
    
      };

      async function handleChange4(event) {
        const supportUploaded2 = event.target.files[0];
        setSupportImage2(URL.createObjectURL(event.target.files[0]));
        const client = makeStorageClient()
        const cid = await client.put([supportUploaded2])
        console.log('stored files with cid:', cid)
    
        const res = await client.get(cid)
        console.log(`Got a response! [${res.status}] ${res.statusText}`)
        if (!res.ok) {
          throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
        }
    
    
        const supports2 = await res.files();
        setSupportImage2(`https://${cid}.ipfs.dweb.link/${supportUploaded2.name}`);
        console.log(supportimage1)
        console.log(supportUploaded2)
        for (const file of supports2) {
          console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
        }
        return cid
    
      };


      useEffect(() => {
        const { ethereum } = window;
      
        const requestAccount = async () => {
          if (!ethereum) {
            sethaveMetamask(false);
          }
          sethaveMetamask(true);
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
          });
          setUserAddress(accounts[0]);
        };
        requestAccount();
      }, []); 

      async function createProperty() {
        if (!propertylocation) return;
        if (!propertydescription) return;
        if (!propertyprice) return;
        if (!propertycategory) return;
        if (!propertytype) return;
        if (!image) return;
        if (!supportimage1) return;
        if (!supportimage2) return;

        console.log("price", propertyprice);

         // If MetaMask exists
        if (typeof window.ethereum !== "undefined") {
          // await requestAccount();

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const price = ethers.utils.parseUnits(propertyprice?.toString(), "ether");
          const contract = new ethers.Contract(moverAddress, Mover.abi, signer);
          let listingPrice = await contract.getListingPrice();
          listingPrice = listingPrice.toString();
          const transaction = await contract.createProperty( 
            price, 
            propertylocation,
            propertydescription,
            propertycategory,
            propertytype,
            image,
            supportimage1,
            supportimage2,
            {
              value: listingPrice,
            },
          );

          // setPropertyPrice("");
          // setPropertyLocation("");
          // setPropertyDescription("");
          // setPropertyCategory("");
          // setPropertyType("");
          // setImage("");
          // setSupportImage1("");
          // setSupportImage2("");
          await transaction.wait();
        }
        window.location.reload(false);
      }



  return (
    <div className='text-black'>
    <>
    <div className='flex flex-auto'>
        <AdminSidebar />
        <div className='grow'>
            <AdminPartialNavbar />
       
       <div className='m-5'>
            <div className='flex my-8'>
                <FaArrowLeft className="text-gray-500 text-2xl" onClick={() => navigate(-1)} />
                <p className='mx-2 text-gray-500'>Back</p>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-4 sm:pt-10 text-black'>

        <div>


            <h1 className='text-gray-500 text-2xl'>Property Location:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter location"
                    onChange={(e) => setPropertyLocation(e.target.value)}
                    value={propertylocation}
                />

            <h1 className='text-gray-500 text-2xl'>Property Description:</h1>
                <textarea
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter description"
                    rows="4"
                    onChange={(e) => setPropertyDescription(e.target.value)}
                    value={propertydescription}
                />
           
             <h1 className=' text-gray-500 text-2xl'>Property Category:</h1>
                <form className='my-4'>
                    <select onChange={(e) => { setPropertyCategory(e.target.value) }} className="rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full" >
                          <option value="javascript">Select Category</option>
                          <option value="home">Home</option>
                          <option value="offices">Offices</option>
                          <option value="luxury">Luxury</option>
                          <option value="industrial">Industrial</option>
                          <option value="others">Others</option>
                    </select>
                </form>

                <h1 className=' text-gray-500 text-2xl'>Property Tye:</h1>
                <form className='my-4'>
                    <select onChange={(e) => { setPropertyType(e.target.value) }} className="rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full" >
                          <option value="javascript">Select Type</option>
                          <option value="sale">Sale</option>
                          <option value="rent">Rent</option>
                          <option value="lease">Lease</option>
                    </select>
                </form>

            <h1 className=' text-gray-500 text-2xl'>Property Price:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter Price in ETH"
                    onChange={(e) => setPropertyPrice(e.target.value)}
                    value={propertyprice}
                />


        </div>

        <div>


            <h1 className='mt-4 text-gray-500 text-2xl'>Property Documents:</h1>

            <p className='mt-2 ml-2'>Cover Image</p>
                <div className='mx-2 border-dotted border-2 border-green-700 justify-center'>
                    <div className='grid grid-rows-2 justify-center'>
                        <div onClick={handleClick} className="inline-flex cursor-pointer items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring">
                            <span className="text-sm font-medium">Upload Image </span>
                            <FaPlusCircle className='mx-2' />
                        </div>
                        <input type="file"
                                ref={hiddenFileInput}
                                onChange={handleChange}
                                style={{display:'none'}}
                                accept=".png,.jpg,.jpeg"
                        /> 
                        <p className='m-2'>PNG, JPG, JPEG up to 5MB</p>
                        
                    </div>
                    {image && (
                        <iframe
                        className='relative m-auto mb-3'
                            src={image}
                            accept=".png,.jpg,.jpeg"
                        >
                            </iframe>
                        )}
                   
                </div>

                <p className='mt-2 ml-2'>Support Image 1</p>
                <div className='mx-2 border-dotted border-2 border-green-700 justify-center'>
                    <div className='grid grid-rows-2 justify-center'>
                        <div onClick={handleClick3} className="inline-flex cursor-pointer items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring">
                            <span className="text-sm font-medium">Upload Image </span>
                            <FaPlusCircle className='mx-2' />
                        </div>
                        <input type="file"
                                ref={hiddenFileSupport1}
                                onChange={handleChange3}
                                style={{display:'none'}}
                                accept=".png,.jpg,.jpeg"
                        /> 
                        <p className='m-2'>PNG, JPG, JPEG up to 5MB</p>
                        
                    </div>
                    {supportimage1 && (
                        <iframe
                        className='relative m-auto mb-3'
                            src={supportimage1}
                            accept=".png,.jpg,.jpeg"
                        >
                            </iframe>
                        )}
                   
                </div>

                <p className='mt-2 ml-2'>Support Image 2</p>
                <div className='mx-2 border-dotted border-2 border-green-700 justify-center'>
                    <div className='grid grid-rows-2 justify-center'>
                        <div onClick={handleClick4} className="inline-flex cursor-pointer items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring">
                            <span className="text-sm font-medium">Upload Image </span>
                            <FaPlusCircle className='mx-2' />
                        </div>
                        <input type="file"
                                ref={hiddenFileSupport2}
                                onChange={handleChange4}
                                style={{display:'none'}}
                                accept=".png,.jpg,.jpeg"
                        /> 
                        <p className='m-2'>PNG, JPG, JPEG up to 5MB</p>
                        
                    </div>
                    {supportimage2 && (
                        <iframe
                        className='relative m-auto mb-3'
                            src={supportimage2}
                            accept=".png,.jpg,.jpeg"
                        >
                            </iframe>
                        )}
                   
                </div>


                <div className='justify-center flex'>
                    <a
                    className="inline-flex cursor-pointer items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring"
                    onClick={createProperty}
                    type="submit"
                    >
                    <span className="text-sm font-medium">Submit </span>
                    </a>
                 </div>
            
            
        </div>

        </div>


       </div>


      

     
         
   </div>
</div>
</>
</div>
  )
}

export default AddProperties