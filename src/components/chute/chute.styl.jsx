import styled from 'styled-components'







export const Chutar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 70px;
  }
  p{
    font-size: 20px;
    margin-right: 12px;

  }
  input{
    width: 353px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    padding-left: 20px;
  }
  button{
    color: #3C76A1;
    background-color: #E1ECF4;
    border: 1px solid #7AA7C7;
    width: 100px;
    height: 40px;
    margin-left: 15px;
    &:disabled{
      color: #3C76A1;
    background-color: #E1ECF4;
    border: 1px solid #7AA7C7;

    }
  }


`