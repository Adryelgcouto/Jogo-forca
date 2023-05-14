import styled from 'styled-components'

export const Button = styled.button`
  margin-top: 89px;
  background-color: #27ae60;
  width: 200px;
  height: 60px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border-radius: 8px;
`
export const ContentJogo = styled.section`
  display: flex;
  justify-content: center;
  height: 466px;

  & div {
    display: flex;
    justify-content: space-between;
    width: 934px;
    height: 467px;
    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & img {
      margin-top: 59px;
      height: 466px;
      width: 400px;
    }
  }
`

export const PalavraForca = styled.p`
  margin-top: 282px;
  font-weight: bold;
  font-size: 50px;
  color: ${({color}) => color };
`
