"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Home, Users,User, Briefcase, Settings, Calendar, LogOut, Laptop, Award, LayoutDashboard } from 'lucide-react';
import { Clipboard, Bell, Layers, UserCheck} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null); // Create a ref for the sidebar

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Function to close sidebar if click is outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for click outside when sidebar is open
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener when component is unmounted or sidebar is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Button to toggle sidebar */}
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        ref={sidebarRef} // Attach the ref to the sidebar element
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`} // Toggle class based on isSidebarOpen state
        aria-label="Sidebar"
      >
        <div className="h-full py-6 px-3 overflow-y-auto bg-blue-50 dark:bg-gray-800">
        <span className="flex justify-center text-center  mb-4 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
        <LayoutDashboard size={28} className='sm:mr-2 mr-1 text-black' /><span className='text-black'>Hud</span><span className='text-blue-600'>dle</span>
        </span>
          <ul className="space-y-2 font-medium">
            {/* Sidebar menu items */}
            <li>
              <a
                href="/list/admin"
                className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              ><Home className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a href="/hr" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <Users className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 ms-3 whitespace-nowrap">HR</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
              </a>
            </li>
            <li>
              <a href="/intern" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <Clipboard className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 ms-3 whitespace-nowrap">Interns</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
              </a>
            </li>
            <li>
            <a href="#" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
               <span className="flex-1 ms-3 whitespace-nowrap">Event</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="/employee" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <Clipboard className="w-5 h-5 text-gray-500 dark:text-gray-400" />
               <span className="flex-1 ms-3 whitespace-nowrap">Employee</span>
            </a>
         </li>
         <li>
            <a href="#" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"> <UserCheck className=" w-5 h-5 text-gray-500 dark:text-gray-400" />              <span className="flex-1 ms-3 whitespace-nowrap">Attendance</span>
            </a>
         </li>
         <li>
            <a href="#" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
               <span className="flex-1 ms-3 whitespace-nowrap">Announcement</span>
            </a>
         </li>
         <li>
            <a href="#" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <Clipboard className="w-5 h-5 text-gray-500 dark:text-gray-400" />
               <span className="flex-1 ms-3 whitespace-nowrap">Departments</span>
            </a>
         </li>
         <li>
            <a href="#" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <Laptop className="w-5 h-5 text-gray-500 dark:text-gray-400" />
               <span className="flex-1 ms-3 whitespace-nowrap">Meetings</span>
            </a>
         </li>
         <li>
            <a href="/teamlead" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <Award className="w-5 h-5 text-gray-500 dark:text-gray-400" />
               <span className="flex-1 ms-3 whitespace-nowrap">Team</span>
            </a>
         </li>
         <li>
            <a href="#" className="p-1 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <LogOut className="w-5 h-5 text-gray-500 dark:text-gray-400" />
               <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
         </li>
            {/* Other menu items */}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
