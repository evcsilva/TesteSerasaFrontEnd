import React, { useState, useEffect, useRef } from 'react';
import Star from '../../componentes/star';
import "./avaliacao.css"

function Avaliacao() {
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');
  const [classificacao, setClassificacao] = useState(0);
  const [aguardandoAvaliacao, setAguardandoAvaliacao] = useState(false);
  const [avaliacaoConcluida, setAvaliacaoConcluida] = useState(false);

  const formRef = useRef(null); // Cria uma referência para o elemento form

  const handleSubmit = (e) => {
    e.preventDefault();

    // Exibindo o resultado no console
    console.log('Nome:', nome);
    console.log('Comentário:', comentario);
    console.log('Classificação:', classificacao);

    // Simula um atraso de 3 segundos (5000ms) para processamento
    setAguardandoAvaliacao(true);
    setTimeout(() => {
      setAguardandoAvaliacao(false);
      setAvaliacaoConcluida(true);
    }, 3000);
  };

  useEffect(() => {
    // Limpa a mensagem de conclusão após 5 segundos
    if (avaliacaoConcluida) {
      setTimeout(() => {
        setAvaliacaoConcluida(false);
      }, 5000);
    }
  }, [avaliacaoConcluida]);

  return (
    <div className="a-tela">
      {avaliacaoConcluida && (
        <div className="a-concluida">
          <p>Obrigado por avaliar nossos serviços.</p>
        </div>
      )}
      <div className="a-logo">
        <img src="/src/logo.svg" alt="Logo" />
      </div>
      <div className="a-text">
        <p className="a-p-1">Conte o quanto você está satisfeito com nossos serviços</p>
        <p className="a-p-2">Marque de 1 à 5 estrelas</p>
      </div>
      {aguardandoAvaliacao && (
        <div className="a-overlay">
          <div className="a-aguarde">
            <p>Aguarde, estamos processando...</p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="a-star">
          <Star isActive={classificacao >= 1} onClick={() => setClassificacao(1)} />
          <Star isActive={classificacao >= 2} onClick={() => setClassificacao(2)} />
          <Star isActive={classificacao >= 3} onClick={() => setClassificacao(3)} />
          <Star isActive={classificacao >= 4} onClick={() => setClassificacao(4)} />
          <Star isActive={classificacao >= 5} onClick={() => setClassificacao(5)} />
        </div>
        <div className="a-field">
          <p className="a-text-field">Nome</p>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required 
          />
        </div>
        <div className="a-field">
          <p className="a-text-field">Deixe um comentário</p>
          <textarea
            placeholder="Este campo é opcional"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>
        <div className="a-submit">
          <button className="a-button" type="submit">Enviar Avaliação</button>
        </div>
      </form>
    </div>
  );
}

export default Avaliacao;
