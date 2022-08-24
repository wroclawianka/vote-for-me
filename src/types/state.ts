import { Option } from "."

export type State = {
    question: string,
    options: {
        [key: string]: Option
    },
}