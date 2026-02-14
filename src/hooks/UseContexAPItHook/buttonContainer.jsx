import React, {useContext} from 'react'
import { GlobalContext } from './demo'

export const ButtonContainer = () => {
    const {toggle,setToggle} = useContext(GlobalContext);
  return (
    <button onClick={() => setToggle(!toggle)}>On/Off</button>
  )
}
