import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Navbar } from './Navbar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, Star, MapPin } from 'lucide-react';
import { mockUsers } from '../data/mockData';
import type { User } from '../App';
import type { Page } from '../App';

interface SearchSkillsProps {
  currentUser: User;
  onNavigate: (page: Page, userId?: string) => void;
  onLogout: () => void;
}

export function SearchSkills({ currentUser, onNavigate }: SearchSkillsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<string>('all');

  const categories = ['all', 'Tecnología', 'Diseño', 'Arte', 'Música', 'Idiomas', 'Cocina', 'Negocios', 'Salud'];
  const levels = ['all', 'Principiante', 'Intermedio', 'Avanzado'];

  const filteredUsers = mockUsers.filter((user) => {
    // Search query filter
    const matchesSearch = searchQuery === '' || 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.skillsOffered.some(skill => 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      user.location.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory = categoryFilter === 'all' || 
      user.skillsOffered.some(skill => skill.category === categoryFilter);

    // Level filter
    const matchesLevel = levelFilter === 'all' || 
      user.skillsOffered.some(skill => skill.level === levelFilter);

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navbar currentPage="search" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-blue-900 mb-2">Buscar habilidades</h1>
          <p className="text-slate-600">
            Encuentra personas con las habilidades que quieres aprender
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Buscar por habilidad, nombre o ubicación..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'Todas las categorías' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Nivel" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level === 'all' ? 'Todos los niveles' : level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-slate-600">
            {filteredUsers.length} {filteredUsers.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Card 
              key={user.id} 
              className="hover:shadow-lg transition-all cursor-pointer border-slate-200 hover:border-blue-300"
              onClick={() => onNavigate('profile', user.id)}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    {user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-blue-900 mb-1 truncate">{user.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-slate-500 mb-2">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{user.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{user.rating}</span>
                      </div>
                      <span className="text-sm text-slate-400">•</span>
                      <span className="text-sm text-slate-600">{user.exchanges} intercambios</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{user.bio}</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-500 mb-2">Ofrece:</p>
                    <div className="flex flex-wrap gap-1">
                      {user.skillsOffered.slice(0, 3).map((skill) => (
                        <Badge 
                          key={skill.id}
                          className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                      {user.skillsOffered.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{user.skillsOffered.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 mb-2">Busca aprender:</p>
                    <div className="flex flex-wrap gap-1">
                      {user.skillsWanted.slice(0, 3).map((skill) => (
                        <Badge 
                          key={skill.id}
                          variant="outline"
                          className="text-xs border-orange-300 text-orange-700"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                      {user.skillsWanted.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{user.skillsWanted.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('profile', user.id);
                  }}
                >
                  Ver perfil completo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <Card className="mt-8">
            <CardContent className="pt-12 pb-12 text-center">
              <Search className="w-16 h-16 mx-auto mb-4 text-slate-300" />
              <h3 className="text-blue-900 mb-2">No se encontraron resultados</h3>
              <p className="text-slate-600 mb-4">
                Intenta ajustar tus filtros o términos de búsqueda
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('all');
                  setLevelFilter('all');
                }}
              >
                Limpiar filtros
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
