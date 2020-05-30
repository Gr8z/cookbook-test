import styled from 'styled-components'

const Book = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    'header header'
    'sidebar recipe'
    'footer footer';
  width: 100%;
  max-width: 1320px;
  min-width: 300px;
  margin: 0 auto;
  background: #fff;

  @media screen and (max-width: 800px) {
    grid-template-areas:
      'header header'
      'recipe recipe'
      'sidebar sidebar'
      'footer footer';
  }
`

Book.Header = styled.header`
  grid-area: header;
  background: #d10506;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 2em;
  padding: 20px;
`

Book.Footer = styled.footer`
  grid-area: footer;
  background: #d10506;
  color: #fff;
  text-align: center;
  font-size: 0.8em;
  padding: 10px;
`

export default Book
