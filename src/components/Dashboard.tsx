import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Navbar } from './Navbar';
import { Star, ArrowRight, Users, BookOpen, TrendingUp } from 'lucide-react';
import { mockUsers } from '../data/mockData';
import type { User } from '../App';
import type { Page } from '../App';

interface DashboardProps {
  user: User;
  onNavigate: (page: Page, userId?: string) => void;
  onLogout: () => void;
}

export function Dashboard({ user, onNavigate }: DashboardProps) {
  // Find compatible users (users who want what we offer or offer what we want)
  const compatibleUsers = mockUsers.filter((otherUser) => {
    const theyWantWhatWeOffer = otherUser.skillsWanted.some((wantedSkill) =>
      user.skillsOffered.some((offeredSkill) => 
        offeredSkill.category === wantedSkill.category
      )
    );
    const weWantWhatTheyOffer = user.skillsWanted.some((wantedSkill) =>
      otherUser.skillsOffered.some((offeredSkill) => 
        offeredSkill.category === wantedSkill.category
      )
    );
    return theyWantWhatWeOffer || weWantWhatTheyOffer;
  }).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navbar currentPage="dashboard" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-blue-900 mb-2">¡Hola, {user.name.split(' ')[0]}! 👋</h1>
          <p className="text-slate-600">
            Bienvenido a tu dashboard. Aquí encontrarás sugerencias personalizadas y tu actividad reciente.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-blue-100">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Intercambios realizados</p>
                  <p className="text-blue-900">{user.exchanges}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Habilidades ofrecidas</p>
                  <p className="text-blue-900">{user.skillsOffered.length}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Valoración</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-blue-900">{user.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Compatible Users */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Usuarios compatibles</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onNavigate('search')}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  Ver todos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {compatibleUsers.length > 0 ? (
                compatibleUsers.map((compatibleUser) => (
                  <div
                    key={compatibleUser.id}
                    className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-pointer"
                    onClick={() => onNavigate('profile', compatibleUser.id)}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {compatibleUser.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-blue-900 truncate">{compatibleUser.name}</h4>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-slate-600">{compatibleUser.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 mb-2">{compatibleUser.location}</p>
                      <div className="flex flex-wrap gap-1">
                        {compatibleUser.skillsOffered.slice(0, 2).map((skill) => (
                          <Badge key={skill.id} variant="secondary" className="text-xs">
                            {skill.name}
                          </Badge>
                        ))}
                        {compatibleUser.skillsOffered.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{compatibleUser.skillsOffered.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No hay usuarios compatibles aún.</p>
                  <p className="text-sm">Agrega más habilidades a tu perfil.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Your Skills Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Tus habilidades</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onNavigate('profile', user.id)}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  Editar perfil
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm text-slate-500 mb-3">Habilidades que ofreces</h4>
                {user.skillsOffered.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {user.skillsOffered.map((skill) => (
                      <Badge 
                        key={skill.id} 
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                      >
                        {skill.name}
                        <span className="ml-1 text-xs opacity-80">({skill.level})</span>
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-400 italic">No has añadido habilidades todavía</p>
                )}
              </div>

              <div>
                <h4 className="text-sm text-slate-500 mb-3">Habilidades que quieres aprender</h4>
                {user.skillsWanted.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {user.skillsWanted.map((skill) => (
                      <Badge 
                        key={skill.id} 
                        variant="outline"
                        className="border-orange-300 text-orange-700"
                      >
                        {skill.name}
                        <span className="ml-1 text-xs opacity-80">({skill.level})</span>
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-400 italic">No has añadido habilidades todavía</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-6 bg-gradient-to-r from-blue-600 to-orange-500 border-0 text-white">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="mb-2">¿Listo para aprender algo nuevo?</h3>
                <p className="text-blue-50">
                  Explora usuarios con habilidades que te interesan y comienza a intercambiar conocimiento
                </p>
              </div>
              <Button 
                onClick={() => onNavigate('search')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 flex-shrink-0"
              >
                Buscar habilidades
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
