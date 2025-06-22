"use client";

import React from "react";
import { Formik, Form } from "formik";
import { InputField } from "@/components/common/inputFields";
import { loginSchema } from "@/lib/validation";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const SignIn = () => {
  const dispatch = useDispatch()
  const router = useRouter();

  const initialValues = {
    email: "",
    userName: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log("Form data", values);
    // You can make API call here
    dispatch(login(values))
    router.push("/")
  };

  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome</h2>
        <p className="text-sm mb-6 text-center text-gray-600">
          Please login to Admin Dashboard
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <InputField
                  as="input"
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-6">
                <InputField
                  as="input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded "
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
              >
                Login
              </button>
              <p className="mt-4 text-sm text-center text-blue-600 cursor-pointer hover:underline">
                Forgotten Your Password?
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
