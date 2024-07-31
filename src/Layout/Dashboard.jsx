import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Header, Sidebar} from "../Pages/Dashboard";
import Members from '../Pages/Dashboard/Members/member';
import Complaints from '../Pages/Dashboard/Complaints/complaints';
import RegisterIssue from '../Pages/Dashboard/Complaints/registerIssue';
// import { useSelector } from 'react-redux';


const routes = [
  {
    title: "dashboard page",
    layout: "dashboard",
    pages: [
      { name: "Members", path: "/members", element: <Members /> },
      { name: "Complaints", path: "/complaints/*", element: <Complaints /> },
      
      
    ],
  },
];

const getHeading = (path) => {
  switch (path) {
    case '/dashboard/members/*':
      return 'Members';
    case '/dashboard/complaints/*':
      return 'Complaints';
    case '/dashboard/registerIssue/*':
      return 'registerIssue';
    
    default:
      return  'Dashboard';
  }
};

export function Dashboard() {
  const location = useLocation();
  const heading = getHeading(location.pathname);
  // const token = useSelector((state) => state.account.token);

  // if (!token) {
  //   return <Navigate to={"/auth/sign-in"} />;
  // }

  return (
    <div className="">
      <div className="flex bg-primaryBlack flex-row relative">
        <Sidebar />
        <div className="lg:ml-[16.7%] lg:w-[83.3%] w-full bg-primaryBlack min-h-screen flex-1 flex flex-col flex-grow absolute border-l-2 border-secondaryBlack">
          <Header heading={heading} />
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, element }) => (
                  <Route key={path} exact path={path} element={element} />
                ))
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/Dashboard.jsx";

export default Dashboard;
