
import { useRouter } from 'next/router';
import Cabecalho from './estetica';
import Link from 'next/link';

export default function Detalhes() {
  const router = useRouter();
  const { nome, urlfoto, partido } = router.query;
  
  return (
    
    <div>
      <Cabecalho/>
      <img src={urlfoto} alt={nome} />
      <h1>{nome}</h1>
      <h2>Partido: {partido}</h2>

    </div>
    
  );
}














  


  


