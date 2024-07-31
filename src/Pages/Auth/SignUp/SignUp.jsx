import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { DotGroup } from "../../../Components/Dot";
import LeftSide from "../../../Components/LeftSide";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  // const [mailAllow, setMailAllow] = useState(false);
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  const [validity, setValidity] = useState({
    lowercase: false,
    number: false,
    uppercase: false,
    specialChar: false,
    minLength: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsTypingPassword(true);
    setValidity({
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      uppercase: /[A-Z]/.test(value),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      minLength: value.length >= 8,
    });
  };

  // const handleMailAllowChange = (e) => {
  //   setMailAllow(e.target.checked);
  // };

  const isFormValid = () => {
    const isValidPassword = Object.values(validity).every(Boolean);
    return email && username && phoneNo && isValidPassword;
  };

  const handlePhoneNumberKeyDown = (e) => {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
    const isNumberKey = /^[0-9]+$/.test(e.key);

    if (!isNumberKey && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:5000/api/auth/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, username, phoneNo, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          setError(data.message || 'An error occurred');
        }
      } catch (err) {
        setError('An error occurred');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="bg-secondaryBlack mmd:flex-1 mmd:flex-row relative">
      <LeftSide />
      <div className="mmd:left-[38%] w-full bg-secondaryBlack mmd:w-[62%] p-10 overflow-x-hidden absolute min-h-screen flex-grow">
        <div>
          <div className="hidden fixed top-1 left-[38%] ml-5 mmd:flex flex-col space-y-2">
            <DotGroup />
          </div>
          <div className="hidden fixed top-1 left-[38%] ml-1.5 mmd:flex flex-col space-y-2">
            <DotGroup />
          </div>
          {isSubmitted ? (
            <div className="text-center text-white mt-10">
              <h3 className="text-2xl font-bold">Registration Successful</h3>
              <p>You can now log in with your new account.</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center bg-secondaryBlack">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-4">Sign up with free trial</h3>
                <p className="text-sm font-normal text-gray-400">Empower your experience, sign up for a free account today</p>
              </div>
              <form onSubmit={handleSubmit} className="mb-2 w-auto md:w-[60%] mt-4">
                {error && (
                  <div className="text-red-500 text-center mb-4">{error}</div>
                )}
                <div className="mb-6">
                  <label className="text-white text-base font-medium">Email*</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg mt-1"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="text-white text-base font-medium">Username*</label>
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter your username"
                    className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg mt-1"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="text-white text-base font-medium">Phone Number*</label>
                  <input
                    type="text"
                    value={phoneNo}
                    onChange={handlePhoneNoChange}
                    onKeyDown={handlePhoneNumberKeyDown}
                    maxLength={10}
                    placeholder="Enter your phone number"
                    className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg mt-1"
                    required
                  />
                </div>
                <div className="mb-6 relative">
                  <label className="text-white text-base font-medium">Password*</label>
                  <div className="relative mt-1">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Create a password"
                      className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-3 text-white"
                    >
                      {passwordVisible ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                  {isTypingPassword && (
                    <div className="text-gray-400 mt-2">
                      <p className="flex items-center">
                        <CheckCircleIcon className={`h-5 w-5 mr-2 ${validity.lowercase ? 'text-primaryGreen' : ''}`} />
                        At least one lowercase letter
                      </p>
                      <p className="flex items-center">
                        <CheckCircleIcon className={`h-5 w-5 mr-2 ${validity.uppercase ? 'text-primaryGreen' : ''}`} />
                        At least one uppercase letter
                      </p>
                      <p className="flex items-center">
                        <CheckCircleIcon className={`h-5 w-5 mr-2 ${validity.number ? 'text-primaryGreen' : ''}`} />
                        At least one number
                      </p>
                      <p className="flex items-center">
                        <CheckCircleIcon className={`h-5 w-5 mr-2 ${validity.specialChar ? 'text-primaryGreen' : ''}`} />
                        At least one special character
                      </p>
                      <p className="flex items-center">
                        <CheckCircleIcon className={`h-5 w-5 mr-2 ${validity.minLength ? 'text-primaryGreen' : ''}`} />
                        Minimum 8 characters
                      </p>
                    </div>
                  )}
                </div>
                {/* <div className="mb-6">
                  <label className="text-white text-base font-medium flex items-center">
                    <input
                      type="checkbox"
                      checked={mailAllow}
                      onChange={handleMailAllowChange}
                      className="mr-2"
                    />
                    Allow email notifications
                  </label>
                </div> */}
                <button
                  type="submit"
                  className={`w-full p-3 rounded-lg bg-primaryGreen text-white font-semibold mt-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Registering...' : 'Sign Up'}
                </button>
              </form>
              <div className="text-sm font-medium text-white text-center mt-4">
                Already have an account? <Link to="/login" className="text-primaryGreen">Log In</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SignUp;

