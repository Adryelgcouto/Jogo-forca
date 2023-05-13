import { isDisabled } from '@testing-library/user-event/dist/utils'
import styled from 'styled-components'

export const ContentLetras = styled.section`
  width: 664px;
  height: 91px;
  margin-top: 140px;
  display: flex;
  flex-wrap: wrap;
`
export const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${({ backGroundAtivo }) =>
    backGroundAtivo === 'desativado' ? '#9FAAB5' : '#E1ECF4'};
  color: ${({ backGroundAtivo }) =>
    backGroundAtivo === 'desativado' ? '#798A9F' : '#39739D'};
  border: 1px solid #7aa7c7;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
`
