/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { FaDollarSign } from 'react-icons/fa';
import books from '../../assets/Frame.svg'

const Carts = ({course, handleCourseName}) => {
    // console.log(course)
    const{cover, Programming_course_name, course_description,credit,price}= course
    return (
        <div className=" h-96 bg-base-300 shadow-xl p-3 rounded-lg space-y-3">
            <img className="w-full h-32" src={cover} alt="" />
            <h2 className="text-xl font-bold "> {Programming_course_name} </h2>
            <p className=" text-gray-600"> {course_description} </p>
            <div className="flex justify-between" >

                <div className='flex items-center ' >
                   
                <span className=' text-xl'>  <FaDollarSign /> </span>
                    
                <p className="text-lg"> <span> </span> <span> Price: {price} </span></p>
                </div>
                
                <div className='flex gap-1'>
                <img src={books} alt="" />
                <p className="text-lg">  <span> Credit: {credit} hr </span></p>
                </div>
                
               
            </div>
            <div className="flex items-end">
            <button 
            onClick={()=>handleCourseName(course)}
            className="bg-blue-500 p-2 w-full rounded-lg">Select</button>
            </div>
            
        </div>
    );
};

export default Carts;


   