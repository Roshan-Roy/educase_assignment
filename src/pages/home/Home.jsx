import styles from "./home.module.css"
import { NavLink } from "react-router"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className={styles.link_container}>
        <NavLink to="/signup">
          <span>Create Account</span>
        </NavLink>
        <NavLink to="/signin">
          <span>Already Registered? Login</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Home