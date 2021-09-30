// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/action";
// import "../assets/css/login.css";
import { useFormik } from "formik";
import { LoginSchema } from "../validationScrema/user";
import AuthBanner from "../components/AuthBanner";
import { Store } from "../redux/Actions";

export default function Login1 () {
  const { push } = useHistory();
  const isLoggedin:boolean = useSelector((state:Store) => state.userDataReducer.isLoggedin);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      acceptTerms: false
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log("HIHIHIHI LOGIN CLICK");
      dispatch(login());
    }
  });

  const handlePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    console.log("State", isLoggedin);
    if (isLoggedin) {
      push("/home");
    }
  }, [isLoggedin]);
  const { errors, touched } = formik;
  return (
    <div className="content">
      <div className="row g-0 min-h-100vh">
        <AuthBanner />
        <div className="col-md-8">
          <div className="p-4 p-md-5 bg-white">
            <p className="mb-4 mb-md-5 text-md-end">
              Already a member?{" "}
              <a href="javascript:;" className="text-primary">
                {" "}
                Sign In{" "}
              </a>
            </p>
            <div className="signup-container">
              <h2>Sign In</h2>
              <p className="text-muted mb-4">Let’s get started with Jur </p>
              <div className="form-group">
                <label>
                  Email Address<em>*</em>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="abc@xyz.com"
                  className="form-control form-control-lg"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {errors.email && touched.email && (
                  <div className="text-danger mt-2">{errors.email}</div>
                )}
              </div>
              <div className="form-group has-feedback">
                <label>
                  Password<em>*</em>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="***********"
                  className="form-control form-control-lg"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <span
                  className="password-text pointer"
                  onClick={() => handlePasswordVisiblity()}
                >
                  Show
                </span>
                {errors.password && touched.password && (
                  <div className="text-danger mt-2">{errors.password}</div>
                )}
              </div>

              <div className="custom-control custom-checkbox mb-4">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="stateCheck1"
                  checked={formik.values.acceptTerms}
                  onClick={formik.handleChange}
                  name="acceptTerms"
                />
                <label className="custom-control-label" htmlFor="stateCheck1">
                  I agree to the
                  <a href="javascript:;"> terms </a> and{" "}
                  <a href="javascript:;"> conditions </a>
                </label>

                {errors.acceptTerms && touched.acceptTerms && (
                  <div className="text-danger mt-2">{errors.acceptTerms}</div>
                )}
              </div>
              <button
                type="button"
                className="btn btn-primary-theme btn-lg"
                onClick={() => formik.handleSubmit()}
              >
                Sign In
              </button>
              <p className="mt-90 text-muted mb-0">
                Copyright ©2021 Product by Jur Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
