import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Instagram, 
  Menu, 
  X, 
  Clock, 
  Heart,
  ExternalLink,
  Calendar as CalendarIcon,
  Star
} from 'lucide-react';

export default function TerreiroSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: 'Início', href: '#inicio' },
    { name: 'A Casa', href: '#sobre' },
    { name: 'Nossa Liderança', href: '#lideranca' },
    { name: 'Calendário 2026', href: '#calendario' },
    { name: 'Localização', href: '#contato' },
  ];

  // Dados Exatos do Calendário 2026 (Baseado no Flyer enviado)
  const nextEvents = [
    { date: '21 FEV', title: 'Gira', type: 'Gira', time: '19:00', highlight: false },
    { date: '07 MAR', title: 'Festa de Caboclo', type: 'Festa', time: '19:00', highlight: true },
    { date: '21 MAR', title: 'Gira', type: 'Gira', time: '19:00', highlight: false },
    { date: '04 ABR', title: 'Alvorada', type: 'Cerimônia', time: '05:00', highlight: true },
    { date: '16 MAI', title: 'Gira', type: 'Gira', time: '19:00', highlight: false },
  ];

  const yearHighlights = [
    { month: 'Agosto', date: '05 e 22', title: 'Mês de Tempo (Kitembo)', desc: 'Gira e Celebração' },
    { month: 'Setembro', date: '12', title: 'Festa Cigana', desc: 'Alegria e prosperidade do Povo do Oriente' },
    { month: 'Outubro', date: '17', title: 'Festa de Erê', desc: 'Cosme, Damião e Doum' },
    { month: 'Novembro', date: '07', title: 'Festa de Padilha', desc: 'Homenagem à Guardiã (Corte dia 05)' },
    { month: 'Dezembro', date: '19', title: 'Yabás (Encerramento)', desc: 'Homenagem às Mães D\'Água' },
  ];

  return (
    <div className="font-sans text-stone-800 bg-stone-50 min-h-screen flex flex-col">
      
      {/* Header / Navbar */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="font-bold text-xl text-stone-800 tracking-tight">Nzo Civamuxi</span>
              <span className="text-xs text-stone-500 font-medium tracking-widest uppercase">Tenda Caboclo Águia Branca</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-stone-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-stone-600 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-stone-600 hover:text-amber-600 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 h-[600px] flex items-center justify-center bg-stone-900 overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 bg-stone-900 opacity-60 z-10"></div>
        {/* Imagem de Fundo: Bandeira de Angola */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg')] bg-cover bg-center opacity-50"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto text-white">
          <div className="inline-block border border-white/30 px-4 py-1 rounded-full text-xs uppercase tracking-[0.2em] mb-4 bg-white/10 backdrop-blur-sm">
            Fundado em 2018
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2 leading-tight">
            Nzo Civamuxi
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 opacity-90">
            Tenda Caboclo Águia Branca
          </h2>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto font-light">
            Um espaço de fé, caridade e conexão ancestral em Contenda - Paraná.
            Unindo a força da Umbanda e a tradição do Candomblé de Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#calendario" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors">
              Ver Calendário 2026
            </a>
            {/* Botão Fale Conosco linkado ao WhatsApp */}
            <a 
              href="https://wa.me/5541997430059" 
              target="_blank" 
              rel="noreferrer"
              className="bg-transparent border border-white hover:bg-white hover:text-stone-900 text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wide transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* Sobre a Casa (Dualidade) */}
      <section id="sobre" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold text-sm uppercase tracking-widest">Nossa História</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mt-2">Duas Vertentes, Uma Só Fé</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
                <h3 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  A Umbanda
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Mametu Vanju trabalha com as entidades há mais de 30 anos. Sua trajetória espiritual passou pela Mesa Branca, Kardecismo e Espiritismo, até encontrar na Umbanda, sob a proteção do Caboclo Águia Branca e sua guardiã Maria Padilha das Almas, o caminho para exercer sua mediunidade e caridade.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
                <h3 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                  O Candomblé
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  O Nzo Civamuxi preserva as raízes e tradições da nação Angola. Cultuamos os inquices (Nkisis) com respeito aos fundamentos ancestrais, mantendo viva a cultura banto em solo paranaense.
                </p>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
              {/* FOTO DO CONGÁ / BARRACÃO 
                  Importante: Salve a foto do congá na pasta 'public' do projeto com o nome 'conga.jpg'
              */}
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg bg-stone-200">
                <img 
                  src="/conga.jpg" 
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=2670&auto=format&fit=crop'; // Fallback se a imagem não existir
                    e.target.alt = "Imagem provisória do Congá";
                  }}
                  alt="Congá e Barracão Nzo Civamuxi com bandeiras e atabaques" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-stone-200/50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section id="lideranca" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-10">
            <div className="w-48 h-48 mx-auto bg-stone-200 rounded-full mb-6 overflow-hidden border-4 border-stone-50 shadow-lg relative ring-2 ring-amber-100">
               {/* FOTO DA MAMETU VANJU 
                   Importante: Salve a foto dela na pasta 'public' do projeto com o nome 'mametu.jpg'
               */}
               <img 
                 src="/mametu.jpg"
                 onError={(e) => {
                   e.target.src = 'https://via.placeholder.com/400x400?text=Mametu+Vanju'; // Fallback
                 }}
                 alt="Mametu Vanju paramentada como Filha de Matamba" 
                 className="w-full h-full object-cover object-top"
               />
            </div>
            <h3 className="text-2xl font-bold text-stone-800">Mametu Vanju</h3>
            <p className="text-amber-600 font-medium mb-4">Mãe Inês</p>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Iniciada por Tateto Nkosi Kivonda no ano de 2011, como filha de Matamba. Trabalha com consultas espirituais e jogos de búzios, guiando os filhos da casa com sabedoria e fundamento.
            </p>
          </div>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-8 opacity-50"></div>
          <p className="text-lg text-stone-600 leading-relaxed italic font-serif">
            "A religião é o elo que nos liga ao sagrado, mas é o amor e o respeito ao próximo que nos mantém firmes no caminho. Nossa casa está de portas abertas para todos que buscam luz e conforto."
          </p>
        </div>
      </section>

      {/* Calendário 2026 */}
      <section id="calendario" className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-amber-600 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <CalendarIcon size={16} /> Agenda 2026
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-800 mt-2">Próximas Atividades</h2>
            </div>
          </div>

          {/* Grid de Próximos Eventos (Fevereiro a Maio) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {nextEvents.map((event, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden ${event.highlight ? 'bg-white border-amber-200' : 'bg-white border-stone-100'}`}
              >
                {event.highlight && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Especial
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-center p-3 rounded-lg min-w-[70px] ${event.highlight ? 'bg-amber-50 text-amber-700' : 'bg-stone-100 text-stone-600'}`}>
                    <span className="block text-xs font-bold uppercase">{event.date.split(' ')[1]}</span>
                    <span className="block text-2xl font-bold">{event.date.split(' ')[0]}</span>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    event.type === 'Festa' ? 'bg-amber-100 text-amber-700' : 
                    event.type === 'Cerimônia' ? 'bg-purple-100 text-purple-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <h4 className={`text-lg font-bold mb-2 group-hover:text-amber-600 transition-colors ${event.highlight ? 'text-stone-900' : 'text-stone-700'}`}>
                  {event.title}
                </h4>
                
                <div className="flex items-center gap-2 text-stone-500 text-sm">
                  <Clock size={14} />
                  <span>Início às {event.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Destaques do Ano Restante (Junho a Dezembro) */}
          <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-8">
            <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              <Star className="text-amber-500" size={20} /> Destaques do Segundo Semestre
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {yearHighlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-4 border-b border-stone-50 last:border-0">
                  <div className="bg-stone-100 text-stone-600 font-bold rounded px-2 py-1 text-sm h-fit whitespace-nowrap">
                    {item.date} {item.month.substring(0, 3).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">{item.title}</h4>
                    <p className="text-sm text-stone-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-amber-50 rounded-lg text-sm text-amber-800 border border-amber-100 text-center">
              * Giras comuns acontecem quinzenalmente aos sábados. Consulte o WhatsApp para confirmar.
            </div>
          </div>
          
        </div>
      </section>

      {/* Localização e Footer */}
      <footer id="contato" className="bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Contato Info */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-amber-600" /> Onde Estamos
              </h3>
              <p className="mb-4">
                Estamos localizados em Contenda, Paraná. Um refúgio de paz próximo à natureza.
              </p>
              <address className="not-italic mb-6 text-stone-400">
                Rua BR 476, KM 169<br />
                Bairro Mato Branco<br />
                Contenda - PR, Brasil
              </address>
              
              <a 
                href="https://maps.app.goo.gl/tbJvLxzyYV3FkeZL9" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-4 py-2 rounded transition-colors text-sm"
              >
                Abrir no Google Maps <ExternalLink size={14} />
              </a>
            </div>

            {/* Contato Direto */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <Phone size={20} className="text-amber-600" /> Contato
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/5541997430059" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors group">
                    <div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                      <Phone size={16} className="text-stone-300 group-hover:text-white" />
                    </div>
                    <span>(41) 99743-0059</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nzocivamuxi.katspero/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors group">
                    <div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                      <Instagram size={16} className="text-stone-300 group-hover:text-white" />
                    </div>
                    <span>@nzocivamuxi.katspero</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center">
                    <Heart size={16} />
                  </div>
                  <span>Aberto a novos filhos</span>
                </li>
              </ul>
            </div>

            {/* Mensagem Final */}
            <div className="lg:col-span-1 border-t border-stone-800 pt-8 md:border-0 md:pt-0">
               <div className="bg-stone-800/50 p-6 rounded-xl">
                 <p className="italic text-stone-400 text-sm mb-4">
                   "Na força dos Nkisis e na luz dos Orixás, caminhamos juntos."
                 </p>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   <span className="text-xs uppercase tracking-widest font-bold text-stone-500">Mukuiu • Motumbá • Kolofé</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-800 bg-stone-950">
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
            <p>&copy; {new Date().getFullYear()} Nzo Civamuxi / Tenda Caboclo Águia Branca.</p>
            <p>Desenvolvido por <span className="text-stone-400">Andrei Ribeiro</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}