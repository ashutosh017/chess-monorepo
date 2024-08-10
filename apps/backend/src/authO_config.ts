import "dotenv/config"

export const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.authO_client_secret,
    baseURL: 'http://localhost:3000',
    clientID: '1H0YjTwe1hdGcyfuyNlb0vvNEQwVzMAY',
    issuerBaseURL: 'https://dev-amw020r27s6v62u5.us.auth0.com'
  };