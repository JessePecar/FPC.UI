/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ErrorAlert from './ErrorAlert.jsx'
import SuccessAlert from './SuccessAlert.jsx'
import Alert from './Alert.jsx'
import axios from 'axios'

export default function Popup({buttonText}) {
    const [open, setOpen] = useState(false);

    const cancelButtonRef = useRef(null);
    
    const [showSuccess, setSuccess] = useState(null);
    const [showError, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const [submitDisabled, setSubmitDisabled] = useState(null);

    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [email, setEmail]= useState('');
    const [phoneNumber, setPhoneNumber]= useState('');
    const [message, setMessage]= useState('');

    function submitModal(){
        setSubmitDisabled(true);
        if(firstName !== '' && lastName !== '' &&  email !== '' && phoneNumber !== '' && message !== ''){
            axios.post("http://pools.jessepecar.com/api/Client/Client", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                message: message
            }).then((response) => {
                if(!response.data.isSuccessful){
                    //Alert failed response - this will be returned from the api
                    setSuccess(false);
                    setErrorMessage(response.data.responseMessage);
                    setError(true);
                    setSubmitDisabled(false);
                } else{
                    //Alert successful submission
                    setError(false);
                    setSuccess(true);
                    setTimeout(function() { setOpen(false); }, 2500);
                }
            }, (error) => {
                //Alert failed response - this will be generalized
                setSuccess(false);
                setErrorMessage('Unknown issue has occured');
                setError(true);
                setSubmitDisabled(false);
            })
        }
    }

    function toggleModel(isOpen){
        if(isOpen){
            setError(false); 
            setSuccess(false);
            setSubmitDisabled(false);
        }
        setOpen(isOpen);
    }

    return (
        <div>
            <button className="mt-8 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded" onClick={() => toggleModel(true)}>{buttonText}</button> 
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0" >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-2/5">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-between">
                                          <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 mr-8">
                                            Contact Information
                                          </Dialog.Title>
                                          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                                            <Alert visible={showError}><ErrorAlert  errorMessage={errorMessage}></ErrorAlert></Alert>
                                            <Alert visible={showSuccess}><SuccessAlert successMessage="We will contact you shortly!"></SuccessAlert></Alert>
                                              <div className="lg:col-span-2">
                                                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                                                      <div className="md:col-span-2">
                                                          <label for="first_name">First Name</label>
                                                          <input type="text" name="first_name" id="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                      </div>
                                                      <div className="md:col-span-2">
                                                          <label for="last_name">Last Name</label>
                                                          <input type="text" name="last_name" id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                                                      </div>
                                                      <div className="md:col-span-2">
                                                          <label for="email">Email Address</label>
                                                          <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                                      </div>
                                                      <div className="md:col-span-2">
                                                          <label for="address">Phone Number</label>
                                                          <input type="tel" name="telephone" id="address" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                                                      </div>
                                                      <div className="md:col-span-4">
                                                          <label for="description">Describe your dream pool!</label>
                                                          <textarea rows="2"  name="description" id="description" value={message} onChange={(e) => setMessage(e.target.value)} className="border mt-1 rounded p-4 w-full bg-gray-50"  placeholder="" />
                                                      </div>
                                                      <div className="md:col-span-5 text-right">
                                                          <div className="inline-flex items-end">
                                                              <button disabled={submitDisabled} className={(submitDisabled ? "bg-gray-300 text-black font-bold py-2 px-4 rounded" : "bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded")} onClick={()=>submitModal()}>Submit</button>                                                              
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

