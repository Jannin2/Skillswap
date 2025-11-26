import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Navbar } from './Navbar';
import { Send, MessageCircle } from 'lucide-react';
import { mockMessages } from '../data/mockData';
import type { User } from '../App';
import type { Page } from '../App';

interface MessagesProps {
  currentUser: User;
  onNavigate: (page: Page, userId?: string) => void;
  onLogout: () => void;
}

export function Messages({ currentUser, onNavigate }: MessagesProps) {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(
    mockMessages.length > 0 ? mockMessages[0].id : null
  );
  const [messageText, setMessageText] = useState('');

  const currentConversation = mockMessages.find(m => m.id === selectedConversation);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // In a real app, this would send the message to the backend
      setMessageText('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navbar currentPage="messages" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-blue-900 mb-2">Mensajes</h1>
          <p className="text-slate-600">
            Conversa con otros usuarios y coordina tus intercambios de habilidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-300px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 overflow-hidden flex flex-col">
            <CardContent className="pt-6 flex-1 overflow-y-auto">
              {mockMessages.length > 0 ? (
                <div className="space-y-2">
                  {mockMessages.map((message) => (
                    <button
                      key={message.id}
                      onClick={() => setSelectedConversation(message.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        selectedConversation === message.id
                          ? 'bg-blue-100 border-2 border-blue-600'
                          : 'bg-white hover:bg-slate-50 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                          {message.userAvatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="text-blue-900 truncate">{message.userName}</h4>
                            {message.unread && (
                              <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                            )}
                          </div>
                          <p className="text-sm text-slate-600 truncate">{message.lastMessage}</p>
                          <p className="text-xs text-slate-400 mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-slate-500">
                  <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No tienes conversaciones aún</p>
                  <p className="text-sm mt-2">Busca usuarios y comienza a intercambiar</p>
                  <Button 
                    className="mt-4"
                    onClick={() => onNavigate('search')}
                  >
                    Buscar usuarios
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Conversation View */}
          <Card className="lg:col-span-2 overflow-hidden flex flex-col">
            {currentConversation ? (
              <>
                {/* Conversation Header */}
                <div className="border-b border-slate-200 p-4">
                  <button
                    onClick={() => onNavigate('profile', currentConversation.userId)}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white">
                      {currentConversation.userAvatar}
                    </div>
                    <div className="text-left">
                      <h3 className="text-blue-900">{currentConversation.userName}</h3>
                      <p className="text-sm text-slate-500">Haz clic para ver perfil</p>
                    </div>
                  </button>
                </div>

                {/* Messages Area */}
                <CardContent className="flex-1 overflow-y-auto pt-6">
                  <div className="space-y-4">
                    {/* Sample messages */}
                    <div className="flex justify-end">
                      <div className="max-w-[70%] bg-blue-600 text-white rounded-lg p-3">
                        <p>Hola, me interesa mucho aprender fotografía. ¿Podrías enseñarme?</p>
                        <p className="text-xs text-blue-100 mt-1">10:30 AM</p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-[70%] bg-white border border-slate-200 rounded-lg p-3">
                        <p>¡Hola! Claro que sí, estaría encantada. ¿Qué te gustaría aprender a cambio?</p>
                        <p className="text-xs text-slate-400 mt-1">10:32 AM</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="max-w-[70%] bg-blue-600 text-white rounded-lg p-3">
                        <p>Puedo enseñarte diseño gráfico y Adobe Photoshop</p>
                        <p className="text-xs text-blue-100 mt-1">10:35 AM</p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-[70%] bg-white border border-slate-200 rounded-lg p-3">
                        <p>{currentConversation.lastMessage}</p>
                        <p className="text-xs text-slate-400 mt-1">{currentConversation.timestamp}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Message Input */}
                <div className="border-t border-slate-200 p-4">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Escribe un mensaje..."
                      className="flex-1"
                    />
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <CardContent className="flex-1 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Selecciona una conversación para comenzar</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
