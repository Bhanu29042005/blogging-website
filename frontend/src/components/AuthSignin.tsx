import { SigninType } from "@mohitsingh4716/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { toast } from "sonner";

export const AuthSignin = () => {
  const navigate= useNavigate();
  const [postInputs, setPostInputs] = useState<SigninType>({
 
    email: "",
    password: "",
 
  });

  const sendRequest= async()=>{
    if(!postInputs.email || !postInputs.password){
      toast.warning("Please fill all fields");
      return;
    }

    const loadingToast = toast.loading("Signing in...");

    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
      const jwt= response.data.jwt;
      // console.log(jwt);

      localStorage.setItem("token",jwt);

      toast.dismiss(loadingToast);
      toast.success("Signed in successfully");
      navigate("/blogs");
    }catch(e:any){
      toast.dismiss(loadingToast);
       if (e.response.data.error) {
        toast.warning(e.response.data.error);
      } else {
        console.error("An error occurred:", e);
        toast.error("Incorrect email or password. Please try again.");
      }
 
    }
     
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      {/* {JSON.stringify(postInputs)} */}

      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-4xl font-extrabold">
              <div>Welcome back</div>
            </div>
            <div className="text-slate-400 ml-2">
             { "Don't have an account"}
              <Link className="pl-2 underline" to={"/signup" }>
                {"Sign up"}
              </Link>
            </div>
          </div>

          <div className="pt-6">

             

            <LabelledInput
              label="email"
              placeholder="abc@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />

            <LabelledInput
              label="password"
              type={"password"}
              placeholder="123123"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />


            


            <button
              type="button"
              onClick={sendRequest}
              className="mt-8 w-full text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
             Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}


function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm  text-black font-semibold pt-4 px-2">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
