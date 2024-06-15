import React, { useContext, useRef } from "react";
import styles from "./Signup.module.css";
import signup from "../assets/comicfood.jpg";
import logo from "../assets/foodlogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../contexts/Context";
import AlertModal from '../Components/AlertModal';
import axios from "axios";

const Signup = () => {

  let navigate = useNavigate();
  let emailInputRef= useRef("");
  let nameInputRef= useRef("");
  let passInputRef = useRef("");

  const {setShow, setAlert} = useContext(Context);

  async function handleSignup(e) {
    e.preventDefault();
    let email = emailInputRef.current.value;
    let name = nameInputRef.current.value;
    let pass = passInputRef.current.value;

    if(!(email && name && pass)){
        setAlert("Please Enter Full Details!!!")
        setShow(true);
        return;
    }

    try {
      let res = await axios.post(`${import.meta.env.VITE_BAPI_URL}/register`, {
        email:email,
        name: name,
        password:pass, 
      });

      console.log(res);

      setAlert("User Registerd Successfully! Please Sign In")
      setShow(true);
      navigate("/login");
    } catch (e) {
      // alert(e.response.data)
      console.log(e);
      setAlert(e.response.data)
      setShow(true);
    }
  }
  return (
    <div className={styles.signup}>
    <AlertModal/>
      <div className={styles.img}>
        <img className={styles.img} src={signup} alt="" />
      </div>

      <div className={styles.page}>
        <div className={styles.desc}>
          <h1>Let's get you started!</h1>
          <p>Create an account for your 30 days free trial.</p>

          <div className={styles.form}>
          <input type="text" placeholder="Name" ref={nameInputRef}/>
            <input type="email" placeholder="Email" ref={emailInputRef}/>
            <input type="password" name="" id="" placeholder="Password" ref={passInputRef}/>
            <div className={styles.btn} onClick={handleSignup}>
              <h5>Create account</h5>
            </div>
            <div>
              <p>
              Already have an account?{" "}
                <Link
                  to="/login"
                  style={{ color: "black", cursor: "pointer" }}
                >
                   Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
