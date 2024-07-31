import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Members = () => {
    const [selectedTab, setSelectedTab] = useState('Students');
    const [members, setMembers] = useState({
        students: [
            { id: 1, name: 'Mohit Kumar', room: '234-4/17', department: 'UIET', phone: '9835393707', profilePic: 'path/to/profile-pic1.jpg' }
        ],
        staff: [
            { id: 1, name: 'Mahesh Kumar', designation: 'Barber', phone: '9835393707', rating: 3, profilePic: 'path/to/profile-pic2.jpg' }
        ],
        higherAuthorities: [
            { id: 1, name: 'Jodh Singh', designation: 'Warden', phone: '98349824984', availability: '10am-4:00pm', profilePic: 'path/to/profile-pic3.jpg' }
        ]
    });

    const renderRating = (rating) => {
        return (
            <div className="flex justify-center">
                {[...Array(5)].map((_, index) => (
                    index < rating ? <AiFillStar key={index} className="text-yellow-500" /> : <AiOutlineStar key={index} className="text-gray-500" />
                ))}
            </div>
        );
    };

    const renderTableContent = () => {
        switch (selectedTab) {
            case 'Staff Members':
                return (
                    <tbody>
                        {members.staff.map((member) => (
                            <tr key={member.id} className='border-t border-white text-white'>
                                <td className="py-4 px-4"><img src={member.profilePic} alt="Profile" className="w-8 h-8 rounded-full" /></td>
                                <td className="py-4 px-4">{member.name}</td>
                                <td className="py-4 text-left">{member.designation}</td>
                                <td className="py-4 text-center">{member.phone}</td>
                                <td className="py-4 text-center">
                                    {renderRating(member.rating)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                );
            case 'Higher Authorities':
                return (
                    <tbody>
                        {members.higherAuthorities.map((member) => (
                            <tr key={member.id} className='border-t border-white text-white'>
                                <td className="py-4 px-4"><img src={member.profilePic} alt="Profile" className="w-8 h-8 rounded-full" /></td>
                                <td className="py-4 px-4">{member.name}</td>
                                <td className="py-4 text-left">{member.designation}</td>
                                <td className="py-4 text-center">{member.phone}</td>
                                <td className="py-4 text-center">{member.availability}</td>
                                <td className="py-4 text-center"><button className="border border-primaryGreen text-white rounded-full px-4 py-1">See Files</button></td>
                            </tr>
                        ))}
                    </tbody>
                );
            case 'Students':
            default:
                return (
                    <tbody>
                        {members.students.map((student) => (
                            <tr key={student.id} className='border-t border-white text-white'>
                                <td className="py-4 px-4"><img src={student.profilePic} alt="Profile" className="w-8 h-8 rounded-full" /></td>
                                <td className="py-4 px-4">{student.name}</td>
                                <td className="py-4 text-left">{student.room}</td>
                                <td className="py-4 text-center">{student.department}</td>
                                <td className="py-4 text-center">{student.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                );
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
                                <th className="py-2 text-primarypurple text-left">Description</th>
                                <th className="py-2 text-primarypurple text-center">Contact</th>
                                <th className="py-2 text-primarypurple text-center">Details</th>
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
