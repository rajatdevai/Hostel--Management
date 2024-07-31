// import React, { useState } from 'react';
// import Select from '../../Components/Select';

// function AccountSetupStep2({ formData, handleNextStep }) {
//     const [designation, setDesignation] = useState(formData?.designation || []);
//     const [department, setDepartment] = useState(formData?.department || []);
//     const [otherDetails, setOtherDetails] = useState(formData?.otherDetails);
//     const [identityCode, setIdentityCode] = useState(formData?.identityCode || "");
//     const [rollNoOrAadhar, setRollNoOrAadhar] = useState(formData?.rollNoOrAadhar || "");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleNextStep({ designation, department, otherDetails, identityCode, rollNoOrAadhar });
//     };

//     const tags1 = [
//         "Students",
//         "Staff Members",
//         "Higher Authority",
//     ];

//     const tags2 = [
//         "UIET",
//         "UICET",
//         "UILS",
//         "UBS",
//     ];

//     const tags3 = [
//         "Malli",
//         "Electrician",
//         "Barber",
//         "Washerman"
//     ];

//     const tags4 = [
//         "Warden",
//         "Assistant Warden",
//         "Cashier",
//         "Senior Guard",
//     ];

//     const handleDesignationChange = (selected) => {
//         setDesignation(selected.length ? [selected[selected.length - 1]] : []);
//         setDepartment([]);
//     };

//     const handleDepartmentChange = (selected) => {
//         setDepartment(selected.length ? [selected[selected.length - 1]] : []);
//     };

//     const getDepartmentOptions = () => {
//         if (designation[0] === "Students") return tags2;
//         if (designation[0] === "Staff Members") return tags3;
//         if (designation[0] === "Higher Authority") return tags4;
//         return [];
//     };

//     return (
//         <div className="flex flex-col items-start justify-center mt-8 max-h-screen mx-32">
//             <div className="">
//                 <p className="text-3xl font-bold text-white">Tell us Connection Details</p>
//                 <p className="text-customGray mt-2">Share your story to get a design that shows and tells it best.</p>
//             </div>
//             <form className="md:mt-8 mb-2 w-auto max-w-screen-lg md:w-full" onSubmit={handleSubmit}>
//                 <div className="mb-6">
//                     <label className="text-white text-base font-medium mb-1">Designation</label>
//                     <Select options={tags1} multiple={false} value={designation} onChange={handleDesignationChange} />
//                 </div>
//                 <div className="mb-6">
//                     <label className="text-white text-base font-medium mb-1">Department</label>
//                     <Select options={getDepartmentOptions()} multiple={false} value={department} onChange={handleDepartmentChange} />
//                 </div>
                
//                 <div className='mb-6'>
//                     <label className="text-white text-base font-medium mb-1">Identity Code</label>
//                     <input
//                         type="text"
//                         placeholder='234-4/17 or AadharNo'
//                         value={identityCode}
//                         onChange={(e) => setIdentityCode(e.target.value)}
//                         className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg resize-none mt-1"
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label className="text-white text-base font-medium mb-1">If 'Other' selected, please specify</label>
//                     <textarea
//                         value={otherDetails}
//                         onChange={(e) => setOtherDetails(e.target.value)}
//                         placeholder="Please Add your Description"
//                         className="w-full p-3 bg-primaryBlack border-none text-white rounded-lg resize-none mt-1"
//                         style={{ height: '100px' }}
//                     />
//                 </div>
//                 <div className="flex items-center justify-start">
//                     <button type="submit" className="mt-1 p-3 bg-primaryGreen text-primaryBlack font-bold rounded-lg lg:w-[15%]">
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default AccountSetupStep2;
