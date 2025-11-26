import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Navbar } from './Navbar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { LogOut, Bell, Globe, Shield, User } from 'lucide-react';
import type { User } from '../App';
import type { Page } from '../App';

interface SettingsProps {
  currentUser: User;
  onNavigate: (page: Page, userId?: string) => void;
  onLogout: () => void;
}

export function Settings({ onNavigate, onLogout }: SettingsProps) {
  const [language, setLanguage] = useState('es');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [messageNotifications, setMessageNotifications] = useState(true);
  const [exchangeNotifications, setExchangeNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navbar currentPage="settings" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-blue-900 mb-2">Configuración</h1>
          <p className="text-slate-600">
            Administra tus preferencias y configuración de la cuenta
          </p>
        </div>

        <div className="space-y-6">
          {/* Account Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                <CardTitle>Cuenta</CardTitle>
              </div>
              <CardDescription>
                Administra la información de tu cuenta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <p className="text-slate-900">Correo electrónico</p>
                  <p className="text-sm text-slate-500">usuario@email.com</p>
                </div>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  Cambiar
                </Button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <p className="text-slate-900">Contraseña</p>
                  <p className="text-sm text-slate-500">••••••••</p>
                </div>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  Cambiar
                </Button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-slate-900">Verificación de dos factores</p>
                  <p className="text-sm text-slate-500">Añade una capa extra de seguridad</p>
                </div>
                <Button variant="outline">
                  Activar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <CardTitle>Idioma y región</CardTitle>
              </div>
              <CardDescription>
                Configura tu idioma y preferencias regionales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="language">Idioma</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-blue-600" />
                <CardTitle>Notificaciones</CardTitle>
              </div>
              <CardDescription>
                Administra cómo y cuándo recibir notificaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Notificaciones por correo</Label>
                  <p className="text-sm text-slate-500">
                    Recibe actualizaciones y novedades por email
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="message-notifications">Mensajes nuevos</Label>
                  <p className="text-sm text-slate-500">
                    Notificaciones cuando recibas mensajes
                  </p>
                </div>
                <Switch
                  id="message-notifications"
                  checked={messageNotifications}
                  onCheckedChange={setMessageNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="exchange-notifications">Solicitudes de intercambio</Label>
                  <p className="text-sm text-slate-500">
                    Cuando alguien quiera intercambiar contigo
                  </p>
                </div>
                <Switch
                  id="exchange-notifications"
                  checked={exchangeNotifications}
                  onCheckedChange={setExchangeNotifications}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <CardTitle>Privacidad y seguridad</CardTitle>
              </div>
              <CardDescription>
                Controla quién puede ver tu información
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <p className="text-slate-900">Visibilidad del perfil</p>
                  <p className="text-sm text-slate-500">Quién puede ver tu perfil completo</p>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="connected">Solo conexiones</SelectItem>
                    <SelectItem value="none">Nadie</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <p className="text-slate-900">Mostrar ubicación</p>
                  <p className="text-sm text-slate-500">Muestra tu ubicación en tu perfil</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-slate-900">Mostrar estadísticas</p>
                  <p className="text-sm text-slate-500">Muestra intercambios y valoraciones</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700">Zona de peligro</CardTitle>
              <CardDescription>
                Acciones irreversibles sobre tu cuenta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <p className="text-slate-900">Desactivar cuenta</p>
                  <p className="text-sm text-slate-500">Desactiva temporalmente tu cuenta</p>
                </div>
                <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                  Desactivar
                </Button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-slate-900">Eliminar cuenta</p>
                  <p className="text-sm text-slate-500">Elimina permanentemente tu cuenta y datos</p>
                </div>
                <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Logout Button */}
          <Card className="bg-gradient-to-r from-blue-600 to-orange-500 border-0 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-1">Cerrar sesión</h3>
                  <p className="text-sm text-blue-50">
                    Cierra tu sesión en este dispositivo
                  </p>
                </div>
                <Button 
                  onClick={onLogout}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Cerrar sesión
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
