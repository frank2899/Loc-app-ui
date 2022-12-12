import { Text } from '../Text'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import styled from "styled-components"
import { BaseButtonProps } from "./types"

/**
 * Setup variants and scales later on.
 */
const StyledButton = styled(TouchableOpacity)<BaseButtonProps>`
  border : 1px solid black;
  background-color : ${({theme}) => theme.colors.dark};
  padding : 15px 30px;
  border-radius : 15px;
`

const Button = ({
  label = "OK",
  isLoading = false,
  ...props
} : BaseButtonProps) => {

  return (
    <StyledButton {...props}>
      {
        isLoading ? 
          <ActivityIndicator size="small" color="#fffff" />
        : (
          label ? (
            <Text bold color="#ffff" textAlign="center">{typeof label}</Text>
          ) : label
        )
      }
    </StyledButton>
  )
}

export default Button