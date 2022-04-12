import React from "react";
import PageHeader from '../template/pageHeader';
import 'modules/bootstrap/dist/css/bootstrap.min.css';

export default props => (
    <div>
      <PageHeader name='Sobre' small='Nós'></PageHeader>
      <h2>Nossa História</h2>
      <p>Somos a tuma +top</p>
      <h2>Missão e Visão</h2>
      <p>Aqui fazemos Sistemas Brutos</p>
      <div className="row border">
      <h2>Aluno</h2>
        <div className="col">
        <b>Nome:</b> Guilherme Teixeira Ais
         
      </div>

        <div className="col">
        <b>Curso:</b> DSM
        
        </div>

        <div className="col">
      
            <b>Semestre: </b> 2°
        </div>
     
       </div>

 
    </div>
);