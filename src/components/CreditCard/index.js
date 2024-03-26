// Write your code here

import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  CreditCardHeading,
  PaymentMethodContainer,
  HeadingContainer,
  CardContainer,
  Card,
  CardNumber,
  CardDetails,
  CardHolder,
  Name,
  PaymentCard,
  PaymentHeading,
  Input,
  NameContainer,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const updateNumber = e => setNumber(e.target.value)

  const updateName = e => setName(e.target.value)

  const renderCreditCard = () => (
    <CreditCardContainer>
      <HeadingContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
      </HeadingContainer>
      <CardContainer>
        <Card data-testid="creditCard">
          <CardDetails>
            <CardNumber>{number}</CardNumber>
            <NameContainer>
              <CardHolder>CARDHOLDER NAME</CardHolder>
              <Name>{name.toUpperCase()}</Name>
            </NameContainer>
          </CardDetails>
        </Card>
      </CardContainer>
    </CreditCardContainer>
  )

  const renderPaymentCard = () => (
    <PaymentMethodContainer>
      <PaymentCard>
        <PaymentHeading>Payment Method</PaymentHeading>
        <Input
          placeholder="Card Number"
          onChange={updateNumber}
          value={number}
          type="text"
        />
        <Input
          placeholder="CardHolder Name"
          onChange={updateName}
          value={name}
          type="text"
        />
      </PaymentCard>
    </PaymentMethodContainer>
  )

  return (
    <MainContainer>
      {renderCreditCard()}
      {renderPaymentCard()}
    </MainContainer>
  )
}

export default CreditCard
