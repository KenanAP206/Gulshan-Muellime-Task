import React from 'react'
import './Login.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiFireFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function index() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter true email please.")
        .required("Email required!"),
      password: Yup.string()
        .min(6, "Password must be 6 or longer.")
        .required("Password required!"),
    }),
    onSubmit: (values) => {
      alert(`Email: ${values.email}\nPassword: ${values.password}`);
    },
  });
  return (
    <section id='loginbar'>
      <div className="overlay">
        <div className="loginbar">
          <div className="lb-up">
            <div className="lb-head">EDUTERIA <RiFireFill/></div>
            <p>ADMIN</p>
          </div>
           <form onSubmit={formik.handleSubmit}>
      <div className='inputer'>
        <input
          placeholder='Email'
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
     
        <MdEmail/>
           {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
      </div>
      
      <div className='inputer'>
        <input
          placeholder='Password'
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
       
          <FaEyeSlash className='see'/>
           {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
                <NavLink to="/register" >You don't have account?</NavLink>
      </div>

      <button type="submit">LOGIN</button>
    </form>
    <div className="loginfooter"></div>
        </div>
      </div>
    </section>
  )
}

export default index
