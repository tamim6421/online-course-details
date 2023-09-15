/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const Cart = ({ corseName, remainingHour, totalCredit,totalPrice }) => {
  // console.log(corseName);
  return (
    <div className="w-80 bg-base-300 shadow-xl p-3 rounded-lg mt-3">
      <div>
        <h3 className="text-blue-600 font-semibold text-xl bg-gray-100 p-1 rounded-lg ">
          Credit Hour Remaining <span>{remainingHour} </span>hr
        </h3>
      </div>
      <h2 className="mt-4 text-xl font-bold m-4 ">Course Name</h2>
      <div className="border-b-2">
        {corseName.map((course, i) => (
          <div key={course.id} className="mb-3 text-gray-600 font-semibold text-start">
            {i + 1}. {course.Programming_course_name}{" "}
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-bold border-b-2 p-4">
          Total Credit Hour : <span>{totalCredit}</span>{" "}
        </h3>
        <h3 className="text-xl font-bold border-b-2 p-4">
          Total Price : {totalPrice} USD
        </h3>
      </div>
    </div>
  );
};

export default Cart;
