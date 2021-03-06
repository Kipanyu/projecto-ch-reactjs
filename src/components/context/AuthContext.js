import { createContext, useContext, useState } from "react"

const mockUsers = [
    {email: 'test@test.com', pass: 'test'},
    {email: 'john@doe.com', pass: '123456'},
]



export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({
        loggedIn: false, //login default false.
        userId: null
    })

    console.log(auth)

    const login = (values) => {
        const {email, password} = values

        const match = mockUsers.find((user) => user.email === email)

        if (match) {
            if (match.pass === password) {
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else {
                alert("Password incorrecto")
            }
        } else {
            alert("Usuario no encontrado")
        }

    }

    const logout = () => {
        setAuth({
            loggedIn: false,
            userId: null
        })
    }


    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext