import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterIssue = ({ addIssue }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [issue, setIssue] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [roomNo, setRoomNo] = useState('');
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (issue.length > 300) {
            alert('Issue description should not exceed 300 words.');
            return;
        }

        const newIssue = {
            category: selectedCategory,
            issue,
            rollNo,
            roomNo,
        };

        addIssue(newIssue);

        // Reset the state
        setSelectedCategory(null);
        setIssue('');
        setRollNo('');
        setRoomNo('');

        navigate('/dashboard/complaints');
    };

    return (
        <section className="p-6">
            <h2 className="text-white text-2xl font-semibold mb-4">Register Your Issue</h2>
            {/* <p className="text-white mb-4">Sorry for the inconvenience</p> */}
            <div className="flex gap-4 mb-4">
                {['Technician', 'Cleaning', 'Mess', 'Security', 'Gardening', 'Parking', 'Personal', 'Others'].map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className="px-4 py-2 rounded-md"
                        style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }} // Random background color
                    >
                        {category}
                    </button>
                ))}
            </div>
            {selectedCategory && (
                <form onSubmit={handleSubmit} className="bg-secondaryBlack p-4 rounded-md">
                    <textarea
                        className="w-full p-2 mb-4 rounded-md"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        placeholder="Type your issue"
                        maxLength="300"
                        value={issue}
                        onChange={(e) => setIssue(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="w-full p-2 mb-4 rounded-md"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        placeholder="Roll No (Optional)"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                    />
                    <input
                        type="text"
                        className="w-full p-2 mb-4 rounded-md"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        placeholder="Room No (Optional)"
                        value={roomNo}
                        onChange={(e) => setRoomNo(e.target.value)}
                    />
                    <button type="submit" className="bg-primaryGreen text-white px-4 py-2 rounded-md">
                        Submit
                    </button>
                </form>
            )}
        </section>
    );
};

export default RegisterIssue;
