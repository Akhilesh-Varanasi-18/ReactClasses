import React, {useContext} from 'react'
import { ButtonContainer } from './buttonContainer'
import { GlobalContext } from './demo'
export const ImageContainer = () => {
    const { toggle } = useContext(GlobalContext);
    return (
        <>
            <ButtonContainer />
            {toggle && <img src="vite.svg" alt="logo" width={200} height={200} />}
        </>
    )
}
