// import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
// import keycloakConfig from './config/keycloak.js';
// import Keycloak from 'keycloak-js'; 

// const KeycloakContext = createContext();
// export const useKeycloak = () => useContext(KeycloakContext);

// export const KeycloakProvider = ({ children }) => {
//   const [keycloak, setKeycloak] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const initKeycloak = useCallback(() => {
//     const keycloakInstance = new Keycloak(keycloakConfig);
//     keycloakInstance
//       .init({ onLoad: 'login-required' })
//       .then((authenticated) => {
//         setIsAuthenticated(authenticated);
//       })
//       .catch((error) => {
//         console.error('Keycloak initialization error:', error);
//       });

//     return keycloakInstance;
//   }, []);

//   useEffect(() => {
//     const keycloakInstance = initKeycloak();
//     setKeycloak(keycloakInstance);

//     // Cleanup function to handle logout when the component unmounts
//     return () => {
//       console.log('Component unmounted, performing logout...');
//       if (keycloakInstance) {
//         keycloakInstance.logout();
//       }
//     };
//   }, [initKeycloak]);

//   return (
//     <KeycloakContext.Provider value={{ keycloak, isAuthenticated }}>
//       {children}
//     </KeycloakContext.Provider>
//   );
// };
