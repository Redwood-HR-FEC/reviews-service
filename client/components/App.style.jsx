
import styled, { createGlobalStyle } from 'styled-components'

// Hotlink source of Amazon Ember, fast  but might die and day
// export const GlobalStyle = createGlobalStyle`
//   @font-face {
//     font-display: swap;
//     font-family: "Amazon Ember";
//     font-weight : normal;
//     src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff2");
//   }

//   @font-face {
//     font-display: swap;
//     font-family: "Amazon Ember";
//     font-weight: 700;
//     src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff2");
//   }
// `

// Backup source of Amazon Ember, slow to load
export const GlobalStyle = createGlobalStyle`
@font-face {
  font-display: swap;
  font-family: "Amazon Ember";
  font-weight : normal;
  src: url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/157c6cc36dd65b1b2adc9e7f3329c761.eot");
  src: url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/157c6cc36dd65b1b2adc9e7f3329c761.eot?#iefix") format("embedded-opentype"),
  url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/157c6cc36dd65b1b2adc9e7f3329c761.woff2") format("woff2"),
  url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/157c6cc36dd65b1b2adc9e7f3329c761.woff") format("woff"),
  url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/157c6cc36dd65b1b2adc9e7f3329c761.ttf") format("truetype");
}

@font-face {
  font-display: swap;
  font-family: "Amazon Ember";
  font-weight : 700;
  src: url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/02fcddff61b677f4989d2933d574ca89.eot");
  src: url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/02fcddff61b677f4989d2933d574ca89.eot?#iefix") format("embedded-opentype"),
  url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/02fcddff61b677f4989d2933d574ca89.woff2") format("woff2"),
  url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/02fcddff61b677f4989d2933d574ca89.woff") format("woff"),
  url("https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/fonts/02fcddff61b677f4989d2933d574ca89.ttf") format("truetype");
}

`

export const Wrapper = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: #111;
  font-family: "Amazon Ember",Arial,sans-serif;

  label {
    margin-bottom: -19px;
    display: block;
  }
`

export const Msg = styled.p`
  text-align: center;
  margin: 50px 20px;
  color: #555;
`
export const Loading = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://ghrsea09-fec-proxy.s3-us-west-2.amazonaws.com/assets/spinner_4x._V1_.gif);
  background-repeat: no-repeat;
  background-position: center;
`