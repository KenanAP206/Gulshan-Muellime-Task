import React, { useState } from 'react'
import './Register.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiFireFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function index() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required("Username required!"),
      email: Yup.string()
        .email("Enter valid email please.")
        .required("Email required!"),
      password: Yup.string()
        .min(6, "Password must be 6 or longer.")
        .required("Password required!"),
    }),
    onSubmit: (values) => {
      alert(`Username: ${values.username}\nEmail: ${values.email}\nPassword: ${values.password}`);
    },
  });

  return (
    <section id='loginbar'>
      <div className="overlay">
        <div className="loginbar">
          <div className="lb-up">
            <div className="lb-head">EDUTERIA <RiFireFill/></div>
            <p>REGISTER</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className='inputer'>
              <input
                placeholder='Username'
                type="text"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              <FaUser className="see"/>
              {formik.touched.username && formik.errors.username ? (
                <div style={{ color: "red" }}>{formik.errors.username}</div>
              ) : null}
            </div>

            <div className='inputer'>
              <input
                placeholder='Email'
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <MdEmail className="see"/>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className='inputer'>
              <input
                placeholder='Password'
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
             <span 
                    onClick={() => setShowPassword(!showPassword)} 
                    style={{ cursor: "pointer", position: "absolute", right: 10, top: "0%", transform: "translateY(-50%)" }}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <NavLink to="/login" >Already have an account?</NavLink>
            </div>

            <button type="submit">REGISTER</button>
          </form>
          <div className="loginfooter"></div>
        </div>
      </div>
    </section>
  )
}

export default index
