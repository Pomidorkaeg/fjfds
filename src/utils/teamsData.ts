
import { Team } from '@/types/team';

// In a production environment, this would be fetched from a database
let teams: Team[] = [
  {
    id: 'gudauta',
    name: 'ФК Гудаута',
    shortName: 'Гудаута',
    logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    primaryColor: '#2e7d32',
    secondaryColor: '#ffeb3b',
    description: 'Футбольный клуб Гудаута - профессиональная команда с богатой историей и традициями. Основанный в 1997 году, клуб стал символом спортивной гордости региона и воспитал несколько поколений талантливых футболистов. Наша философия - атакующий футбол, дисциплина и командный дух.',
    foundedYear: 1997,
    stadium: 'Стадион имени А.П. Соколова',
    achievements: [
      'Чемпион региональной лиги 2020',
      'Финалист Кубка области 2019',
      'Победитель турнира "Золотая осень" 2021'
    ],
    coach: 'Сергей Павлович Иванов',
    address: 'ул. Спортивная, 15, г. Гудаута',
    socialLinks: {
      website: 'https://fcgudauta.example.com',
      instagram: 'https://instagram.com/fcgudauta',
      facebook: 'https://facebook.com/fcgudauta'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1508098682722-e99c643e7f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'gudauta-school',
    name: 'СШ Гудаута',
    shortName: 'СШ Гудаута',
    logo: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    primaryColor: '#0277bd',
    secondaryColor: '#ff9800',
    description: 'Спортивная школа Гудаута - кузница молодых футбольных талантов, где юные спортсмены получают качественное футбольное образование. Наша миссия - выявлять и развивать молодых футболистов, прививая им не только спортивные навыки, но и важные жизненные ценности: трудолюбие, командный дух и стремление к самосовершенствованию.',
    foundedYear: 2005,
    stadium: 'Тренировочный центр "Молодёжный"',
    achievements: [
      'Победитель юношеского первенства 2022',
      'Лауреат премии "Лучшая спортивная школа" 2021',
      'Участник международного юношеского турнира Euro Youth Cup 2023'
    ],
    coach: 'Дмитрий Александрович Сидоров',
    address: 'ул. Молодёжная, 8, г. Гудаута',
    socialLinks: {
      website: 'https://schoolgudauta.example.com',
      instagram: 'https://instagram.com/schoolgudauta'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

// Get all teams
export const getTeamsData = (): Team[] => {
  return [...teams];
};

// Get a specific team by ID
export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

// Update a team
export const updateTeam = (updatedTeam: Team): void => {
  teams = teams.map(team => 
    team.id === updatedTeam.id ? updatedTeam : team
  );
};
