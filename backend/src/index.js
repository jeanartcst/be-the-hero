const express = require('express');
const cors = require('cors');
const routes = require('./routes');
    
const app = express();
    
    app.use(cors());
    app.use(express.json());   //converte json em objeto js
	app.use(routes);
	
    
    app.listen(3333);   //porta no qual aplicação escuta.
