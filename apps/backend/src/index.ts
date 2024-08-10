import express, { Request, Response } from 'express'
import {auth} from 'express-openid-connect'
import { config } from './authO_config';

const app = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req: Request, res: Response) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(3000,()=>{
    console.log("app listening on port 3000");
})