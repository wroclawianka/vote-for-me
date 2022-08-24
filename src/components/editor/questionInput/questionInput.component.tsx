

import {
    Input,
    Heading,
    Flex,
    IconButton,
} from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons'
import {
    FunctionComponent,
    useRef,
    useState
} from "react";
import _ from "lodash";
import {
    useSelector,
    useDispatch
} from 'react-redux'
import { State } from "../../../types";
import { updateQuestion } from "../../../slices/pollSlice";

export const QuestionInput: FunctionComponent = () => {
    const { question } = useSelector((state: { poll: State }) => state.poll);
    const dispatch = useDispatch();

    const updatePollQuestion = (value: string) => {
        dispatch(updateQuestion(value))
    }

    return (
        <>
            <Heading
                size="sm"
                mb={2}>
                Question
            </Heading>
            <Input
                value={question}
                onChange={(event) => updatePollQuestion(event.target.value)}
                mb={4}
            />
        </>
    )
}