import { theme } from "../theme"
import { Button, Flex, Text } from "../components"
import styled from "styled-components"
import { Image } from "react-native"
import { useState } from "react"

const CustomImage = styled(Image)`
`

const InitialScreen = () => {
    const [isLoad, setLoad] = useState(false)


    return (
        <Flex flex={1} backgroundColor={theme.colors.dirtyWhite} p={16}>
            <Text bold>Login Account</Text>
            <Text bold></Text>
            <Button onPress={() => setLoad(!isLoad)} isLoading={isLoad}/>
        </Flex>
    )
}

export default InitialScreen