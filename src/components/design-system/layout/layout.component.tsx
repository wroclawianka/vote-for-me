import {
    Box,
    Flex,
    useMultiStyleConfig
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

type Props = {
    children: React.ReactNode
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
    const style = useMultiStyleConfig('layout', {})


    return (
        <Flex flexDirection='column' sx={style.mainContainer}>
            <Header />
            <Box flex={1} pt={4} fontFamily="Open Sans">
                {children}
            </Box>
            <Footer />
        </Flex >
    )
}