import { useState } from "react";

export default function Register() {
  // const [fullName, setfullName] = useState('')
  // const [email, setemail] = useState('')
  // const [password, setpassword] = useState('')
  // const [confirmpassword, setconfirmpassword] = useState('')

  const [error, seterror] = useState("");
  const [formData, setformData] = useState({
    fullName: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const handleChanges = (e: any) => {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("form submitted");

    if (formData.password.length < 8) {
      seterror("password must be 8 characters long");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      seterror("password & confirm password must be same");
      return;
    }
    if (!/[!@#$%^&*()<>?_+~.,'"]/.test(formData.password)) {
      seterror("password must contain any special character");
      return;
    }
    if (!/[A-Z]/.test(formData.password)) {
      seterror("password must contain ant Capital letter");
      return;
    }

    seterror("");
    setformData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    // formData.setfullName('')
    // setemail('')
    // setpassword('')
    // setconfirmpassword('')
  };

  function fakeGoogleOAuth() {
  const popup = window.open(
    "https://accounts.google.com", // demo page (replace with your own redirect)
    "Google Login",
    "width=500,height=600,top=150,left=400"
  );

  if (!popup) {
    alert("Popup blocked! Please allow popups.");
  }
}
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        {/* Form */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="space-y-4"
        >
          <input
            onChange={handleChanges}
            value={formData.fullName}
            name="fullName"
            type="text"
            required
            placeholder="Enter Name here"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            onChange={handleChanges}
            value={formData.email}
            name="email"
            type="email"
            required
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            onChange={handleChanges}
            value={formData.password}
            name="password"
            type="password"
            required
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            onChange={handleChanges}
            value={formData.confirmPassword}
            name="confirmPassword"
            type="password"
            required
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {error && (
            <p className="text-red-900 text-center text-sm font-medium ">
              {error}
            </p>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600  text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Continue with Google */}
        <button
        onClick={fakeGoogleOAuth}
          type="button"
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By registering, you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
