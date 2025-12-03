import React from 'react';
import { ComicPanel, SpeechBubble } from './components/ComicPanel';
import { OldVsNewMindset, StrategicFlow, OwnerBurden } from './components/Infographics';
import { ArrowDown, AlertTriangle, CheckCircle, Brain, Target, DollarSign, Menu, X, HeartHandshake } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-body text-brand-dark overflow-x-hidden selection:bg-brand-yellow selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-black px-4 py-3 flex justify-between items-center">
        <div className="font-comic text-xl tracking-tighter uppercase">RH <span className="text-brand-red">Estratégico</span></div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent border-b-4 md:border-none border-black md:flex gap-6 p-4 md:p-0 transition-all ${isMenuOpen ? 'block' : 'hidden'}`}>
          <button onClick={() => scrollToSection('intro')} className="block font-bold hover:text-brand-red mb-2 md:mb-0">Início</button>
          <button onClick={() => scrollToSection('problem')} className="block font-bold hover:text-brand-red mb-2 md:mb-0">O Erro</button>
          <button onClick={() => scrollToSection('mindset-shift')} className="block font-bold hover:text-brand-red mb-2 md:mb-0">Vire o Dono</button>
          <button onClick={() => scrollToSection('strategy')} className="block font-bold hover:text-brand-red">A Prática</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex flex-col justify-center items-center bg-brand-yellow px-4 pt-20 relative pattern-dots">
        <div className="max-w-4xl w-full text-center relative z-10">
          <div className="inline-block bg-black text-white px-4 py-2 font-comic text-sm uppercase tracking-widest mb-4 rotate-[-2deg]">
            Graphic Novel Corporativa
          </div>
          <h1 className="font-comic text-5xl md:text-8xl leading-[0.9] mb-8 drop-shadow-lg text-black">
            VOCÊ TRABALHA<br />
            <span className="text-white text-stroke-black">PARA QUEM?</span>
          </h1>
          <p className="font-body font-bold text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            A dura verdade que separa o RH operacional do verdadeiro RH Estratégico.
          </p>
          <button 
            onClick={() => scrollToSection('problem')}
            className="group relative inline-flex items-center justify-center bg-white text-black font-comic text-xl px-8 py-4 border-4 border-black shadow-comic hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
          >
            Descobrir a Verdade <ArrowDown className="ml-2 group-hover:animate-bounce" />
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-black skew-y-2 translate-y-6"></div>
      </section>

      {/* Chapter 1: The Problem */}
      <section id="problem" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="bg-black text-white w-12 h-12 flex items-center justify-center font-comic text-2xl rounded-full">1</span>
            <h2 className="font-comic text-4xl uppercase">A Crise de Identidade</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ComicPanel>
              <div className="h-64 bg-gray-200 mb-4 border-2 border-black flex items-center justify-center overflow-hidden relative">
                 <img src="https://picsum.photos/seed/office1/600/400" alt="Generic Office" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />
                 <AlertTriangle size={64} className="relative z-10 text-black" />
              </div>
              <h3 className="font-comic text-xl mb-2">O Sintoma Comum</h3>
              <p className="text-lg leading-relaxed">
                Muitos profissionais de RH acreditam que são o <span className="font-bold bg-yellow-200 px-1">"Advogado do Povo"</span>. 
                Sentem que sua missão é proteger os colaboradores da empresa, garantindo felicidade a qualquer custo.
              </p>
            </ComicPanel>

            <div className="flex flex-col justify-center space-y-6">
               <SpeechBubble direction="left">
                 "Se a empresa não der frutas, massagem e happy hour, os funcionários vão ficar tristes. Meu trabalho é brigar por eles!"
               </SpeechBubble>
               
               <div className="bg-brand-red text-white p-6 border-4 border-black transform rotate-1 shadow-comic-sm">
                 <p className="font-comic text-2xl text-center">ISSO É UM ERRO FATAL.</p>
               </div>
               
               <p className="font-body text-gray-600 italic">
                 Ao pensar assim, o RH se torna um obstáculo para o negócio, visto pela diretoria apenas como um "centro de custo" ou o "departamento de festas".
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Truth */}
      <section id="truth" className="py-24 px-4 bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto">
           <div className="flex items-center gap-4 mb-12">
            <span className="bg-white text-black w-12 h-12 flex items-center justify-center font-comic text-2xl rounded-full">2</span>
            <h2 className="font-comic text-4xl uppercase text-white">Quem Assina o Cheque?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <ComicPanel variant="secondary" className="md:col-span-2">
                <h3 className="font-comic text-2xl mb-4">A Realidade Nua e Crua</h3>
                <p className="text-lg font-medium mb-4">
                  O RH é um departamento da empresa. A empresa pertence aos sócios/acionistas.
                </p>
                <p className="text-xl font-bold border-l-4 border-black pl-4 mb-4">
                  Seu cliente NÃO É o colaborador. <br/>
                  Seu cliente É O DONO DO NEGÓCIO.
                </p>
                <p className="text-sm">
                  Isso soa frio? Talvez. Mas é a lógica fundamental do capitalismo corporativo. O objetivo da empresa não é "ser uma família". É gerar lucro para garantir sua própria sobrevivência e crescimento.
                </p>
             </ComicPanel>

             <ComicPanel variant="primary" className="flex flex-col items-center justify-center text-center">
                <DollarSign size={80} className="mb-4 text-brand-green-600" />
                <h4 className="font-comic text-xl">O Objetivo Final</h4>
                <p>Sem lucro, não há salários. Sem salários, não há colaboradores para "cuidar".</p>
             </ComicPanel>
          </div>

          <div className="mt-16">
            <h3 className="font-comic text-2xl text-center mb-8 text-brand-yellow">Mudança de Mindset</h3>
            <div className="bg-white text-black p-4 md:p-8 border-4 border-white shadow-[0_0_20px_rgba(255,215,0,0.3)]">
               <OldVsNewMindset />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2.5: The Owner Mindset (NEW SECTION) */}
      <section id="mindset-shift" className="py-24 px-4 bg-brand-red border-t-8 border-b-8 border-black">
         <div className="max-w-5xl mx-auto text-white">
           <div className="text-center mb-16">
             <h2 className="font-comic text-4xl md:text-6xl uppercase tracking-tighter mb-4">Vista a Pele do Dono</h2>
             <p className="font-body text-xl font-bold max-w-2xl mx-auto">
               Para ser estratégico, você precisa parar de pensar como empregado e começar a SENTIR como o patrão.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SpeechBubble direction="left">
                  "Você hipotecou sua casa. Pegou empréstimo no banco. Se a empresa não vender este mês, você perde TUDO. Sua família fica sem teto."
                </SpeechBubble>
                <div className="mt-8 space-y-6">
                  <p className="text-xl font-bold">
                    Essa é a realidade do dono. É esse medo que ele sente quando acorda.
                  </p>
                  <p className="text-lg">
                    Quando o RH chega pedindo "mais benefícios" sem mostrar o retorno (ROI), o dono não vê "cuidado com pessoas". 
                    <span className="bg-black text-brand-yellow px-2 font-bold ml-1">Ele vê AMEAÇA.</span> Ele vê alguém gastando o dinheiro que salvaria a empresa.
                  </p>
                  <div className="border-l-4 border-white pl-4 italic">
                    "O RH Estratégico assume as dores do negócio como se fossem suas. Ele protege o caixa. Ele exige performance."
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                 <OwnerBurden />
                 <div className="mt-6 text-center">
                   <p className="font-comic text-2xl uppercase mb-2">A Pergunta de Ouro:</p>
                   <div className="bg-white text-black p-4 font-bold text-lg transform rotate-2 shadow-comic">
                     "Se esse dinheiro fosse 100% MEU, eu gastaria nisso?"
                   </div>
                 </div>
              </div>
           </div>
         </div>
      </section>

      {/* Chapter 3: The Mechanism */}
      <section id="strategy" className="py-24 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-comic text-4xl md:text-5xl uppercase mb-4">A Lógica da Engrenagem</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Agora que você pensa como dono, entenda o papel dos colaboradores. <br/>
              <span className="font-bold text-brand-red">Eles são o MEIO, não o fim.</span>
            </p>
          </div>

          <StrategicFlow />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-comic text-3xl mb-4">Gerindo Recursos (Não Apenas Pessoas)</h3>
              <p className="text-lg mb-4 text-gray-700">
                Pense em uma equipe de Fórmula 1. O objetivo é vencer a corrida (Lucro). O carro é o Negócio. O Piloto é o Colaborador.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                O chefe da equipe (RH) cuida do piloto, treina o piloto, garante que ele esteja descansado e motivado. 
              </p>
              <div className="bg-brand-yellow p-4 border-l-4 border-black font-bold shadow-comic-sm">
                Por que ele mima o piloto? Por amor? Não.<br/>
                Porque <span className="italic">sem um piloto excelente e motivado, o carro milionário bate no muro e o dono perde o investimento.</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
               <ComicPanel>
                 <div className="flex items-center gap-4">
                   <Brain className="text-brand-red shrink-0" size={32} />
                   <div>
                     <h4 className="font-comic text-lg">Contratação</h4>
                     <p className="text-sm">Não contrate quem é "legal". Contrate quem trará mais resultado financeiro.</p>
                   </div>
                 </div>
               </ComicPanel>
               <ComicPanel>
                 <div className="flex items-center gap-4">
                   <Target className="text-brand-red shrink-0" size={32} />
                   <div>
                     <h4 className="font-comic text-lg">Treinamento</h4>
                     <p className="text-sm">Não treine por treinar. Treine para consertar falhas na produção de lucro.</p>
                   </div>
                 </div>
               </ComicPanel>
               <ComicPanel>
                 <div className="flex items-center gap-4">
                   <CheckCircle className="text-brand-red shrink-0" size={32} />
                   <div>
                     <h4 className="font-comic text-lg">Retenção</h4>
                     <p className="text-sm">Mantenha os talentos porque perdê-los custa caro para o caixa, não apenas por bondade.</p>
                   </div>
                 </div>
               </ComicPanel>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Conclusion */}
      <section className="py-20 bg-white text-black border-t-8 border-black text-center px-4 pattern-dots">
        <div className="max-w-3xl mx-auto">
          <HeartHandshake size={64} className="mx-auto mb-6 text-brand-red" />
          <h2 className="font-comic text-4xl md:text-6xl mb-8">O Grande Paradoxo</h2>
          <p className="text-xl md:text-2xl font-bold mb-8">
            "Quando o RH foca no resultado do PATRÃO, a empresa lucra mais. Quando a empresa lucra, ela pode pagar melhor e oferecer mais aos colaboradores."
          </p>
          <div className="bg-black inline-block p-8 border-4 border-brand-yellow transform -rotate-1 shadow-comic text-white">
            <p className="font-comic text-xl uppercase tracking-widest text-brand-yellow">
              O RH Estratégico cuida das pessoas...<br/>
              EXATAMENTE PORQUE ELE DEFENDE O BOLSO DO DONO.
            </p>
          </div>
        </div>
      </section>
      
      <footer className="bg-black text-gray-500 py-8 text-center text-sm">
        <p>© 2024 RH Estratégico. Baseado nos conceitos de gestão moderna de pessoas.</p>
      </footer>

    </div>
  );
};

export default App;