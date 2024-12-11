"use client";
import React, { useEffect, useState } from "react";
import GlobalLayout from "@/components/main/globalfile2nd"; // Make sure path is correct

const HomePage: React.FC = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [scheduleData, setScheduleData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from an API or any data source
    const fetchData = async () => {
      setLoading(true);
      // Simulating fetching data with a delay
      setTimeout(() => {
        setProfileData({
          avatar: "/path/to/avatar.jpg", // Replace with actual path or URL
          name: "Alice",
          department: "HR",
          dateOfBirth: "01/01/1990",
          email: "alice@example.com",
          description: "HR Manager",
        });
        setScheduleData([
          { day: "Monday", task: "Team Meeting" },
          { day: "Tuesday", task: "Client Call" },
          { day: "Wednesday", task: "Project Update" },
          { day: "Thursday", task: "One-on-One Meetings" },
          { day: "Friday", task: "Team Wrap-up" },
        ]);
        setLoading(false);
      }, 2000);
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <GlobalLayout profileData={profileData} scheduleData={scheduleData} loading={loading} />
    </div>
  );
};

export default HomePage;
