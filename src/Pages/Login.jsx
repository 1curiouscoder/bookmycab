import React from 'react'
import Card from '../Components/Card';
import { useForm } from 'react-hook-form';
import Navbar from '../NavBar/Navbar';
export const Login = ({intent}) => {
  const { register, handleSubmit, watch, setValue,  formState: { errors }} = useForm();
  const onSubmit = (data) =>
  {
    console.log(data);
  }
  const data = { register, handleSubmit, watch, setValue,errors, onSubmit,structure };

  return(
  <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <Card type={intent} className={style} payload={data} />
      <div className='aesthetic'></div>
  </div>)
}
export default Login;
const style = "flex content-center self-center ";

const structure = {
div:[
  {
  style:"",
  key:"pass",
  input:[
  {
    innerText:"New password",
    id:"newpass",
    checks: { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{8,20}/  },
    styles:"",
    type:"password",
    validation: { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{8,20}/ }
  },
  {
    innerText:"Confirm password",
    id:"confirmpass",
    checks: { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{8,20}/  },
    styles:"",
    type:"password",
    validation: { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{8,20}/, onBlur: (e) => console.log(e) }
  },
      ],
  }],
button:[
  {
    innerText:"Submit",
    type:"submit",
    styles:""
  }
]
}