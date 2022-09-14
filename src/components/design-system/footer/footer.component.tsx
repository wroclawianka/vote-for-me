import {
    Flex,
    useMultiStyleConfig,
    Text,
    Box,
    Divider
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";


export const Footer: FunctionComponent = () => {
    const style = useMultiStyleConfig('design-system/footer', {})

    return (
        <>
            <Divider orientation='horizontal' />
            <Flex sx={style.footer}>

                <Box>
                    <Text sx={style.text}>
                        Design and made by Dorota Zelga
                    </Text>
                </Box>
            </Flex>
        </>
    )
}