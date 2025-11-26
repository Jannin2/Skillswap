import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, Sparkles } from 'lucide-react';
import type { User } from '../App';

interface AuthPageProps {
  onLogin: (user: User) => void;
  onBack: () => void;
}

export function AuthPage({ onLogin, onBack }: AuthPageProps) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - create a demo user
    const demoUser: User = {
      id: '1',
      name: 'Ana García',
      avatar: 'AG',
      location: 'Madrid, España',
      bio: 'Diseñadora gráfica apasionada por la fotografía y la cocina italiana. Me encanta aprender y compartir conocimientos.',
      skillsOffered: [
        { id: '1', name: 'Diseño Gráfico', category: 'Diseño', level: 'Avanzado' },
        { id: '2', name: 'Adobe Photoshop', category: 'Diseño', level: 'Avanzado' },
        { id: '3', name: 'Ilustración Digital', category: 'Arte', level: 'Intermedio' },
      ],
      skillsWanted: [
        { id: '4', name: 'Fotografía', category: 'Arte', level: 'Intermedio' },
        { id: '5', name: 'Cocina Italiana', category: 'Cocina', level: 'Principiante' },
        { id: '6', name: 'Marketing Digital', category: 'Negocios', level: 'Principiante' },
      ],
      rating: 4.8,
      exchanges: 12,
    };
    onLogin(demoUser);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - create a new user
    const newUser: User = {
      id: '1',
      name: registerName || 'Nuevo Usuario',
      avatar: (registerName || 'NU').substring(0, 2).toUpperCase(),
      location: 'Por definir',
      bio: 'Nuevo en SkillSwap, ¡listo para aprender y enseñar!',
      skillsOffered: [],
      skillsWanted: [],
      rating: 5.0,
      exchanges: 0,
    };
    onLogin(newUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Volver
        </Button>

        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-8 h-8 text-blue-600" />
          <span className="text-blue-900 text-2xl">SkillSwap</span>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Iniciar sesión</TabsTrigger>
            <TabsTrigger value="register">Registrarse</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Bienvenido de nuevo</CardTitle>
                <CardDescription>
                  Ingresa tus credenciales para acceder a tu cuenta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Correo electrónico</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="tu@email.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Contraseña</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    Iniciar sesión
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Crear cuenta</CardTitle>
                <CardDescription>
                  Comienza a intercambiar conocimientos hoy mismo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Nombre completo</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Tu nombre"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Correo electrónico</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="tu@email.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Contraseña</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    Crear cuenta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <p className="text-center text-sm text-slate-500 mt-6">
          Al continuar, aceptas nuestros términos y condiciones
        </p>
      </div>
    </div>
  );
}
