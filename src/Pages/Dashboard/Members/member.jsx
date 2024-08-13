import React, { useState, useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Members = () => {
    const [selectedTab, setSelectedTab] = useState('Students');
    const [members, setMembers] = useState({ students: [], staff: [], higherAuthorities: [] });

    useEffect(() => {
        const fetchMembers = async () => {
            const response = await fetch('http://localhost:5000/api/account/setup');
            const data = await response.json();
            const categorizedMembers = { students: [], staff: [], higherAuthorities: [] };

            data.forEach(member => {
                if (member.designation.includes('Student')) {
                    categorizedMembers.students.push(member);
                } else if (member.designation.includes('Staff Member')) {
                    categorizedMembers.staff.push(member);
                } else if (member.designation.includes('Higher Authority')) {
                    categorizedMembers.higherAuthorities.push(member);
                }
            });

            setMembers(categorizedMembers);
        };

        fetchMembers();
    }, []);

    const renderTableContent = () => {
        const renderMembers = (membersList) => (
            <tbody>
                {membersList.map((member) => (
                    <tr key={member._id} className='border-t border-white text-white'>
                        <td className="py-4 px-4"><img src={`http://localhost:5000/uploads/${member.profilePicture}`} alt="Profile" className="w-8 h-8 rounded-full" /></td>
                        <td className="py-4 px-4">{member.firstName} {member.lastName}</td>
                        <td className="py-4 text-left">{member.identityCode}</td>
                        <td className="py-4 text-center">{member.phoneNo}</td>
                        <td className="py-4 text-center">{member.department}</td> {/* Changed from designation to department */}
                    </tr>
                ))}
            </tbody>
        );

        switch (selectedTab) {
            case 'Staff Members':
                return renderMembers(members.staff);
            case 'Higher Authorities':
                return renderMembers(members.higherAuthorities);
            case 'Students':
            default:
                return renderMembers(members.students);
        }
    };

    return (
        <section className="px-6 -mt-8 pb-4 mr-6">
            <h2 className="text-white text-2xl font-semibold mb-4 ml-0 lg:ml-5">Members</h2>
            <div className="rounded-lg ml-0 lg:ml-5 overflow-x-auto">
                <nav className="flex gap-10 mb-4">
                    <button onClick={() => setSelectedTab('Students')} className={`pb-2 ${selectedTab === 'Students' ? 'text-primaryGreen border-b-2 border-primaryGreen' : 'text-white'}`}>Students</button>
                    <button onClick={() => setSelectedTab('Staff Members')} className={`pb-2 ${selectedTab === 'Staff Members' ? 'text-primaryGreen border-b-2 border-primaryGreen' : 'text-white'}`}>Staff Members</button>
                    <button onClick={() => setSelectedTab('Higher Authorities')} className={`pb-2 ${selectedTab === 'Higher Authorities' ? 'text-primaryGreen border-b-2 border-primaryGreen' : 'text-white'}`}>Higher Authorities</button>
                </nav>
                <div className='bg-secondaryBlack px-4 rounded-xl'>
                    <table className="w-full text-gray-400 min-w-max">
                        <thead className="text-purple">
                            <tr>
                                <th className="py-2 px-4 text-primarypurple text-left">Profile</th>
                                <th className="py-2 px-4 text-primarypurple text-left">Name</th>
                                <th className="py-2 text-primarypurple text-left">Identity</th>
                                <th className="py-2 text-primarypurple text-center">Contact</th>
                                <th className="py-2 text-primarypurple text-center">Department</th> {/* Changed from Details to Department */}
                            </tr>
                        </thead>
                        {renderTableContent()}
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Members;
