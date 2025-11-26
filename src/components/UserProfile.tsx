import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Navbar } from './Navbar';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Star, MapPin, Award, MessageCircle, Edit2, Save, X } from 'lucide-react';
import { mockUsers } from '../data/mockData';
import type { User } from '../App';
import type { Page } from '../App';

interface UserProfileProps {
  currentUser: User;
  selectedUserId: string | null;
  onNavigate: (page: Page, userId?: string) => void;
  onLogout: () => void;
}

export function UserProfile({ currentUser, selectedUserId, onNavigate }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(currentUser.bio);
  const [editedLocation, setEditedLocation] = useState(currentUser.location);

  // Determine which user profile to show
  const isOwnProfile = !selectedUserId || selectedUserId === currentUser.id;
  const displayUser = isOwnProfile 
    ? currentUser 
    : mockUsers.find(u => u.id === selectedUserId) || currentUser;

  const handleSaveProfile = () => {
    // In a real app, this would update the user profile in the database
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedBio(currentUser.bio);
    setEditedLocation(currentUser.location);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navbar currentPage="profile" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl mx-auto md:mx-0">
                  {displayUser.avatar}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-blue-900 mb-2">{displayUser.name}</h1>
                    {isEditing ? (
                      <div className="space-y-2">
                        <div>
                          <Label htmlFor="location" className="text-sm">Ubicación</Label>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <Input
                              id="location"
                              value={editedLocation}
                              onChange={(e) => setEditedLocation(e.target.value)}
                              className="max-w-xs"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-slate-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{displayUser.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {isOwnProfile ? (
                      isEditing ? (
                        <>
                          <Button
                            onClick={handleSaveProfile}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            Guardar
                          </Button>
                          <Button
                            variant="outline"
                            onClick={handleCancelEdit}
                          >
                            <X className="w-4 h-4 mr-2" />
                            Cancelar
                          </Button>
                        </>
                      ) : (
                        <Button
                          onClick={() => setIsEditing(true)}
                          variant="outline"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                          <Edit2 className="w-4 h-4 mr-2" />
                          Editar perfil
                        </Button>
                      )
                    ) : (
                      <Button
                        onClick={() => onNavigate('messages')}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Enviar mensaje
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-slate-900">{displayUser.rating.toFixed(1)}</span>
                    <span className="text-slate-500">valoración</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-900">{displayUser.exchanges}</span>
                    <span className="text-slate-500">intercambios</span>
                  </div>
                </div>

                {isEditing ? (
                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-sm">Biografía</Label>
                    <Textarea
                      id="bio"
                      value={editedBio}
                      onChange={(e) => setEditedBio(e.target.value)}
                      rows={4}
                      placeholder="Cuéntanos sobre ti..."
                    />
                  </div>
                ) : (
                  <p className="text-slate-600">{displayUser.bio}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Offered */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-blue-900">Habilidades que ofrece</h2>
              {isOwnProfile && !isEditing && (
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Editar
                </Button>
              )}
            </div>

            {displayUser.skillsOffered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {displayUser.skillsOffered.map((skill) => (
                  <div 
                    key={skill.id}
                    className="p-4 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-blue-100/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-blue-900">{skill.name}</h3>
                      <Badge className="bg-blue-600">
                        {skill.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{skill.category}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <p>{isOwnProfile ? 'Aún no has añadido habilidades que ofreces' : 'No ha añadido habilidades aún'}</p>
                {isOwnProfile && (
                  <Button variant="outline" className="mt-4">
                    Añadir habilidad
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Skills Wanted */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-blue-900">Habilidades que quiere aprender</h2>
              {isOwnProfile && !isEditing && (
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Editar
                </Button>
              )}
            </div>

            {displayUser.skillsWanted.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {displayUser.skillsWanted.map((skill) => (
                  <div 
                    key={skill.id}
                    className="p-4 rounded-lg border border-orange-100 bg-gradient-to-r from-orange-50 to-orange-100/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-blue-900">{skill.name}</h3>
                      <Badge 
                        variant="outline"
                        className="border-orange-600 text-orange-700"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{skill.category}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <p>{isOwnProfile ? 'Aún no has añadido habilidades que quieres aprender' : 'No ha añadido habilidades aún'}</p>
                {isOwnProfile && (
                  <Button variant="outline" className="mt-4">
                    Añadir habilidad
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Match Information (for other users) */}
        {!isOwnProfile && (
          <Card className="mt-6 bg-gradient-to-r from-blue-600 to-orange-500 border-0 text-white">
            <CardContent className="pt-6">
              <h3 className="mb-3">Compatibilidad de intercambio</h3>
              <div className="space-y-2 text-sm">
                {displayUser.skillsOffered.some(skill => 
                  currentUser.skillsWanted.some(wanted => wanted.category === skill.category)
                ) && (
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {displayUser.name.split(' ')[0]} puede enseñarte habilidades que buscas
                  </p>
                )}
                {currentUser.skillsOffered.some(skill => 
                  displayUser.skillsWanted.some(wanted => wanted.category === skill.category)
                ) && (
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Puedes enseñarle habilidades que busca
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
