// import { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";

// function AccountSetup1({ formData, handleNextStep }) {
//   const [firstName, setFirstName] = useState(formData?.firstName);
//   const [lastName, setLastName] = useState(formData?.lastName);
//   const [businessName, setBusinessName] = useState(formData?.businessName);
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [permanentAddress, setPermanentAddress] = useState(
//     formData?.permanentAddress
//   );

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleBusinessNameChange = (e) => {
//     setBusinessName(e.target.value);
//   };

//   const handleProfilePictureChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const handlePermanentAddressChange = (e) => {
//     setPermanentAddress(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleNextStep({
//       firstName,
//       lastName,
//       businessName,
//       profilePicture,
//       permanentAddress,
//     });
//   };

//   return (
//     <div className="flex flex-col md:items-start justify-center mt-5 max-h-screen sm:mx-32">
//       {/* <div className="flex items-center justify-between w-full"> */}
//         {/* <div className="flex items-center"> */}
//           <div className="mb-9">
//             <p className="text-3xl font-bold text-white">
//               Tell us a bit about you
//             </p>
//             <p className="text-customGray mt-2">
//               That will help us better account setup for you
//             </p>
//           </div>
//           <div className="flex flex-col items-start">
//             <div className="mr-4">
//               {profilePicture ? (
//                 <img
//                   src={URL.createObjectURL(profilePicture)}
//                   alt="Profile"
//                   className="w-16 h-16 rounded-full"
//                 />
//               ) : (
//                 <FaUserCircle className="w-16 h-16 text-primaryGrey" />
//               )}
//               <label className="text-white text-base font-medium mb-1">
//                 Profile Picture
//               </label>
//             </div>
//           {/* </div> */}
//         {/* </div> */}
//       </div>
//       <form
//         className="mt-8 mb-2 max-w-screen-lg w-full"
//         onSubmit={handleSubmit}
//       >
//         <div className="md:flex justify-between">
//           <div className="mb-6 md:w-1/2">
//             <label className="text-white text-base font-medium mb-1">
//               First name*
//             </label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={handleFirstNameChange}
//               placeholder="Neilson"
//               className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg mt-1"
//               required
//             />
//           </div>
//           <div className="mb-6 md:ml-5 md:w-1/2">
//             <label className="text-white text-base font-medium mb-1">
//               Last name*
//             </label>
//             <input
//               type="text"
//               value={lastName}
//               onChange={handleLastNameChange}
//               placeholder="Wang"
//               className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg mt-1"
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-6">
//           <label className="text-white text-base font-medium mb-1">
//             PhoneNo.
//           </label>
//           <input
//             type="text"
//             value={businessName}
//             onChange={handleBusinessNameChange}
//             placeholder="Venturecapitals"
//             className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg mt-1"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="text-white text-base font-medium mb-1">
//             Permanent Address
//           </label>
//           <input
//             type="text"
//             value={permanentAddress}
//             onChange={handlePermanentAddressChange}
//             placeholder="123 Main St, City, Country"
//             className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg mt-1"
//           />
//         </div>
//         <div className="flex items-center justify-start">
//           <button
//             type="submit"
//             className="mt-1 p-3 bg-primaryGreen text-primaryBlack font-bold rounded-lg lg:w-[15%]"
//           >
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AccountSetup1;
