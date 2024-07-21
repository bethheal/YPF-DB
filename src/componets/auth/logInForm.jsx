import React from "react";

const LogInForm = () => {
  return (
    <div>
      <form action="">
        <div>
          <input
            type="email"
            placeholder="name@gmail.com"
            //  {...register("email", {require: "email is required"})}
          />
          <input
            type="password"
            placeholder="password"
            // {...register("password", {require: "password is required"})}
          />
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
