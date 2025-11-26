import { Button } from './ui/button';
import { Sparkles, Search, Home, MessageSquare, User, Settings } from 'lucide-react';
import type { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const navItems = [
    { page: 'dashboard' as Page, icon: Home, label: 'Inicio' },
    { page: 'search' as Page, icon: Search, label: 'Buscar' },
    { page: 'messages' as Page, icon: MessageSquare, label: 'Mensajes' },
    { page: 'profile' as Page, icon: User, label: 'Perfil' },
    { page: 'settings' as Page, icon: Settings, label: 'Ajustes' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="text-blue-900">SkillSwap</span>
          </button>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              return (
                <Button
                  key={item.page}
                  variant={isActive ? 'default' : 'ghost'}
                  onClick={() => onNavigate(item.page)}
                  className={
                    isActive
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          <div className="flex md:hidden gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              return (
                <Button
                  key={item.page}
                  variant={isActive ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onNavigate(item.page)}
                  className={
                    isActive
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'text-slate-600 hover:text-blue-600'
                  }
                >
                  <Icon className="w-4 h-4" />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
