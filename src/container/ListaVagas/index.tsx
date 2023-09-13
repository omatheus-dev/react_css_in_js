import { useState } from 'react'

import Vaga from '../../components/Vaga'
import BarraPesquisa from '../../components/BarraPesquisa'

import { VagaContainer } from './styles'

type Vaga = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    titulo: 'Designer de interfaces',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVaga = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <BarraPesquisa aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagaContainer>
        {vagasFiltradas.map((vagas) => (
          <Vaga
            key={vagas.id}
            titulo={vagas.titulo}
            localizacao={vagas.localizacao}
            nivel={vagas.nivel}
            modalidade={vagas.modalidade}
            salarioMin={vagas.salarioMin}
            salarioMax={vagas.salarioMax}
            requisitos={vagas.requisitos}
          />
        ))}
      </VagaContainer>
    </div>
  )
}

export default ListaVaga
