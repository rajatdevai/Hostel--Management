import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid';
// import { removeToken } from '../../store/accountSlice';
// import { useDispatch } from 'react-redux';
// import { persistor } from '../../store/store';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    const handleLinkClick = (path) => {
        setActivePath(path);
        navigate(path);
    };

    const getLinkClasses = (path) => {
        const isActive = activePath === path;
        const baseClasses = `relative flex items-center space-x-5 h-10 w-full pl-4`;
        const activeClasses = `text-primaryGreen bg-black bg-opacity-15`;
        const inactiveClasses = `text-white`;

        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    };

    const getPseudoClasses = (path) => {
        const isActive = activePath === path;
        return isActive ? 'border-l-8 border-primaryGreen rounded-tr-lg rounded-br-lg' : '';
    };

    return (
        <aside className="w-[16.7%] bg-primaryBlack fixed top-0 overflow-y-auto h-screen custom-scrollbar">
            <div className='flex flex-col justify-center space-y-10 w-full mb-4'>
                <div className='m-6'>
                    <img src="https://puchd.ac.in/asset/pu-logo.png" className="h-20 w-20 mb-10" alt="Logo" />
                </div>
                <nav className="space-y-4 flex flex-col items-baseline justify-center w-full">
                    <Link
                        to="/Dashboard/Members"
                        className={getLinkClasses('/Dashboard/Members')}
                        onClick={() => handleLinkClick('/Dashboard/Members')}
                    >
                        <div className={`absolute left-0 h-full w-2 ${getPseudoClasses('/Dashboard/Members')} `}></div>
                        <HomeIcon className="h-6 w-6" />
                        <span>Members</span>
                    </Link>
                    <Link
                        to="/Dashboard/Complaints"
                        className={getLinkClasses('/Dashboard/Complaints')}
                        onClick={() => handleLinkClick('/Dashboard/Complaints')}
                    >
                        <div className={`absolute left-0 h-full w-2 ${getPseudoClasses('/Dashboard/Complaints')} `}></div>
                        <HomeIcon className="h-6 w-6" />
                        <span>Complaints</span>
                    </Link>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
