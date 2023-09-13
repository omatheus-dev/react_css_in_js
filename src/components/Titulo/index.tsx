import { Titulo as T } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Titulo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <T fontSize={fontSize} tipo={tipo}>
    {children}
  </T>
)

export default Titulo
