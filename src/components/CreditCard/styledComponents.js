// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
  }
`

export const CreditCardContainer = styled.div`
  height: 60%;
  width: 100%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px 10px 0px;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`
export const PaymentMethodContainer = styled.div`
  height: 40%;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`

export const CreditCardHeading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  text-align: center;
  font-weight: 450;
  padding-bottom: 3px;
  border-bottom: 2px solid #ffd773;
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 80%;
  height: 220px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    height: 270px;
  }
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 400;
`

export const CardDetails = styled.div`
  align-self: flex-end;
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 32px;
  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
    height: 180px;
  }
`
export const NameContainer = styled.div`
  height: 80px;
  align-self: flex-end;
  width: 100%;
`

export const CardHolder = styled.p`
  color: #ffffff90;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const Name = styled.p`
  color: #ffffff;
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const PaymentCard = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 8px;
  box-shadow: 2px 2px 20px 2px #c3cad9;
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 250px;
  }
`

export const PaymentHeading = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  height: 42px;
  width: 90%;
  outline: none;
  border: 1px solid #c3cad9;
  padding-left: 15px;
  border-radius: 3px;
  color: #344e7a;
  font-weight: 400;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 20px;
`
