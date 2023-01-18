import React from 'react'
import Navbar from "../NavBar/Navbar"
import Card from '../Components/Card';
import { useForm } from 'react-hook-form';
const Signup = () => {
    const { register, handleSubmit, watch, setValue,  formState: { errors }} = useForm();
  const onSubmit = (data) =>
  {
    console.log(data);
  }
  const data = { register, handleSubmit, watch, setValue,errors, onSubmit,structure };

  return (
    <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <Card type="signup" className={style} payload={data} />
        <div></div>
    </div>
    
  )
}

export default Signup;

const style = "  self-center";
const structure = {
  div: 
  [
    { key:"name",
      style:"flex flex-wrap self-center",
      input:[
      {
        innerText:"First Name",
        id:"fname",
        styles:"",
        type:"text",
        validation: { required:true, pattern: /[A-Za-z]{2,20}/, minLength: 2, maxLength: 20 }
      },
      {
        innerText:"Last Name",
        id:"lname",
        styles:"",
        type:"text",
        validation: { required:true, pattern: /[A-Za-z]{2,20}/, minLength: 2, maxLength: 20}
      },]
    },
    {
      key:"conf",
      style:"flex flex-wrap ",
      input:[
        {
          innerText:"Password",
          id:"password",
          styles:" ",
          type:"password",
          validation: { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{8,20}/, minLength: 8, maxLength: 20}
        },
        {
          innerText:"Mobile",
          id:"mobile",
          styles:" ",
          type:"number",
          validation: { required:true, pattern: /[0-9]{10,10}/,maxLength:10, }
        },]
    },
    {
      key:"address",
      style:"flex flex-row w-full ",
      input:[
        {
          innerText:"Address",
          id:"address",
          styles:"  w-max ",
          type:"text",
          validation: { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{8,20}/, minLength: 8, maxLength: 20}
        },
        ]
    },
    {
      key:"meta_address",
      style:" flex flex-wrap ",
      input:[
        {
          innerText:"City",
          id:"city",
          styles:" ",
          type:"text",
          validation: { required:true, pattern: /[A-Za-z]{2,10}/,maxLength:10, }
        },
        {
          innerText:"Pin Code",
          id:"pincode",
          styles:" ",
          type:"number",
          validation: { required:true, pattern: /[0-9]{6,6}/,maxLength:6, }
        },]
    }
  ],
    button:[
      {
        innerText:"Submit",
        type:"submit",
        styles:""
      }
    ]
    }