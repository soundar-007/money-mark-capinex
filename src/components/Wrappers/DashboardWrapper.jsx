import React from 'react';
import SidebarComp from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
export default function DashboardWrapper({children}) {
    return (
        <div className="flex min-h-screen w-full overflow-auto">
          {/* Sidebar Component */}
          <SidebarComp />
          {/* Main content dynamically adjusted using Tailwind */}
          <main className="flex1 w-full flex flex-col transition-all duration-300 ml-16 lg:ml-64  overflow-auto">
            <Header />
            <div className="p-4 flex-1">{children}</div>
            <Footer />
          </main>
          <button className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full">
           Show Chat
      </button> 
          
        </div>
      );
}