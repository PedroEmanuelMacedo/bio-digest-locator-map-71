import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bioearth-800 text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-biogreen-500 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" />
                  <path d="M16 15.5v.01" />
                  <path d="M12 12a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">Compostaqui</span>
            </div>
            <p className="text-gray-300 text-sm">
              Uma plataforma para conectar pessoas e comunidades a soluções
              sustentáveis de biodigestão, promovendo energia limpa e gestão
              responsável de resíduos orgânicos.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-white hover:text-biogreen-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-biogreen-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-biogreen-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-biogreen-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#sobre" className="hover:text-biogreen-300 transition-colors">Sobre Biodigestores</a></li>
              <li><a href="#como-funciona" className="hover:text-biogreen-300 transition-colors">Como Funciona</a></li>
              <li><a href="#beneficios" className="hover:text-biogreen-300 transition-colors">Benefícios</a></li>
              <li><a href="#mapa" className="hover:text-biogreen-300 transition-colors">Mapa de Biodigestores</a></li>
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">Recursos Educativos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Biodigestores</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">Domésticos</a></li>
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">Comunitários</a></li>
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">Rurais</a></li>
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">Industriais</a></li>
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">Educacionais</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Suporte</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#contato" className="hover:text-biogreen-300 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-biogreen-300 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-bioearth-700 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Compostaqui. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desenvolvido com 💚 para um futuro mais sustentável.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
