// components/DashboardHome.jsx
import Image from "next/image";
import React from "react";

const DashboardHome = ({ user }) => {

  return (
    <div className="flex flex-col items-center justify-start h-full p-8 bg-bg-light text-text-dark">
      {/* Welcome Message */}
      <h1 className="text-5xl font-bold mb-4 text-center">
        Welcome Back, <span className="text-main-yellow">{user.username}!</span>
      </h1>

      {/* Video Animation */}
      <div className="mb-8">
        <Image
          src="/feature-img.webp" // Replace with your video path
          width={400}
          height={400}
          alt=""
        />
      </div>

      {/* Description Paragraph */}
      <p className="text-xl text-center max-w-2xl mb-8 font-semibold">
        Manage your data efficiently and effectively. This dashboard provides
        you with all the tools you need to control and monitor your activities.
        Enjoy your stay!
      </p>

      
     
    </div>
  );
};

export default DashboardHome;
