import React from 'react';
import Header from '../components/Sidebar/Header';

function InitialPage() {
  return (
    <div className="bg-[url('../../../public/images/bg-initial.jpg')] w-screen h-screen">
      <div className="flex align-between justify-end max-ms:text-sm">
        <Header />
      </div>
      <h1 className="flex max-lg:text-base max-ms:text-sm max-lg:justify-center text-4xl ml-12">Bem vindo a Fazenda X</h1>
      <div className='flex justify-center lg:mt-44'>
      <div className="flex justify-center max-lg:p-8 max-lg:mt-8 p-12 bg-slate-200 opacity-70 rounded-2xl w-2/4 h-auto max-lg:h-2/4">
          <p className="flex max-lg:text-base lg:text-base max-ms:text-sm text-2xl leading-relaxed w-2/4">
            O Projeto Fazenda X é um empreendimento em grupo com o principal
            objetivo de desenvolver as habilidades full-stack da equipe de
            desenvolvimento. Trata-se de um grupo de desenvolvedores que
            estão no início de suas carreiras, trabalhando na criação de uma
            aplicação web para soluções agrícolas. Nossa equipe se esforça
            para oferecer o melhor em cada funcionalidade e interação com o
            usuário, buscando também aprimorar nossas habilidades técnicas,
            trabalho em equipe, versionamento de código e a aplicação de
            metodologias ágeis, como o Kanban. Estamos empenhados em evoluir
            tanto individualmente quanto coletivamente para construir uma
            plataforma de qualidade.
          </p>
      </div>
      </div>
    </div>
  );
}

export default InitialPage;
