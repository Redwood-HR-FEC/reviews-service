
import styled from 'styled-components'

export const ReviewListItem = styled.li`
  max-width: 80em;
  margin-bottom: 22px;
  list-style: none;
`

export const Spacer = styled.span`
  height: 14px;
  background-color: #ddd;
  width: 1px;
  display: inline-block;
  margin: 0 12px 0 12px;
  vertical-align: text-bottom;
`


// Profile

export const Profile = styled.a`
  margin-bottom: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & h4 {
    font-weight: 300;
    margin: 0;
  }

  & img {
    margin-right: 9px;
    width: 34px;
    border-radius: 100px;
  }
`


// Header

export const Header = styled.header``

export const HeaderSummary = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const HeaderRating = styled.span`
  margin-right: 6px;

  width: 80px;
  flex-basis: 80px;
  flex-shrink: 0;
  height: 18px;
  position: relative;
  vertical-align: text-top;
  position: relative;
  vertical-align: text-top;
  background-image: url(./AmazonUIIcon-sprite.png);
  background-size: 400px 900px;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: top;

  &.star-1 { background-position: -69px -368px; }
  &.star-2 { background-position: -53px -368px; }
  &.star-3 { background-position: -37px -368px; }
  &.star-4 { background-position: -21px -368px; }
  &.star-5 { background-position: -5px  -368px; }

`

export const HeaderTitle = styled.a`
  color: #111;
  text-decoration: none;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #c45500;
    text-decoration: underline;
  }

  & h3 {
    font-size: 13px;
    line-height: 19px;
    margin: 0;
  }
`

export const HeaderSubtitle = styled.p`
  margin: 0;
  color: #555;
`

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #555;
`

export const HeaderOptions = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const HeaderVerified = styled.p`
  margin: 0;
  font-size: 11px;
  font-weight: bold;
  color: #C45500;
`


// Body
export const Body = styled.div``

export const BodyWrapper = styled.div`
  max-height: 176px;
  position: relative;
  overflow: hidden;

  span {
    background-image: url(./AmazonUIIcon-sprite.png);
    background-size: 400px 900px;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: baseline;
    width: 7px;
    height: 9px;
    background-position: -82px -293px;
    margin-right: 5px;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 16px;
    background: linear-gradient(to bottom,rgba(255,255,255,0),#fff);
    border-bottom: solid 16px #fff;
  }

  &.is-open {
    max-height: none;
    padding-bottom: 4px;

    &::after {
      display: none;
    }

    span{
      background-position: -94px -293px;
    }
  }
`

export const ReadMore = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  font-size: 13px;
  color: #0066c0;
  background: transparent;
  border: 0;
  outline: 0;
  padding: 0;

  &:hover {
    color: #c45500;
    text-decoration: underline;
  }
`


// Footer styles

export const Footer = styled.footer``

export const FooterText = styled.p`
color: #767676;
  margin-bottom: 10px;
`

export const FooterButton = styled.button`
  font-size: 13px;
  line-height: 29px;
  margin: 0;
  outline: 0;
  padding: 0 27px 0 27px;
  color: #111;
  white-space: nowrap;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 0 rgba(255,255,255,.6) inset;
  background-color: #eff1f3;
  background: linear-gradient(to bottom,#f7f8fa,#e7e9ec);
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
  font-family: inherit;

  &:hover {
    border-color: #a2a6ac #979aa1 #82858a;
    background: linear-gradient(to bottom,#d8dbde,#c3c6ca);
  }

  &:focus {
    outline: 0;
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
  }
`

export const FooterLink = styled.a`
  font-size: 13px;
  line-height: 19px;
  font-weight: 400;
  text-decoration: none !important;
  color: #555;
  outline: 0;
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;

  &:hover {
    color: #c45500;
  }
`
