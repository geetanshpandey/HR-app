'use client';
import React, { useState } from 'react';
import Sidebar from "@/components/main/sidebar";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button"; 
import LineChart from "@/components/main/charts/linechart";
import AreaChart from "@/components/main/charts/areachart"; 
import BarChart from "@/components/main/charts/barchart";
import PieChart from "@/components/main/charts/piechart"; // Assuming PieChart component exists
import { ChevronDown, Menu, X } from "lucide-react";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const Home = () => {
    const [selectedChart, setSelectedChart] = useState<"line" | "area" | "bar">("line");
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [isRightSectionVisible, setIsRightSectionVisible] = useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-gray-100 dark:bg-gray-800">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col p-4 mt-8 sm:mt-16">
                {/* Top Section */}
                <div className="flex justify-center flex-wrap gap-4">
                    {/* Employee Card */}
                    <div className="w-48 h-32 bg-gradient-to-r from-blue-200 to-blue-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center shadow-md">
                        <h3 className="text-lg mt-4 font-semibold text-gray-800 dark:text-white">Employee</h3>
                    </div>

                    {/* HR Card */}
                    <div className="w-48 h-32 bg-gradient-to-r from-blue-200 to-blue-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center shadow-md">
                        <h3 className="text-lg mt-4 font-semibold text-gray-800 dark:text-white">HR</h3>
                    </div>

                    {/* Admin Card */}
                    <div className="w-48 h-32 bg-gradient-to-r from-blue-200 to-blue-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center shadow-md">
                        <h3 className="text-lg mt-4 font-semibold text-gray-800 dark:text-white">Admin</h3>
                    </div>

                    {/* Intern Card */}
                    <div className="w-48 h-32 bg-gradient-to-r from-blue-200 to-blue-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center shadow-md">
                        <h3 className="text-lg mt-4 font-semibold text-gray-800 dark:text-white">Intern</h3>
                    </div>
                </div>

                {/* Attendance Section */}
                <div className='flex flex-col items-center mt-16'>
                    <div className='text-center text-4xl font-bold text-blue-600'><span className={`${caveat.className}`}>Attendance</span></div>
                    <div className="flex flex-wrap justify-center gap-6 mt-6 w-full">
                        {/* Pie Chart for Attendance */}
                        <div className="p-4 mt-8 lg:w-[50%] bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <LineChart />
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <PieChart />
                        </div>
                    </div>
                </div>

                {/* Finance Section */}
                <div className='flex flex-col items-center mt-16'>
                    <div className='text-center text-4xl font-bold text-blue-600'><span className={`${caveat.className}`}>Finance</span></div>
                    <div className="flex justify-center mt-6 w-[70%] max-w-2xl rounded-lg shadow-md p-6">
                        <AreaChart />
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div
                className={`fixed inset-y-0 right-0 z-50 transform ${
                    isRightSectionVisible ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 static translate-x-0 w-72 bg-white dark:bg-gray-800 p-4 space-y-2`}
            >
                {/* Calendar Section */}
                <div className="h-[320px] border p-4 rounded-lg dark:bg-gray-700 sm:mt-2 mt-6">
                    <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-white"><span className={`${caveat.className}`}>Calendar</span></h2>
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="-ml-6 -mt-4 dark:bg-gray-700 dark:text-white scale-90"
                    />
                </div>

                {/* Event Section */}
                <div className="h-[135px] overflow-y-auto border p-4 rounded-lg dark:bg-gray-700">
                    <h2 className="text-2xl mb-2 font-bold text-center text-blue-600 dark:text-white"><span className={`${caveat.className}`}>Event</span></h2>
                    <textarea
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-600 dark:text-white"
                        placeholder="Enter description..."
                    />
                </div>

                {/* Announcement Section */}
                <div className="h-[135px] overflow-y-auto border p-4 rounded-lg dark:bg-gray-700">
                    <h2 className="text-2xl mb-2 font-bold text-center text-blue-600 dark:text-white"><span className={`${caveat.className}`}>Announcement</span></h2>
                    <textarea
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-600 dark:text-white"
                        placeholder="Enter description..."
                    />
                </div>
            </div>

            {/* Toggle Button for Mobile */}
            <button
                className="fixed top-1 right-2 z-50 bg-blue-50 text-white p-3 rounded-full shadow-lg focus:outline-none"
                onClick={() => setIsRightSectionVisible(!isRightSectionVisible)}
            >
                {isRightSectionVisible ? <X className="h-4 w-4 text-black" /> : <Menu className="h-4 w-4 text-black" />}
            </button>
        </div>
    );
};

export default Home;
