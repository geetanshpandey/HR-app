'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NavbarSidebar from "@/components/main/navbarsidebar";
import { useRouter } from "next/navigation";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

type Box = {
  id: number;
  name: string;
  date: string;
};

const Home = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const router = useRouter();

  const handleAddBox = () => {
    const newBox: Box = {
      id: Date.now(),
      name: `Board ${boxes.length + 1}`,
      date: new Date().toLocaleDateString(),
    };
    setBoxes([...boxes, newBox]);
  };

  const handleBoxClick = (id: number) => {
    router.push(`/board/${id}`);
  };

  const handleSave = () => {
    console.log("Saved:", { username, password, role });
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      {/* Sidebar */}
      <NavbarSidebar />

      <div className="text-center mt-28 mb-8">
        <h1 className="text-5xl font-semibold mb-2 text-blue-600"><span className={`${caveat.className}`}>Welcome to the Dashboard</span></h1>
        <p className="text-2xl text-gray-500"><span className={`${caveat.className}`}>Manage your boards and users efficiently</span></p>
      </div>

      {/* Form */}
      <div className="mt-2 max-w-lg w-full bg-white p-6 rounded-lg shadow-lg mb-4 transform scale-90">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create User</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              id="role"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">HR</option>
              <option value="User">Team leader</option>
              <option value="User">Employee</option>
            </select>
          </div>

          <div className='flex justify-center text-center'>
          <Button onClick={handleSave} className="w-20 mt-4 bg-blue-600">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
