import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem/index'

import {
  GradientGeneratorBgContainer,
  GradientGeneratorAppContainer,
  MainHeading,
  SubHeadingOne,
  GradientDirectionList,
  SubHeadingTwo,
  ColorPickerContainer,
  ColorPickerCardOne,
  ColorOne,
  InputColorOne,
  ColorPickerCardTwo,
  ColorTwo,
  InputColorTwo,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
const color1 = '#8ae323'
const color2 = '#014f7b'
let newDirection = ''

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    direction: gradientDirectionsList[0].value,
    colorOne: color1,
    colorTwo: color2,
    bgColorOne: color1,
    bgColorTwo: color2,
  }

  clickDirection = (id, value) => {
    this.setState({activeDirectionId: id})
    newDirection = value
  }

  onChangeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  setBgColors = () => {
    const {colorOne, colorTwo} = this.state
    this.setState({bgColorOne: colorOne, bgColorTwo: colorTwo})

    this.setState({direction: newDirection})
  }

  render() {
    const {
      activeDirectionId,
      colorOne,
      colorTwo,
      bgColorOne,
      bgColorTwo,
      direction,
    } = this.state

    return (
      <GradientGeneratorBgContainer>
        <GradientGeneratorAppContainer
          bgColorOne={bgColorOne}
          bgColorTwo={bgColorTwo}
          directions={direction}
          data-testid="gradientGenerator"
        >
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <SubHeadingOne>Choose Direction</SubHeadingOne>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                eachItemDetails={eachItem}
                isActive={activeDirectionId === eachItem.directionId}
                clickDirection={this.clickDirection}
              />
            ))}
          </GradientDirectionList>
          <SubHeadingTwo>Pick the Colors</SubHeadingTwo>
          <ColorPickerContainer>
            <ColorPickerCardOne>
              <ColorOne>{colorOne}</ColorOne>
              <InputColorOne
                type="color"
                onChange={this.onChangeColorOne}
                value={colorOne}
              />
            </ColorPickerCardOne>
            <ColorPickerCardTwo>
              <ColorTwo>{colorTwo}</ColorTwo>
              <InputColorTwo
                type="color"
                onChange={this.onChangeColorTwo}
                value={colorTwo}
              />
            </ColorPickerCardTwo>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.setBgColors}>
            Generate
          </GenerateButton>
        </GradientGeneratorAppContainer>
      </GradientGeneratorBgContainer>
    )
  }
}

export default GradientGenerator
