import {atom, selector} from 'recoil'
import { v1 } from 'uuid';

export const tokenState = atom({
    key: "tokenState",
    default: ""
})

export const lCateFoldState = atom({
  key: `lCateFoldState/${v1()}`, 
  default: [
    {
        index:0,
        isFold:true
    },
    {
        index:1,
        isFold:false
    },
    {
        index:2,
        isFold:false
    }
], 
});

export const mCateFoldState = atom({
    key: `mCateFoldState/${v1()}`,
    default: [
    [
        {
            index:0,
            name:"1학년 1학기",
            isFold:true
        },
        {
            index:1,
            name:"1학년 2학기",
            isFold:false
        },
    ],
    [
        {
            index:0,
            name:"인턴",
            isFold:true
        },
        {
            index:1,
            name: "동아리",
            isFold:false
        },
    ],
    [
        {
            index:0,
            name: "기타",
            isFold:true
        },
    ]
]
})

