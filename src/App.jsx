import React, { useState } from 'react';
import './App.css';
import Tipografia from './pages/exercico_1/Tipografia';
import Cores from './pages/exercico_1/Cores';
import Avaliacao from './pages/exercico_2/Avaliacao';

function App() {
  // Tive problemas na implementação das rotas, por isso fiz dessa forma para poder navegar entre as paginas.
  
  const [currentPage, setCurrentPage] = useState('tipografia');

  const renderPage = () => {
    switch (currentPage) {
      case 'tipografia':
        return <Tipografia />;
      case 'cores':
        return <Cores />;
      case 'avaliacao':
        return <Avaliacao />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className='app-header'>
        <button className='nav-link' onClick={() => setCurrentPage('tipografia')}>Tipografia</button>
        <button className='nav-link' onClick={() => setCurrentPage('cores')}>Cores</button>
        <button className='nav-link' onClick={() => setCurrentPage('avaliacao')}>Avaliação</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
