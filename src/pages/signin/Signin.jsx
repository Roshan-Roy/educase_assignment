import styles from "./signin.module.css"
import { useNavigate } from "react-router"

const Signin = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className={styles.form_container}>
        <div>
          <input type="text" placeholder="Enter email address" id="email" />
          <label htmlFor="email" className={styles.email}>Email Address</label>
        </div>
        <div>
          <input type="password" placeholder="Enter password" id="password" />
          <label htmlFor="password" className={styles.password}>Password</label>
        </div>
        <button onClick={() => navigate("/profile")}>Login</button>
      </div>
    </div>
  )
}

export default Signin