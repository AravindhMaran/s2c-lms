"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Search, Layout, Shield, Mail } from 'lucide-react';

function SideBarNav() {
  const menuList = [
    {
      id: 1,
      name: 'Browse',
      icon: Search,
      path: '/browse'
    },
    {
      id: 2,
      name: 'Dashboard',
      icon: Layout,
      path: '/dashboard'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade'
    },
    {
      id: 4,
      name: 'Newsletter',
      icon: Mail,
      path: '/newsletter'
    },
  ];

  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
      <div className='p-5 border-b z-50'>     
        <Image src='/logo.png'
          alt='logo'
          width={170}
          height={100}
        />
      </div>
      <div className='flex flex-col text-left'>
        {menuList.map((item, index) => (
          <div key={index} className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer
            ${activeIndex ==index? 'bg-purple-50 text-purple-800' : null}`}
            onClick={() => setActiveIndex(index)}>
            <item.icon size={24} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBarNav;