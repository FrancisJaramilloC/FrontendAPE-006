export enum Page {
  Login = 'Login',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
  Dashboard = 'Dashboard',
  Explore = 'Explore',
  MyItems = 'MyItems',
  Messages = 'Messages',
  Profile = 'Profile',
  Settings = 'Settings',
  UploadItem = 'UploadItem',
  MakeOffer = 'MakeOffer'
}

export interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export interface User {
  name: string;
  avatar: string;
  location?: string;
  rating?: number;
}
