import { Link } from "react-router-dom";
import styles from "./Nav.module.css"

export default function Nav(){
    return (
        <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
}