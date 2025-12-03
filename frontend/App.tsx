import React, { useState } from 'react';
import { Page } from './types';
import { Sidebar } from './components/Sidebar';
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/AuthPages';
import { DashboardPage, ExplorePage, ProfilePage, MyItemsPage } from './pages/DashboardPages';
import { MessagesPage, SettingsPage, UploadItemPage, MakeOfferPage } from './pages/ActionPages';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Login);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Login:
        return <LoginPage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.Register:
        return <RegisterPage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.ForgotPassword:
        return <ForgotPasswordPage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.Dashboard:
        return <DashboardPage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.Explore:
        return <ExplorePage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.Profile:
        return <ProfilePage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.MyItems:
        return <MyItemsPage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.Messages:
        return <MessagesPage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.Settings:
        return <SettingsPage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.UploadItem:
        return <UploadItemPage currentPage={currentPage} setPage={setCurrentPage} />;
      case Page.MakeOffer:
        return <MakeOfferPage currentPage={currentPage} setPage={setCurrentPage} />;
      default:
        return <LoginPage currentPage={currentPage} setPage={setCurrentPage} />;
    }
  };

  const isAuthPage = 
    currentPage === Page.Login || 
    currentPage === Page.Register || 
    currentPage === Page.ForgotPassword;

  if (isAuthPage) {
    return <>{renderPage()}</>;
  }

  return (
    <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark">
      <Sidebar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-1 overflow-y-auto h-screen relative">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
