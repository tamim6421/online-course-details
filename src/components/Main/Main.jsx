import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Carts from "../Carts/Carts";
import swal from 'sweetalert';

const Main = () => {
    const [courses, setCourse] = useState([])
    const [corseName, setCourseName] = useState([])
    const [totalCredit, setTotalCredit] = useState(0)
    const [ remainingHour, setRemainingHour]= useState(20)

    useEffect( ()=>{
        fetch('jsonData.json')
        .then(res => res.json())
        .then( data => setCourse(data))
    } ,[])
   
    const handleCourseName = (course) =>{
        const names = corseName.find( name => name.id == course.id )
        let count = course.credit;
        if(names){
            swal("Already Selected The Course");
        }
        else{
            corseName.forEach( item =>{
                count = count + item.credit
            })

            const remaining = 20 - count
            if( count > 20){
                
            swal ('credit over')
            }
             if(remaining < 0){
                swal ('Finished credit hour')
            }
            else{
            setTotalCredit(count)
            setRemainingHour(remaining)
            // console.log(remaining)
            // console.log(count)
            setCourseName([...corseName, course])
            }
            
        }
        
       
    }
    // console.log(corseName)
    return (
        <div className="md:flex gap-5">
            <div className="w-3/4">
            
            <div className=" grid gap-4 grid-cols-1 md:grid-cols-3">
            {
                courses.map ( course =><Carts
                     key={course.id}
                     handleCourseName={handleCourseName}

                      course={course} ></Carts>  )
            }

            </div>
           
            </div>
            <div className="1/4">
                <Cart
                totalCredit={totalCredit}
                 corseName= {corseName}
                 remainingHour={remainingHour}
                 ></Cart>
            </div>
        </div>
    );
};

export default Main;