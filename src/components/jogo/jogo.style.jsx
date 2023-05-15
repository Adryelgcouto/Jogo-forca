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
  @media (max-width: 1024px){
    margin-bottom: 20px;
  }
`
export const ContentJogo = styled.section`
  display: flex;
  justify-content: center;
  height: 466px;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    & div {
      width: 100%;
      flex-direction: column;
      align-items: center;
      & img {
        width: 100%;
      }
    }
  }

  & div {
    display: flex;
    justify-content: space-between;
    width: 934px;
    height: 467px;
    @media (max-width: 1024px){
      width: 100%;
    }
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
  color: ${({ color }) => color};
  @media (max-width: 1024px) {
    margin-top: 0px;
  }
`
