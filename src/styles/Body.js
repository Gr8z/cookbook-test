import styled from 'styled-components'

const Body = styled.body`
  background: #454545;
  width: 100%;
  height: auto;
  min-height: 100vh;
  font-size: 18px;
  font-family: 'Cairo', sans-serif;
  font-weight: 400;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`

export default Body
