"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"; // For schedule
import Sidebar from "./sidebar";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });


// Define the types of the props that the component will accept
type ProfileData = {
  avatar: string;
  name: string;
  department: string;
  dateOfBirth: string;
  email: string;
  description: string;
};

type ScheduleData = {
  day: string;
  task: string;
};

type GlobalLayoutProps = {
  profileData: ProfileData | null;
  scheduleData: ScheduleData[] | null;
  loading: boolean;
};

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ profileData, scheduleData, loading }) => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="sm:ml-64 min-h-screen">
        <div className="flex">
        {/* Left Section (Profile Card) */}
        <div className="w-5/12 p-6 space-y-6 ">
          <Card className="bg-blue-100">
            <div className="flex justify-start p-4 space-x-6">
                {/* Avatar and Profile Information */}
            {loading ? (
              <Skeleton className="h-24 w-24 rounded-full" />
            ) : (
              // Sample SVG Avatar
              <div className="h-24 w-24 rounded-full p-4 bg-gray-300 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="50" cy="50" r="50" fill="#E5E7EB" />
                  <path d="M50 35 C50 45 60 55 50 65 C40 55 50 45 50 35" fill="#FFFFFF"/>
                  <path d="M35 60 C35 50 65 50 65 60" fill="#FFFFFF"/>
                </svg>
              </div>
            )}
            <div className="mt-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {loading ? <Skeleton className="h-6 w-1/2" /> : profileData?.name}
              </h2>
              {loading ? (
                <Skeleton className="h-6 w-3/4" />
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-300">{profileData?.description}</p>
              )}
            </div>
            </div>
            <div className="space-y-4 mt-4 p-4 pt-0">
              {loading ? <Skeleton className="h-4 w-3/4" /> : <p>Department: {profileData?.department}</p>}
              {loading ? <Skeleton className="h-4 w-3/4" /> : <p>Date of Birth: {profileData?.dateOfBirth}</p>}
              {loading ? <Skeleton className="h-4 w-3/4" /> : <p>Email: {profileData?.email}</p>}
            </div>
          </Card>
        </div>

        {/* Right Section */}
        <div className="w-2/4 p-6 space-y-6">
          {/* Cards with Skeleton Loaders */}
          <div className="grid grid-cols-2 gap-6 h-64 mt-1">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="p-4">
                {loading ? <Skeleton className="w-60" /> : <div>Card Content {index + 1}</div>}
              </Card>
            ))}
          </div>
        </div>
        </div>
        {/* Weekly Schedule Table Below Both Sections */}
      <div className="p-6">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100"><span className={`${caveat.className}`}>Weekly Schedule</span></h3>
        <Table className="mt-4">
          <TableBody>
            {scheduleData?.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{loading ? <Skeleton className="h-4 w-12" /> : item?.day}</TableCell>
                <TableCell>{loading ? <Skeleton className="h-4 w-24" /> : item?.task}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </div>
    </div>
  );
};

export default GlobalLayout;
