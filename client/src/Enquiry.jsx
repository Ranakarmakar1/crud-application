import React, { useEffect, useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import {ToastContainer, toast } from 'react-toastify';
import EnquiryList from "./enquiry/EnquiryList";
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'


function Enquiry() {
 
  // State to store all enquiries
  let [enquiryList,setEnquiryList]=useState([])
  

   // Form data state
  let [formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
    _id:''
  })


  // Handle form submission for save/update
  let saveEnquiry = (e) => {

    e.preventDefault();

    // get the form values
    // let formData = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   message: e.target.message.value
    // }
   

    // If _id exists, update enquiry
    if(formData._id){
      axios.put(`https://crud-application-backend-7kp5.onrender.com/api/website/enquiry/update/${formData._id}`,formData).then((res)=>{
        
        toast.success('Enquiry Update Successfully');
        
        // Reset form after update
        setFormData({
          name:'',
          email:'',
          phone:'',
          message:'',
          _id:''
        }) 
         getAllenquiry()
      })
      
    }else{


    // Create new enquiry
    axios.post('https://crud-application-backend-7kp5.onrender.com/api/website/enquiry/insert',formData).then((res)=>{
      // console.log(res.data);

      toast.success('Enquiry saved Successfully');
      // Reset form after save
      setFormData({
        name:'',
        email:'',
        phone:'',
        message:''
      })

      getAllenquiry()
    })
    }
   
  };


  // Fetch all enquiries from server
  let getAllenquiry=()=>{
    axios.get('https://crud-application-backend-7kp5.onrender.com/api/website/enquiry/view').then((res)=>{
       return res.data
    }).then((finalData)=>{
      if(finalData.status){
        setEnquiryList(finalData.enquiryList)
      }
    })
  };




 // Handle input value change
 let getValue=(e)=>{
  let inputName=e.target.name         //name
  let inputValue=e.target.value       //Rana
  let oldData = {...formData}

  oldData[inputName]=inputValue          
  setFormData(oldData)
  // {name:Rana}
 }

console.log(enquiryList)



// Fetch all enquiries on initial render
useEffect(()=>{
  getAllenquiry()
},[])



  return (
    <div>
      <ToastContainer/>
      <h1 className="text-[40px] text-center py-6 font-bold">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] gap-10">
        
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>
          <form action="" onSubmit={saveEnquiry}>


            {/* Name Field */}
            <div className="py-3">
              <Label htmlFor="name">Your Name</Label>
              <TextInput
                name="name"
                type="text"
                value={formData.name}
                onChange={getValue}
                placeholder="Enter Your Name"
                required
              />
            </div>


            {/* Email Field */}
            <div className="py-3">
              <Label htmlFor="name">Your Email</Label>
              <TextInput
                name="email"
                type="email"
                value={formData.email}
                onChange={getValue}
                placeholder="Enter Your Email"
                required
              />
            </div>


            {/* Phone Field */}
            <div className="py-3">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput
                name="phone"
                type="text"
                onChange={getValue}
                value={formData.phone}
                placeholder="Enter Your Phone"
                required
              />
            </div>


            {/* Message Field */}
            <div className="py-3">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                name="message"
                placeholder="Leave a comment..."
                onChange={getValue}
                value={formData.message}
                required
                rows={4}
              />
            </div>


            {/* Submit Button */}
            <div className="py-3">
              <Button type="submit" className="w-[100%]">
                {formData._id? 'Update' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>



        {/* props */}
        <EnquiryList data={enquiryList} getAllenquiry={getAllenquiry} Swal={Swal} setFormData={setFormData} />
        
      </div>
    </div>
  );
}

export default Enquiry;
