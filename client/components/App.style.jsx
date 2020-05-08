
import styled, { createGlobalStyle } from 'styled-components'

// Hotlink source of Amazon Ember, fast  but might die and day
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: "Amazon Ember";
    font-weight : normal;
    src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff2");
  }

  @font-face {
    font-display: swap;
    font-family: "Amazon Ember";
    font-weight: 700;
    src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff2");
  }
`
// Backup source of Amazon Ember, slow to load
// @font-face {
//   font-family: "Amazon Ember";
//   src: url("//db.onlinewebfonts.com/t/157c6cc36dd65b1b2adc9e7f3329c761.eot");
//   src: url("//db.onlinewebfonts.com/t/157c6cc36dd65b1b2adc9e7f3329c761.eot?#iefix") format("embedded-opentype"),
//   url("//db.onlinewebfonts.com/t/157c6cc36dd65b1b2adc9e7f3329c761.woff2") format("woff2"),
//   url("//db.onlinewebfonts.com/t/157c6cc36dd65b1b2adc9e7f3329c761.woff") format("woff"),
//   url("//db.onlinewebfonts.com/t/157c6cc36dd65b1b2adc9e7f3329c761.ttf") format("truetype"),
//   url("//db.onlinewebfonts.com/t/157c6cc36dd65b1b2adc9e7f3329c761.svg#Amazon Ember") format("svg");
// }
// @font-face {
//   font-family: "Amazon Ember";
//   font-weight: 700;
//   src: url("//db.onlinewebfonts.com/t/02fcddff61b677f4989d2933d574ca89.eot");
//   src: url("//db.onlinewebfonts.com/t/02fcddff61b677f4989d2933d574ca89.eot?#iefix") format("embedded-opentype"),
//   url("//db.onlinewebfonts.com/t/02fcddff61b677f4989d2933d574ca89.woff2") format("woff2"),
//   url("//db.onlinewebfonts.com/t/02fcddff61b677f4989d2933d574ca89.woff") format("woff"),
//   url("//db.onlinewebfonts.com/t/02fcddff61b677f4989d2933d574ca89.ttf") format("truetype"),
//   url("//db.onlinewebfonts.com/t/02fcddff61b677f4989d2933d574ca89.svg#Amazon Ember") format("svg"); }


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
export const Loading = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(./assets/spinner_4x._V1_.gif);
  background-repeat: no-repeat;
  background-position: center;
`