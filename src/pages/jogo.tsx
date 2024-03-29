import Porta from "@/components/Porta";
import { useState } from "react";
import { atualizarPortas, criarPortas } from "@/functions/portas";

export default function jogo(props:any) {
    const [portas, setPortas] = useState(criarPortas(5, 2))

    function renderizarPortas() {
      return portas.map(porta => {
        return <Porta key={porta.numero} value={porta}
          onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
      })
    }    

    return (
        <>          
          <div style={{display: "flex"}}>
            {renderizarPortas()}
          </div>
        </>
      )
}