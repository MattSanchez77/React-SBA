import { Link } from "react-router-dom";


export default function Nav(){
    return (
        <nav>
            <ul>
                <li>
               <link to="/">HomePage</link>
               <link to="/calendar">Calendar</link>
               <link to="/signin">Sign In</link>
               <link to="/signup">Sign Up</link>
                </li>
            </ul>
        </nav>
    );
}