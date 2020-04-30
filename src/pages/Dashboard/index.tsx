import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import LogoImg from '../../assets/Logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Buscar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/62671334?s=460&u=91206c73c0af9f7d8e39295255531539351f5ff3&v=4"
            alt="Avatar"
          />
          <div>
            <strong>React</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
