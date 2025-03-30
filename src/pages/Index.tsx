import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TournamentCard from '@/components/TournamentCard';
import LazyTournamentTable from '@/components/LazyTournamentTable';
import { ArrowRight, Trophy, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTournamentsList, Tournament } from '@/utils/api';

const Index = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [featuredTournament, setFeaturedTournament] = useState<Tournament | null>(null);
  
  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const data = await getTournamentsList();
        setTournaments(data);
        
        // Set featured tournament (first featured one or first in the list)
        const featured = data.find((t: any) => t.featured) || data[0];
        setFeaturedTournament(featured);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
        setLoading(false);
      }
    };
    
    fetchTournaments();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow page-transition">
        <Hero />
        
        {/* Featured Tournament Table Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ТЕКУЩЕЕ ПОЛОЖЕНИЕ В ТАБЛИЦЕ</h2>
              <div className="w-24 h-1 bg-fc-green mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Актуальные данные о положении команд в турнирной таблице
              </p>
              
              {featuredTournament && !loading && (
                <div className="inline-flex items-center text-fc-green font-medium">
                  <Trophy size={18} className="mr-2" />
                  {featuredTournament.title}
                </div>
              )}
            </div>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              {featuredTournament && !loading ? (
                <LazyTournamentTable 
                  tournamentId={featuredTournament.id} 
                  source={featuredTournament.source} 
                />
              ) : (
                <div className="min-h-[400px] flex items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-fc-green border-t-transparent"></div>
                </div>
              )}
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                to="/tournaments" 
                className="btn-primary bg-fc-green text-white px-6 py-3 inline-flex items-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                Все турнирные таблицы
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Club Values Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-fc-yellow mb-6 drop-shadow-md">ФУТБОЛ — ЭТО БОЛЬШЕ ЧЕМ ИГРА</h2>
              <div className="w-24 h-1 bg-fc-yellow mx-auto mb-6"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">Наш клуб воспитывает характер, дисциплину и командный дух</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800/50 p-8 rounded-lg border-l-4 border-fc-yellow shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-start mb-6">
                  <Trophy className="text-fc-yellow mr-4 h-10 w-10" />
                  <h3 className="text-2xl font-bold">Традиции</h3>
                </div>
                <p className="text-white/80 text-lg">
                  Богатая история и традиции нашего клуба — основа нашего развития и достижений на футбольном поле.
                </p>
              </div>
              
              <div className="bg-blue-800/50 p-8 rounded-lg border-l-4 border-fc-yellow shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-start mb-6">
                  <Users className="text-fc-yellow mr-4 h-10 w-10" />
                  <h3 className="text-2xl font-bold">Команда</h3>
                </div>
                <p className="text-white/80 text-lg">
                  Наши игроки — это единая команда профессионалов, нацеленных на результат и постоянное совершенствование.
                </p>
              </div>
              
              <div className="bg-blue-800/50 p-8 rounded-lg border-l-4 border-fc-yellow shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-start mb-6">
                  <Star className="text-fc-yellow mr-4 h-10 w-10" />
                  <h3 className="text-2xl font-bold">Развитие</h3>
                </div>
                <p className="text-white/80 text-lg">
                  Мы постоянно развиваемся, ставим амбициозные цели и достигаем новых высот в мире футбола.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Tournaments Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-fc-green pl-4">ТУРНИРЫ И СОРЕВНОВАНИЯ</h2>
                <p className="text-gray-600 max-w-2xl">
                  Следите за актуальными турнирными таблицами и результатами всех соревнований с участием нашего клуба
                </p>
              </div>
              
              <Link to="/tournaments" className="mt-4 md:mt-0 btn-secondary border-2 shadow-md hover:shadow-lg transition-all duration-300">
                Все соревнования
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                Array(3).fill(0).map((_, index) => (
                  <div key={index} className="h-72 rounded-xl bg-gray-100 animate-pulse shadow"></div>
                ))
              ) : (
                tournaments
                  .filter((tournament: any) => tournament.featured || tournament.type === 'регулярный')
                  .slice(0, 3)
                  .map((tournament: any) => (
                    <TournamentCard
                      key={tournament.id}
                      id={tournament.id}
                      title={tournament.title}
                      type={tournament.type}
                      season={tournament.season}
                      teams={tournament.teams}
                      source={tournament.source}
                      featured={tournament.featured}
                    />
                  ))
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
