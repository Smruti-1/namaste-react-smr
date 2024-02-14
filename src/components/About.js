import { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {

    const {loggedInUser} = useContext(UserContext)

    return (

        <div>
            <h1> Hi I am About page </h1>
               <UserClass  name={loggedInUser} Location={"indore"}/>
        </div>
    );
}

export default About ;