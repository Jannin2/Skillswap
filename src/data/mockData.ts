import type { User } from '../App';

export const mockUsers: User[] = [
  {
    id: '2',
    name: 'Carlos Ruiz',
    avatar: 'CR',
    location: 'Barcelona, España',
    bio: 'Desarrollador web con pasión por la música. Toco la guitarra desde hace 10 años y me encantaría aprender fotografía.',
    skillsOffered: [
      { id: '7', name: 'Programación JavaScript', category: 'Tecnología', level: 'Avanzado' },
      { id: '8', name: 'React', category: 'Tecnología', level: 'Avanzado' },
      { id: '9', name: 'Guitarra', category: 'Música', level: 'Intermedio' },
    ],
    skillsWanted: [
      { id: '10', name: 'Fotografía', category: 'Arte', level: 'Principiante' },
      { id: '11', name: 'Italiano', category: 'Idiomas', level: 'Principiante' },
    ],
    rating: 4.9,
    exchanges: 8,
  },
  {
    id: '3',
    name: 'Laura Martínez',
    avatar: 'LM',
    location: 'Valencia, España',
    bio: 'Fotógrafa profesional y amante de los idiomas. Especializada en fotografía de retrato y paisaje.',
    skillsOffered: [
      { id: '12', name: 'Fotografía', category: 'Arte', level: 'Avanzado' },
      { id: '13', name: 'Edición con Lightroom', category: 'Tecnología', level: 'Avanzado' },
      { id: '14', name: 'Inglés', category: 'Idiomas', level: 'Avanzado' },
    ],
    skillsWanted: [
      { id: '15', name: 'Diseño Gráfico', category: 'Diseño', level: 'Intermedio' },
      { id: '16', name: 'Marketing Digital', category: 'Negocios', level: 'Principiante' },
    ],
    rating: 5.0,
    exchanges: 15,
  },
  {
    id: '4',
    name: 'Diego Santos',
    avatar: 'DS',
    location: 'Sevilla, España',
    bio: 'Chef aficionado especializado en cocina italiana y española. También doy clases de yoga los fines de semana.',
    skillsOffered: [
      { id: '17', name: 'Cocina Italiana', category: 'Cocina', level: 'Avanzado' },
      { id: '18', name: 'Cocina Española', category: 'Cocina', level: 'Avanzado' },
      { id: '19', name: 'Yoga', category: 'Salud', level: 'Intermedio' },
    ],
    skillsWanted: [
      { id: '20', name: 'Piano', category: 'Música', level: 'Principiante' },
      { id: '21', name: 'Fotografía de comida', category: 'Arte', level: 'Intermedio' },
    ],
    rating: 4.7,
    exchanges: 10,
  },
  {
    id: '5',
    name: 'Isabel Torres',
    avatar: 'IT',
    location: 'Bilbao, España',
    bio: 'Profesora de idiomas con experiencia en inglés, francés y alemán. Me encanta viajar y conocer nuevas culturas.',
    skillsOffered: [
      { id: '22', name: 'Inglés', category: 'Idiomas', level: 'Avanzado' },
      { id: '23', name: 'Francés', category: 'Idiomas', level: 'Avanzado' },
      { id: '24', name: 'Alemán', category: 'Idiomas', level: 'Intermedio' },
    ],
    skillsWanted: [
      { id: '25', name: 'Programación Python', category: 'Tecnología', level: 'Principiante' },
      { id: '26', name: 'Diseño Web', category: 'Diseño', level: 'Principiante' },
    ],
    rating: 4.8,
    exchanges: 20,
  },
  {
    id: '6',
    name: 'Miguel Ángel Pérez',
    avatar: 'MP',
    location: 'Madrid, España',
    bio: 'Ilustrador digital y diseñador UX/UI. Apasionado por crear experiencias visuales únicas.',
    skillsOffered: [
      { id: '27', name: 'Ilustración Digital', category: 'Arte', level: 'Avanzado' },
      { id: '28', name: 'Diseño UX/UI', category: 'Diseño', level: 'Avanzado' },
      { id: '29', name: 'Procreate', category: 'Tecnología', level: 'Intermedio' },
    ],
    skillsWanted: [
      { id: '30', name: 'Animación 2D', category: 'Arte', level: 'Intermedio' },
      { id: '31', name: 'Marketing en Redes Sociales', category: 'Negocios', level: 'Principiante' },
    ],
    rating: 4.9,
    exchanges: 7,
  },
  {
    id: '7',
    name: 'Sofía Jiménez',
    avatar: 'SJ',
    location: 'Granada, España',
    bio: 'Especialista en marketing digital y redes sociales. Ayudo a pequeños negocios a crecer online.',
    skillsOffered: [
      { id: '32', name: 'Marketing Digital', category: 'Negocios', level: 'Avanzado' },
      { id: '33', name: 'Marketing en Redes Sociales', category: 'Negocios', level: 'Avanzado' },
      { id: '34', name: 'SEO', category: 'Negocios', level: 'Intermedio' },
    ],
    skillsWanted: [
      { id: '35', name: 'Diseño Gráfico', category: 'Diseño', level: 'Intermedio' },
      { id: '36', name: 'Fotografía', category: 'Arte', level: 'Principiante' },
    ],
    rating: 4.6,
    exchanges: 13,
  },
];

export interface Message {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

export const mockMessages: Message[] = [
  {
    id: '1',
    userId: '3',
    userName: 'Laura Martínez',
    userAvatar: 'LM',
    lastMessage: '¡Genial! ¿Qué día te viene bien para la primera sesión de fotografía?',
    timestamp: 'Hace 5 min',
    unread: true,
  },
  {
    id: '2',
    userId: '4',
    userName: 'Diego Santos',
    userAvatar: 'DS',
    lastMessage: 'Perfecto, entonces nos vemos el sábado para la clase de cocina italiana',
    timestamp: 'Hace 2 horas',
    unread: false,
  },
  {
    id: '3',
    userId: '7',
    userName: 'Sofía Jiménez',
    userAvatar: 'SJ',
    lastMessage: 'Me interesa mucho aprender diseño gráfico, ¿te parece si intercambiamos?',
    timestamp: 'Ayer',
    unread: true,
  },
  {
    id: '4',
    userId: '2',
    userName: 'Carlos Ruiz',
    userAvatar: 'CR',
    lastMessage: 'Muchas gracias por la sesión de hoy, ¡aprendí muchísimo!',
    timestamp: 'Hace 2 días',
    unread: false,
  },
];