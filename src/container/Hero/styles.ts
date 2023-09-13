import styled from 'styled-components'
import { Titulo } from '../../components/Titulo/styles'

export const HeroImage = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a7727d;
    content: '';
    opacity: 0.7;
  }

  div {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    color: #eee;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;

    h3 {
      font-size: 32px;
    }
  }
`

export const HeroTitle = styled(Titulo)`
  font-family: Gloock, serif;
`
