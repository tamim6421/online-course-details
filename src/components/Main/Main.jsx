import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Carts from "../Carts/Carts";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    const [courses, setCourse] = useState([])
    const [corseName, setCourseName] = useState([])
    const [totalCredit, setTotalCredit] = useState(0)
    const [ remainingHour, setRemainingHour]= useState(20)
    const [ totalPrice, setTotalPrice] = useState(0)

    useEffect( ()=>{
        fetch('jsonData.json')
        .then(res => res.json())
        .then( data => setCourse(data))
    } ,[])

    const notify =() =>toast ('hello')
  

   
    const handleCourseName = (course) =>{
        const names = corseName.find( name => name.id == course.id )
        let count = course.credit;
        let total = course.price
        if(names){
            toast("Already Selected The Course");          
        }
        else{
            corseName.forEach( item =>{
                count = count + item.credit
                total = total+ item.price
            })
            // console.log(total)
            const remaining = 20 - count
            if( count > 20){
                
            return toast ('Your Selected Credit is Over 20')
            }
             else if(remaining < 0){
                toast ('Credit Hour is 0')
               
            }
            else{
            setTotalCredit(count)
            setRemainingHour(remaining)
            setTotalPrice(total)
            // console.log(remaining)
            // console.log(count)
            setCourseName([...corseName, course])
            }
            
        }
        
       
    }
    // console.log(corseName)
    return (
        <><div className="md:flex gap-5">
            <div className="w-3/4">

                <div className=" grid gap-4 grid-cols-1 md:grid-cols-3">
                    {courses.map(course => <Carts
                        key={course.id}
                        handleCourseName={handleCourseName}

                        course={course}></Carts>)}

                </div>

            </div>
            <div className="1/4">
                <Cart
                    notify={notify}
                    totalCredit={totalCredit}
                    corseName={corseName}
                    remainingHour={remainingHour}
                    totalPrice={totalPrice}
                ></Cart>
            </div>
        </div><ToastContainer></ToastContainer></>
    );
};

export default Main;