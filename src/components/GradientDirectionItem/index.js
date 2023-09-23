// Write your code here
import {DirectionButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItemDetails, isActive, clickDirection} = props
  const {directionId, value, displayText} = eachItemDetails

  const onClickDirection = () => {
    clickDirection(directionId, value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
