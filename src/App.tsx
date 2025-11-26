import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/AuthPage';
import { Dashboard } from './components/Dashboard';
import { SearchSkills } from './components/SearchSkills';
import { UserProfile } from './components/UserProfile';
import { Messages } from './components/Messages';
import { Settings } from './components/Settings';

export type Page = 'landing' | 'auth' | 'dashboard' | 'search' | 'profile' | 'messages' | 'settings';

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  location: string;
  bio: string;
  skillsOffered: Skill[];
  skillsWanted: Skill[];
  rating: number;
  exchanges: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('landing');
  };

  const navigateTo = (page: Page, userId?: string) => {
    setCurrentPage(page);
    if (userId) {
      setSelectedUserId(userId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {currentPage === 'landing' && (
        <LandingPage onNavigate={() => navigateTo('auth')} />
      )}
      {currentPage === 'auth' && (
        <AuthPage onLogin={handleLogin} onBack={() => navigateTo('landing')} />
      )}
      {currentPage === 'dashboard' && currentUser && (
        <Dashboard 
          user={currentUser} 
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'search' && currentUser && (
        <SearchSkills 
          currentUser={currentUser}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'profile' && currentUser && (
        <UserProfile 
          currentUser={currentUser}
          selectedUserId={selectedUserId}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'messages' && currentUser && (
        <Messages 
          currentUser={currentUser}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'settings' && currentUser && (
        <Settings 
          currentUser={currentUser}
          onNavigate={navigateTo}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
