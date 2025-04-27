import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-biogreen-100 px-3 py-1 text-sm text-biogreen-700">
                Contato
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-bioearth-800">
                Entre em Contato
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Tem perguntas sobre biodigestores ou deseja adicionar uma instalação ao mapa? Estamos aqui para ajudar.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">compostaqui@gmail.com</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Telefone</h3>
                  <p className="text-muted-foreground">(41) 98745-3074</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Endereço</h3>
                  <p className="text-muted-foreground">Praça Gen. Osório, 125 - Centro, Curitiba - PR, 80020-010</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-bioearth-100 flex items-center justify-center text-bioearth-700 hover:bg-bioearth-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-bioearth-100 flex items-center justify-center text-bioearth-700 hover:bg-bioearth-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-bioearth-100 flex items-center justify-center text-bioearth-700 hover:bg-bioearth-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-bioearth-100 flex items-center justify-center text-bioearth-700 hover:bg-bioearth-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-biogreen-50/50 p-6 rounded-lg">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="seu.email@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Assunto</label>
                <Input id="subject" placeholder="Assunto da mensagem" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <Textarea id="message" placeholder="Escreva sua mensagem aqui..." className="min-h-[150px]" />
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="consent" className="rounded border-gray-300 text-biogreen-600 focus:ring-biogreen-500" />
                  <label htmlFor="consent" className="text-xs text-muted-foreground">
                    Concordo em receber atualizações por e-mail.
                  </label>
                </div>
                <Button type="submit" className="bg-biogreen-600 hover:bg-biogreen-700">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
