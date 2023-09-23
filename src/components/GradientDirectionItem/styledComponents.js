// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  height: 36px;
  width: 125px;
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff79')};

  opacity: ${props => (props.isActive ? 1 : 0.5)};
  border: none;
  outline: none;
  font-size: 16px;
  font-family: 'Roboto';
  border-radius: 8px;
  margin-right: 15px;
`
export const ListItem = styled.li``
