import Sidebar from '../components/Sidebar/Sidebar';

function InitialPage() {
  return (
    <div className="bg-[url('../../../public/images/bg-initial.jpg')] w-screen h-screen">
      <div className="flex align-between justify-end">
        <Sidebar />
      </div>
      <h1 className="flex text-4xl ml-12">Bem vindo a Fazenda X</h1>
      <div className="flex justify-center">
        <div className="w-2/4">
          <p className="flex text-2xl leading-relaxed">
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
