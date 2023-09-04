

# Esta documentação serve para mostrar como importar e usar os componentes BarraSuperior, Cores, Star e Tipografia em projetos React.



## 1. Importando os componentes:

Para importar esses componentes em seus arquivos React, você pode usar a seguinte sintaxe:

import BarraSuperior from "../../componentes/barra_superior/BarraSuperior";
import Star from '../../componentes/star';

Importe os arquivos Cores/index.css e Tipografia/index.css para os seus arquivos .css desta forma:
@charset "UTF-8";
@import url(../../componentes/Cores/index.css);
@import url(../../componentes/Tipografia/index.css);


## 2. Usando os componentes:
Aqui estão alguns exemplos de como usar esses componentes em seus arquivos React:



### BarraSuperior

    import React from 'react';
    import BarraSuperior from "../../componentes/barra_superior/BarraSuperior";

    function MinhaPagina() {
      return (
        <div>
          <BarraSuperior text="Texto para a Barra Superior" />
          {/* Outro conteúdo da página */}
        </div>
      );
    }



### Cores

    O componente Cores não precisa ser usado diretamente em seus componentes React, pois é um arquivo .css para definir variáveis de cores. Você pode importar as variáveis de cores definidas no arquivo .css em seu próprio  arquivo .css ou componente para usar as cores.



### Star

    import React, { useState } from 'react';
    import Star from '../../componentes/star';

    function MinhaPagina() {
      const [isStarActive, setIsStarActive] = useState(false);

      const handleClick = () => {
        setIsStarActive(!isStarActive);
      };

      return (
        <div>
          <Star isActive={isStarActive} onClick={handleClick} />
          {/* Outro conteúdo da página */}
        </div>
      );
    }


### Tipografia

    import React from 'react';
    import '../Tipografia/index.css';

    function MinhaPagina() {
      return (
        <div>
          <h1 className="Display">Título usando a classe de Tipografia</h1>
          {/* Outro conteúdo da página */}
        </div>
      );
    }

Esta foi uma breve descrição de como usar os componentes criados neste projeto

Certifique-se de importar o CSS da Tipografia conforme mostrado no exemplo.




