import { useState } from "react";


const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

return (
    <div className="user-card">
        <h2> display 1st count : {count}</h2>
        <h2> display 2nd count : {count2}</h2>
        <h2> Name: {props.name}</h2>
        <h3> Contact: Smrutisakre@gmail.com</h3>
        <h3> Location:{props.location}</h3>
    </div>
)
}

export default User;