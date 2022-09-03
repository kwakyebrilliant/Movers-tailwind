/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react'
import AdminPartialNavbar from '../Partial/AdminPartialNavbar'
import AdminSidebar from '../Partial/AdminSidebar'

import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa'

import { Web3Storage } from 'web3.storage';

import { useNavigate } from 'react-router-dom';

import { ethers } from 'ethers';
import Mover from '../../artifacts/contracts/Mover.sol/Mover.json';

const moverAddress = "0x01D620fE224Dae9482013E28E3E3Ccee0f40ab4E";

function getAccessToken () {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    // return 'paste-your-token-here'
  
    // In a real app, it's better to read an access token from an
    // environement variable or other configuration that's kept outside of
    // your code base. For this to work, you need to set the
    // WEB3STORAGE_TOKEN environment variable before you run your code.
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE0ZGU4NTUwMjAxMTdENDIyY0IxOTRBREJiZERlOTJGZjBkYzkxNzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjIyMDkwNzQ1NjUsIm5hbWUiOiJNb3ZlciJ9.04qLL5Jvrb2ZrrL3Mdpe-zMVmXVGuxroEAl_DwUT97E'
  }
  
  function makeStorageClient () {
    return new Web3Storage({ token: getAccessToken() })
  }


const AddProperties = () => {

    const navigate = useNavigate();


    const [haveMetamask, sethaveMetamask] = useState(true);
    const [id, setId] = useState("");
    const [ownername, setOwnerName] = useState("");
    const [propertylocation, setPropertyLocation] = useState("");
    const [propertyspace, setPropertySpace] = useState("");
    const [propertyparkingspace, setPropertyParkingSpace] = useState("");
    const [propertybathroom, setPropertyBathroom] = useState("");
    const [propertybedroom, setPropertyBedroom] = useState("");
    const [propertycategory, setPropertyCategory] = useState("");
    const [propertytype, setPropertyType] = useState("");
    const [propertyduration, setPropertyDuration] = useState("");
    const [useraddress, setUserAddress] = useState('');
    const [image, setImage] = useState(``);
    const [document, setDocument] = useState(``);

    const hiddenFileInput = useRef(null);
    const hiddenDocumentInput = useRef(null);

    
    const handleClick = () => {
      hiddenFileInput.current.click();
    };

    const handleClick2 = () => {
        hiddenDocumentInput.current.click();
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


      async function handleChange2(event) {
        const documentUploaded = event.target.files[0];
        setDocument(URL.createObjectURL(event.target.files[0]));
        const client = makeStorageClient()
        const cid = await client.put([documentUploaded])
        console.log('stored files with cid:', cid)
    
        const res = await client.get(cid)
        console.log(`Got a response! [${res.status}] ${res.statusText}`)
        if (!res.ok) {
          throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
        }
    
    
        const documents = await res.files();
        setDocument(`https://${cid}.ipfs.dweb.link/${documentUploaded.name}`);
        console.log(document)
        console.log(documentUploaded)
        for (const file of documents) {
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


      async function addProperty() {
        if (!id) return;
        if (!ownername) return;
        if (!propertylocation) return;
        if (!propertyspace) return;
        if (!propertyparkingspace) return;
        if (!propertybathroom) return;
        if (!propertybedroom) return;
        if (!propertycategory) return;
        if (!propertytype) return;
        if (!propertyduration) return;
        if (!image) return;
        if (!document) return;


                // If MetaMask exists
        if (typeof window.ethereum !== "undefined") {
            
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(moverAddress, Mover.abi, signer);
        const transaction = await contract.addProperty( 
            [id,
            ownername,
            [
            propertylocation,
            propertyspace,
            propertyparkingspace,
            propertybathroom,
            propertybedroom,
            propertycategory,
            propertytype,
            propertyduration,
            image,
            document  
            ]
            ]
        );

        setId("");
        setOwnerName("");
        setPropertyLocation("");
        setPropertySpace("");
        setPropertyParkingSpace("");
        setPropertyBathroom("");
        setPropertyBedroom("");
        setPropertyCategory("");
        setPropertyType("");
        setPropertyDuration("");
        setImage("");
        setDocument("");
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

        <h1 className='text-gray-500 text-2xl'>Number:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="#"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                />

            <h1 className='text-gray-500 text-2xl'>Property Number:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="P001"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                />

            <h1 className='text-gray-500 text-2xl'>Property Owner:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter owner name"
                    onChange={(e) => setOwnerName(e.target.value)}
                    value={ownername}
                />

            <h1 className='text-gray-500 text-2xl'>Property Location:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter location"
                    onChange={(e) => setPropertyLocation(e.target.value)}
                    value={propertylocation}
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Space:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter space"
                    onChange={(e) => setPropertySpace(e.target.value)}
                    value={propertyspace}
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Parking Space:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter number of parking space"
                    onChange={(e) => setPropertyParkingSpace(e.target.value)}
                    value={propertyparkingspace}
                />
            
            <h1 className='mt-4 text-gray-500 text-2xl'>Property Bathroom:</h1>
                <input
                    className="mt-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter number of bathroom"
                    onChange={(e) => setPropertyBathroom(e.target.value)}
                    value={propertybathroom}
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Bedroom:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter number of bedroom"
                    onChange={(e) => setPropertyBedroom(e.target.value)}
                    value={propertybedroom}
                />

        </div>

        <div>

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

            <h1 className=' text-gray-500 text-2xl'>Property Duration:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter number of years"
                    onChange={(e) => setPropertyDuration(e.target.value)}
                    value={propertyduration}
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Documents:</h1>

                <div className='mx-2 mt-4 border-dotted border-2 border-green-700 justify-center'>
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

                <div className='mx-2 mt-4 border-dotted border-2 border-green-700 justify-center'>
                    <div className='grid grid-rows-2 justify-center'>
                        <div onClick={handleClick2} className="inline-flex cursor-pointer items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring">
                            <span className="text-sm font-medium">Upload Document </span>
                            <FaPlusCircle className='mx-2' />
                        </div>
                        <input type="file"
                                ref={hiddenDocumentInput}
                                onChange={handleChange2}
                                style={{display:'none'}}
                                accept=".pdf"
                        /> 
                        <p className='m-2'> PDF up to 5MB</p>
                        
                    </div>
                    {document && (
                        <iframe
                        className='relative m-auto mb-3'
                            src={document}
                            accept=".pdf"
                        >
                            </iframe>
                        )}
                   
                </div>

                <div className='justify-center flex'>
                    <a
                    className="inline-flex items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring"
                    onClick={addProperty}
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