import {atom} from 'recoil'

export const lCateIdState = atom({
  key: 'lCateIdState', 
  default: '', 
});

export const mCateIdState = atom({
  key: 'mCateIdState', 
  default: '', 
});

export const sCateIdState = atom({
  key: 'sCateIdState', 
  default: '', 
});

export const sequenceState = atom({
  key: "sequenceState",
  default: "wrt"
})

export const deleteState = atom({
  key:"deleteState",
  default: false
})

export const changeState = atom({
  key:"changeState",
  default:false
})