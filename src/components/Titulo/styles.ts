import styled from 'styled-components'

import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#a7727d' : '#f9f5e7')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
`
