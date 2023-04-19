import Presente from "@/components/Presente";
import Porta from "@/components/Porta";
import PortaModel from "@/models/porta";
import { useState } from "react";

export default function Home(props : any) {
  const [p1, setP1]: any = useState(new PortaModel(1))
  
  return (
    <>
      < Presente/>
      
      <div style={{display: "flex"}}>

      < Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />
      </div>
    </>
  )
}
