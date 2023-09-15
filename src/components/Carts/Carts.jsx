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


     {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1V23" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> */}