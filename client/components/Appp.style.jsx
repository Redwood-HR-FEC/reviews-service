
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Amazon Ember";
  src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff2");
}

@font-face {
  font-family: "Amazon Ember";
  font-weight: 700;
  src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff2");
}
`

export const Wrapper = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: #111;
  font-family: "Amazon Ember",Arial,sans-serif;
`

export const Msg = styled.p`
  text-align: center;
  margin: 50px 20px;
  color: #555;
`