import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import RegisterIssue from './registerIssue';

const Complaints = () => {
    const navigate = useNavigate();
    const [complaints, setComplaints] = useState([]);

    const handleAddComplaint = () => {
        navigate('/dashboard/complaints/registerIssue');
    };

    const addIssue = (issue) => {
        setComplaints([...complaints, issue]);
        navigate('/dashboard/complaints');
    };

    const handleDeleteComplaint = (index) => {
        const updatedComplaints = complaints.filter((_, i) => i !== index);
        setComplaints(updatedComplaints);
    };

    return (
        <section className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-white text-2xl font-semibold">Sorry for Inconvienance</h2>
                <button
                    onClick={handleAddComplaint}
                    className="bg-primaryGreen text-white px-4 py-2 rounded-md"
                >
                    Add Issue
                </button>
            </div>
            <Routes>
                <Route
                    path="registerIssue"
                    element={<RegisterIssue addIssue={addIssue} />}
                />
            </Routes>
            <div>
                {complaints.map((complaint, index) => (
                    <div key={index} className="bg-secondaryBlack p-4 rounded-md mb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-white"><strong>Category:</strong> {complaint.category}</p>
                                <p className="text-white"><strong>Issue:</strong> {complaint.issue}</p>
                                {complaint.rollNo && <p className="text-white"><strong>Roll No:</strong> {complaint.rollNo}</p>}
                                {complaint.roomNo && <p className="text-white"><strong>Room No:</strong> {complaint.roomNo}</p>}
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-primaryGreen text-white px-4 py-2 rounded-md">Complaint</button>
                                <button
                                    onClick={() => handleDeleteComplaint(index)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Complaints;
