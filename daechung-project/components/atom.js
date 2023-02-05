import {atom, selector} from 'recoil'

export const lCateFoldState = atom({
  key: 'lCateFoldState', 
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
    key: 'mCateFoldState',
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