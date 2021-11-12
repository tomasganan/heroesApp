import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const handleLogin = () =>{

        const lastPath = localStorage.getItem('lastPath') || '/'

        //history.push('/')
        dispatch({
            type: types.login,
            payload: {
                name: 'Tomas'
            }
        })

        history.replace(lastPath)

    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr></hr>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

// Push: Salte a una URL diferente, pero este método agregará un registro a la pila del historial, y haga clic en Atrás para regresar a la página anterior.


// Replace: Lo mismo es saltar a la URL especificada, pero este método no agregará un nuevo registro al historial. Al hacer clic en Atrás, se irá a la página anterior. El registro anterior no existe.