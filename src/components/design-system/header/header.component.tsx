import {
    Flex,
    Heading,
    useMultiStyleConfig,
    Highlight,
    Divider
} from "@chakra-ui/react"
import React from 'react';

export const Header = () => {
    const style = useMultiStyleConfig('design-system/header', {})

    return (
        <>
            <Flex sx={style.root}>
                <Heading sx={style.heading}>
                    <Highlight query='me' styles={style.highlight}>
                        Vote for me
                    </Highlight>
                </Heading>

            </Flex>
            <Divider orientation='horizontal' />
        </>
    )
}