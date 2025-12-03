import React from 'react';
import { Page, NavigationProps } from '../types';

export const Sidebar: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const navItems = [
    { page: Page.Dashboard, icon: 'home', label: 'Inicio' },
    { page: Page.MyItems, icon: 'package_2', label: 'Mis Artículos' },
    { page: Page.Explore, icon: 'search', label: 'Explorar' },
    { page: Page.Messages, icon: 'mark_email_unread', label: 'Mensajes' },
    { page: Page.Profile, icon: 'person', label: 'Perfil' },
    { page: Page.Settings, icon: 'settings', label: 'Configuración' },
  ];

  return (
    <aside className="sticky top-0 hidden h-screen w-64 flex-col bg-card-light dark:bg-card-dark p-4 md:flex border-r border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex items-center gap-3 py-2 px-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1VGLnotEvh4uk6HDAzaOJ9ias7fQRcZeJ_AW_H-BcBt7JnDFQZ72TtrJes0ZwRvY-FkRM1PjAefCN5Y9fTriuLy3mhrHMFfytD3bwlS-LfCZG1D0FRPHVbbU3e33VZx_L_bO7zyhCXmU5VeOPHrKrnFhaMHK3pnSIGnVpBqI5qJh7EI-D44UUAd1hxK0CraTOXuXLNm0cqIDG2PR_YDam_GQHaw_m9qzqgRkRVlfiyKmiDLIs7xJUxUGQdFBgscJoz6qEMgHLDvgM')"
            }}
          ></div>
          <h1 className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">
            Truekealo
          </h1>
        </div>
        
        <nav className="flex flex-col gap-2 mt-4">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setPage(item.page)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full text-left ${
                currentPage === item.page
                  ? 'bg-active-light dark:bg-active-dark text-primary font-bold'
                  : 'text-text-light dark:text-text-dark hover:bg-active-light dark:hover:bg-active-dark font-medium'
              }`}
            >
              <span className={`material-symbols-outlined ${currentPage === item.page ? 'filled' : ''}`}>
                {item.icon}
              </span>
              <p className="text-sm leading-normal">{item.label}</p>
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setPage(Page.UploadItem)}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] mt-auto hover:bg-opacity-90 transition-opacity"
        >
          <span className="truncate">Subir Ítem</span>
        </button>
      </div>
    </aside>
  );
};
