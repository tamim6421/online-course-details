

const Carts = ({course}) => {
    console.log(course)
    const{cover, Programming_course_name, course_description,credit,price}= course
    return (
        <div className="w-72 h-96 bg-base-300 shadow-xl p-3 rounded-lg space-y-3">
            <img className="w-full" src={cover} alt="" />
            <h2 className="text-2xl font-bold "> {Programming_course_name} </h2>
            <p className="text-lg text-gray-600"> {course_description} </p>
            <div className="flex justify-between" >
                <p className="text-xl"> <span>$ </span> <span> Price: {price} </span></p>
                <p className="text-xl">  <span>Credit: {credit} hr </span></p>
               
            </div>
            <div className="flex items-end">
            <button className="bg-blue-500 p-2 w-full rounded-lg">Select</button>
            </div>
            
        </div>
    );
};

export default Carts;