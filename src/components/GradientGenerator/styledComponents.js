// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorBgContainer = styled.div`
  max-width: 1550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GradientGeneratorAppContainer = styled.div`
  width: 580px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.directions},
    ${props => props.bgColorOne},
    ${props => props.bgColorTwo}
  );

  @media (min-width: 768px) {
    width: 1180px;
  }
`

export const MainHeading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
`

export const SubHeadingOne = styled.p`
  color: #ededed;
  font-family: 'Roboto';
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-flow: wrap;
  list-style-type: none;
  padding-left: 0px;
`

export const SubHeadingTwo = styled.p`
  color: #ededed;
  font-family: 'Roboto';
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`

export const ColorPickerCardOne = styled.div``

export const ColorOne = styled.p`
  color: #ededed;
  font-family: 'Roboto';
`

export const InputColorOne = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
`

export const ColorPickerCardTwo = styled.div``

export const ColorTwo = styled.p`
  color: #ededed;
  font-family: 'Roboto';
`

export const InputColorTwo = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  outline: none;
  cursor: pointer;
  height: 36px;
  width: 125px;
  border-radius: 8px;
  font-size: 18px;
  margin-top: 15px;
`
