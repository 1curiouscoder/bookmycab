import Card from '../Components/Card';
import { homepageImageSrc } from '../Data/Data';
import { useForm } from 'react-hook-form';

const Homepage = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors }} = useForm();
  
  const onSubmit = (data) =>
  {
    console.log(data);
  }
  const data = {register, handleSubmit, watch, setValue,errors, onSubmit};
  return (
    <div className='flex flex-wrap justify-center '>
            <Card type="home" className={style} payload={data} />
    </div>
  )
}

const style = "justify-between";
export default Homepage;