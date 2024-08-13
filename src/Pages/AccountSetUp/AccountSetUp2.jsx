import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountSetup2({ formData, handleNextStep }) {
  const [designation, setDesignation] = useState(formData?.designation || "");
  const [department, setDepartment] = useState(formData?.department || "");
  const [otherDetails, setOtherDetails] = useState(formData?.otherDetails || "");
  const [identityCode, setIdentityCode] = useState(formData?.identityCode || "");
  const navigate = useNavigate();

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
    setDepartment(""); // Reset department when designation changes
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleOtherDetailsChange = (e) => {
    setOtherDetails(e.target.value);
  };

  const handleIdentityCodeChange = (e) => {
    setIdentityCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!designation || !department || !identityCode) {
      alert("Please fill in all required fields.");
      return;
    }

    const data = {
      designation,
      department,
      otherDetails,
      identityCode,
    };
    handleNextStep(data);
    navigate('/dashboard/members');
  };

  const renderDepartmentOptions = () => {
    if (designation === "Student") {
      return (
        <>
          <option value="">Select Department</option>
          <option value="UIET">UIET</option>
          <option value="UICET">UICET</option>
          <option value="UILS">UILS</option>
          <option value="UBS">UBS</option>
          <option value="UIHM">UIHM</option>
        </>
      );
    } else if (designation === "Staff Member") {
      return (
        <>
          <option value="">Select Department</option>
          <option value="Technician">Technician</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Mess">Mess</option>
          <option value="Security">Security</option>
          <option value="Gardening">Gardening</option>
          <option value="Parking">Parking</option>
          <option value="Personal">Personal</option>
          <option value="Reception">Reception</option>
          <option value="Others">Others</option>
        </>
      );
    } else if (designation === "Higher Authority") {
      return (
        <>
          <option value="">Select Department</option>
          <option value="Assistant Warden">Assistant Warden</option>
          <option value="Warden">Warden</option>
          <option value="Cashier">Cashier</option>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col items-start justify-center mt-8 max-h-screen mx-32">
      <div className="">
        <p className="text-3xl font-bold text-white">
          Tell us Connection Details
        </p>
        <p className="text-customGray mt-2">
          Share your story to get a design that shows and tells it best.
        </p>
      </div>
      <form
        className="md:mt-8 mb-2 w-auto max-w-screen-lg md:w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label className="text-white text-base font-medium mb-1">
            Designation*
          </label>
          <select
            value={designation}
            onChange={handleDesignationChange}
            className="mt-2 p-2 w-full rounded-md"
            required
          >
            <option value="">Select Designation</option>
            <option value="Student">Student</option>
            <option value="Staff Member">Staff Member</option>
            <option value="Higher Authority">Higher Authority</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="text-white text-base font-medium mb-1">
            Department*
          </label>
          <select
            value={department}
            onChange={handleDepartmentChange}
            className="mt-2 p-2 w-full rounded-md"
            required
          >
            {renderDepartmentOptions()}
          </select>
        </div>
        <div className="mb-6">
          <label className="text-white text-base font-medium mb-1">
            Identity Code*
          </label>
          <input
            type="text"
            placeholder="234-4/17 or AadharNo"
            value={identityCode}
            onChange={handleIdentityCodeChange}
            className="w-full p-3 bg-secondaryBlack border-none text-white rounded-lg resize-none mt-1"
            required
          />
        </div>
        <div className="mb-6">
          <label className="text-white text-base font-medium mb-1">
            If 'Other' selected, please specify
          </label>
          <textarea
            value={otherDetails}
            onChange={handleOtherDetailsChange}
            placeholder="Please Add your Description"
            className="w-full p-3 bg-secondaryBlack border-none text-white rounded-lg resize-none mt-1"
            style={{ height: "100px" }}
          ></textarea>
        </div>
        <div className="flex items-center justify-start">
          <button
            type="submit"
            className="mt-1 p-3 bg-primaryGreen text-primaryBlack font-bold rounded-lg lg:w-[15%]"
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountSetup2;
