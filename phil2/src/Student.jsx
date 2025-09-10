
import React from "react";

function Student(props){
return(
    <>
    <div className="Student">
        <p>name:{props.name}</p>
        <p>age:{props.age}</p>
        <p>course:{props.course}</p>
        <p>Student:{props.isStudent ? "yes" : "no"}</p>
    </div>
    </>
)
}
Student.propTypes ={
    name: propTypes.string,
    age: propTypes.number,
    course: proptypes.string,
    isStudent: propTypes.bool
}
Student.defaultProps ={
    name: "unknown",
    age:0,
    course: "unkown",
    isStudent: false,
}
export default Student;