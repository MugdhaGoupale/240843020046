import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateForm = () => {
  const userdetails = JSON.parse(localStorage.getItem("loggedUser"));

  const [formData, setFormData] = useState(userdetails);

  const updateUser = async (data) => {
    await fetch("http://localhost:8080/update/" + userdetails.user_id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
    setValue,
  } = useForm({ defaultValues: userdetails });

  const onSubmit = (data) => {
    console.log(data);
    updateUser(data);
    alert("Update succesfull !!!");
    navigate("/admin");
  };

  return (
    <div
      className="container  "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px ",
        marginBottom: "100px",
      }}
    >
      <div className="card w-50">
        <h1 className="text-center pt-3"> Update </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-3 pb-2">
            <label className="form-label"> First Name </label>
            <input
              className={errors.fname ? " form-control" : "form-control"}
              type="text"
              name="fname"
              {...register("fname", {
                required: true,
                minLength: 2,
              })}
            />
            {errors.fname && errors.fname.type === "required" && (
              <p className="error-msg"> First Name is required </p>
            )}
            {errors.fname && errors.fname.type === "minLength" && (
              <p className="error-msg">
                First Name should have min 2 characters
              </p>
            )}
          </div>

          <div className="p-3 pb-2">
            <label className="form-label"> Last Name </label>
            <input
              className={
                errors.lname ? "lname-error form-control" : "form-control"
              }
              type="text"
              name="lname"
              {...register("lname", {
                required: true,
                minLength: 1,
              })}
            />
            {errors.lname && errors.lname.type === "required" && (
              <p className="error-msg"> Last Name is required </p>
            )}
            {errors.lname && errors.lname.type === "minLength" && (
              <p className="error-msg">
                Last Name should have min 1 characters{" "}
              </p>
            )}
          </div>

          <div className="p-3 pb-2">
            <label className="form-label"> Mobile Number </label>
            <input
              className={
                errors.mobno ? "mobno-error form-control" : "form-control"
              }
              type="text"
              name="mob_no"
              {...register("mob_no", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
            {errors.mob_no && errors.mob_no.type === "required" && (
              <p className="error-msg"> Mobile Number is required </p>
            )}
            {errors.mob_no &&
              (errors.mob_no.type === "minLength" ||
                errors.mob_no.type === "maxLength") && (
                <p className="error-msg">
                  {" "}
                  Mobile Number should have 10 digits{" "}
                </p>
              )}
          </div>

          <div className="p-3 pb-2">
            <label className="form-label"> Email Id </label>
            <input
              className={
                errors.email ? "email-error form-control" : "form-control"
              }
              type="text"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9_.-]{3,10}@gmail.com$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error-msg"> Email Id is required </p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="error-msg"> Email Id is invalid </p>
            )}
          </div>

          <div className="p-3 pb-2">
            <label className="form-label"> Address </label>

            <input
              className={
                errors.address ? "address-error form-control" : "form-control"
              }
              type="text"
              name="address"
              id=""
              {...register("address", { required: true, minLength: 1 })}
            />

            {errors.address && errors.address.type === "required" && (
              <p className="error-msg"> Address is required </p>
            )}
            {errors.address && errors.address.type === "minLength" && (
              <p className="error-msg">Address should have min 1 characters</p>
            )}
          </div>

          <div className="p-3 pb-2">
            <label className="form-label"> Enter Password </label>
            <input
              className={
                errors.password ? "password-error form-control" : "form-control"
              }
              type="text"
              name="password"
              {...register("password", {
                required: true,
                pattern: /^[A-Za-z0-9*%$_.-]{8,12}$/,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="error-msg"> Password is required </p>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <p className="error-msg"> Password is invalid </p>
            )}
          </div>

          <div className="d-flex justify-content-center pt-1 pb-3">
            <div className="p-3 pb-2 w-100">
              <button className="btn btn-success w-100">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
