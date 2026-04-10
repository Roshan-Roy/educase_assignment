import styles from "./profile.module.css"

const Profile = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Account Settings</h1>
      </div>
      <div className={styles.profile_container}>
        <div className={styles.profile_card}>
          <div className={styles.img_wrapper}>
            <img src="/profile_pic.png" alt="profile_picture" />
            <img src="/camera.png" alt="camera_icon" />
          </div>
          <div className={styles.content_wrapper}>
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <p className={styles.profile_description}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      <hr className={styles.b1} />
      <hr className={styles.b2} />
    </>
  )
}

export default Profile