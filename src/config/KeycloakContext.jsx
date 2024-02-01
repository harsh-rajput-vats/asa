// import React, { createContext, useState, useEffect } from 'react'
// import keycloakConfig from './keycloak'
// // KEYCLOACK
// import Keycloak from 'keycloak-js'

// const KeycloackContext = createContext()

// const KeycloackContextProvider = (props) => {
//     const [ keycloackValue, setKeycloackValue ] = useState(null)
//     const [ authenticated, setAuthenticated ] = useState(false)

//     const setKeycloack = () => {
//         const keycloak = Keycloak({
//             realm: keycloakConfig.realm,
//             url: keycloakConfig.redirect_uri,
//             clientId: keycloakConfig.client_id
//         })

//         keycloak.init({
//             onLoad: 'login-required', 
//             checkLoginIframe: false,
//         }).then(authenticated => {
//             setKeycloackValue(keycloak)
//             setAuthenticated(authenticated)
//         })
//     }

//     const logout = () => {
//         setKeycloack(null)
//         setAuthenticated(false)
//         keycloackValue.logout()
//     }

//     useEffect(() => {
//         setKeycloack()
//     }, [])

//     return (
//         <KeycloackContext.Provider
//             value={{
//                 keycloackValue,
//                 authenticated,
//                 logout
//             }}
//         >
//             {props['children']}
//         </KeycloackContext.Provider>
//     )
// }

// export { KeycloackContextProvider, KeycloackContext }