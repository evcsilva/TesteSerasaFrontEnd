
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Cores from "./pages/exercico_1/Cores";
import Tipografia from "./pages/exercico_1/Tipografia";
import Avaliacao from "./pages/exercico_2/Avaliacao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Tipografia</Link>
          </li>
          <li>
            <Link to="/cores">Cores</Link>
          </li>
          <li>
            <Link to="/avaliacao">Avaliação</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Tipografia />} />
        <Route path="/cores" element={<Cores />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

