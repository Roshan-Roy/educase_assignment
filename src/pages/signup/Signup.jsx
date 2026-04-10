import styles from "./signup.module.css"
import Asterisk from "../../components/asterisk/Asterisk"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()
  const defaultValue = "Marry Doe"

  const [radio, setRadio] = useState("yes")

  const handleChange = e => setRadio(e.target.value)

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h1>Create your PopX account</h1>
        <div className={styles.input_container}>
          <div>
            <input type="text" id="fname" defaultValue={defaultValue} placeholder="Enter your name" />
            <label htmlFor="fname" className={styles.full_name}>Full Name<Asterisk /></label>
          </div>
          <div>
            <input type="text" id="phone" defaultValue={defaultValue} placeholder="Enter your phone no" />
            <label htmlFor="phone" className={styles.phone}>Phone number<Asterisk /></label>
          </div>
          <div>
            <input type="text" id="email" defaultValue={defaultValue} placeholder="Enter your email" />
            <label htmlFor="email" className={styles.email}>Email address<Asterisk /></label>
          </div>
          <div>
            <input type="text" id="password" defaultValue={defaultValue} placeholder="Enter a password" />
            <label htmlFor="password" className={styles.password}>Password <Asterisk /></label>
          </div>
          <div>
            <input type="text" id="cname" defaultValue={defaultValue} placeholder="Enter your company name" />
            <label htmlFor="cname" className={styles.cname}>Company name</label>
          </div>
        </div>
        <p>Are you an Agency?<Asterisk /></p>
        <div className={styles.radio_container}>
          <label>
            <input type="radio" name="agency" value="yes" onChange={handleChange} />
            <span className={`${styles.outer} ${radio === "yes" && styles.checked}`}>
              <span className={styles.inner}></span>
            </span>
            <span className={styles.radio_label}>Yes</span>
          </label>
          <label>
            <input type="radio" name="agency" value="no" onChange={handleChange} />
            <span className={`${styles.outer} ${radio === "no" && styles.checked}`}>
              <span className={styles.inner}></span>
            </span>
            <span className={styles.radio_label}>No</span>
          </label>
        </div>
      </div>
      <button onClick={() => navigate("/profile")}>Create Account</button>
    </div>
  )
}

export default Signup