import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Carts from "../Carts/Carts";


const Main = () => {
    const [courses, setCourse] = useState([])

    useEffect( ()=>{
        fetch('jsonData.json')
        .then(res => res.json())
        .then( data => setCourse(data))
    } ,[])
    return (
        <div className="md:flex gap-5">
            <div className="w-3/4">
            <h3>main: {courses.length} </h3>
            <div className=" grid gap-4 grid-cols-1 md:grid-cols-3">
            {
                courses.map ( course =><Carts key={course.id} course={course} ></Carts>  )
            }

            </div>
           
            </div>
            <div className="1/4">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;