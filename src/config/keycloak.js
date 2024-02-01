import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  realm: "test",
  clientId: "hash",
  url: "http://kubernetes.docker.internal:8080",
  // clientSecret: "2D9obYf5WLjzJK6vJd402jCuoyCGuWDg",
  // redirectUri: "http://kubernetes.docker.internal:3001/home/dashboard",
});

export default keycloak;
