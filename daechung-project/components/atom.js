import {atom, selector} from 'recoil'
import { v1 } from 'uuid';

export const tokenState = atom({
    key: "tokenState",
    default: ""
})