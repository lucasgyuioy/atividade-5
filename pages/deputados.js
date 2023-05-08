import axios from 'axios';
import { Row, Col, Card, CardImg, } from 'reactstrap';
import Link from 'next/link';
import Cabecalho from './estetica';



export default function Deputados({ deputados }) {




  return (
    <div>
            <Cabecalho />
      <Row>
        {deputados.map((deputado) => (
          <Col md={3} key={deputado.id}>
            <Link href={`/detalhes?id=${deputado.id}&nome=${deputado.nome}&urlfoto=${deputado.urlFoto}&partido=${deputado.siglaPartido}`}>
              <Card className="mb-3">
                <CardImg top src={deputado.urlFoto} alt={deputado.nome} />
                <h2>{deputado.nome}</h2>
                <h3>{deputado.partido}</h3>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>



    </div>
  );
  
    }

export async function getStaticProps() {
  const response = await axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome');
  const deputados = response.data.dados.map((deputado) => ({
    id: deputado.id,
    nome: deputado.nome,
    urlFoto: deputado.urlFoto,
    partido: deputado.siglaPartido,
  }));
  return { props: { deputados } };
}

