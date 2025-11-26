import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight, BookOpen, Users, Sparkles, MessageCircle, Lightbulb, Repeat, Heart } from 'lucide-react';

interface LandingPageProps {
  onNavigate: () => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Repeat className="w-6 h-6 text-white" />
            </div>
            <span className="text-purple-900">SkillSwap</span>
          </div>
          <Button onClick={onNavigate} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md">
            Unirme ahora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-28 pb-16 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Heart className="w-4 h-4 fill-purple-700" />
              <span className="text-sm">Comunidad colaborativa · 100% gratuito</span>
            </div>

            <h1 className="text-purple-900 mb-6 max-w-4xl mx-auto">
              Tu conocimiento vale,<br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                ¡intercámbialo por aprendizaje!
              </span>
            </h1>
            
            <p className="text-slate-700 text-xl mb-10 max-w-2xl mx-auto">
              Únete a una comunidad donde todos enseñan y todos aprenden. Sin dinero de por medio, solo pasión por compartir conocimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onNavigate}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Empezar gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={onNavigate}
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 text-lg px-8"
              >
                Iniciar sesión
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all hover:-translate-y-1">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-purple-900 mb-3">Aprende sin límites</h3>
                <p className="text-slate-600">
                  Idiomas, programación, cocina, música... Lo que quieras aprender está aquí.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all hover:-translate-y-1">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Repeat className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-purple-900 mb-3">Intercambio justo</h3>
                <p className="text-slate-600">
                  Enseña lo que sabes, aprende lo que quieres. Un intercambio equilibrado y colaborativo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all hover:-translate-y-1">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-purple-900 mb-3">Comunidad global</h3>
                <p className="text-slate-600">
                  Conecta con miles de personas que comparten tu pasión por aprender y enseñar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-purple-900 mb-4">¿Cómo funciona?</h2>
            <p className="text-slate-600 text-lg">Tres pasos simples para comenzar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl">
                  <span className="text-3xl">1</span>
                </div>
                <h3 className="text-purple-900 mb-3">Crea tu perfil</h3>
                <p className="text-slate-600">
                  Añade las habilidades que ofreces y las que quieres aprender
                </p>
              </div>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 -z-10"></div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-pink-700 rounded-3xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl">
                  <span className="text-3xl">2</span>
                </div>
                <h3 className="text-purple-900 mb-3">Encuentra tu match</h3>
                <p className="text-slate-600">
                  Conecta con personas que buscan lo que ofreces y viceversa
                </p>
              </div>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-pink-300 to-orange-300 -z-10"></div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl">
                <span className="text-3xl">3</span>
              </div>
              <h3 className="text-purple-900 mb-3">¡Intercambia!</h3>
              <p className="text-slate-600">
                Coordina tus sesiones y comienza a aprender y enseñar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-purple-900 mb-4">Historias de nuestra comunidad</h2>
            <p className="text-slate-600 text-lg">Miles de personas ya están intercambiando</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">
                    MC
                  </div>
                  <div>
                    <h4 className="text-purple-900">María Castro</h4>
                    <p className="text-sm text-slate-500">Diseño ↔ Fotografía</p>
                  </div>
                </div>
                <p className="text-slate-700">
                  "Enseñé diseño y aprendí fotografía profesional. Ahora ofrezco ambos servicios. ¡La mejor decisión!"
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-lg">
                    JL
                  </div>
                  <div>
                    <h4 className="text-purple-900">Javier López</h4>
                    <p className="text-sm text-slate-500">Programación ↔ Guitarra</p>
                  </div>
                </div>
                <p className="text-slate-700">
                  "Intercambié clases de código por lecciones de música. En 3 meses ya toco mis canciones favoritas!"
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="mb-6">Todos tenemos algo que enseñar</h2>
          <p className="text-xl mb-8 text-purple-50">
            No importa tu nivel, siempre hay alguien que quiere aprender lo que sabes. ¡Únete a la comunidad hoy!
          </p>
          
          <Button 
            onClick={onNavigate}
            size="lg"
            className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-10 shadow-xl"
          >
            Comenzar ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-purple-100 mt-6">
            ✓ Gratis para siempre  ✓ Sin tarjeta de crédito  ✓ Únete en 2 minutos
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-900 text-purple-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Repeat className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xl">SkillSwap</span>
          </div>
          <p className="text-purple-200 mb-2">El conocimiento se intercambia, no se compra</p>
          <p className="text-sm">Una comunidad colaborativa para aprender y enseñar</p>
        </div>
      </footer>
    </div>
  );
}