// Librerías
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
// Asignación puerto
const port = 3000;
process.env.URLDB ="mongodb+srv://rinobitsadmin:Nothing123@cluster0-xhhpf.mongodb.net/test?retryWrites=true&w=majority"
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
mongoose.connect(process.env.URLDB, {useUnifiedTopology:true,useNewUrlParser:true},
	(err, res) => { 
		if(err) throw err;
		console.log('Online Database... ');

	});
// tipo de masa
app.get('/api/tipoMasa', (req, res) => {
	let retorno = [];
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		if(err) throw err;
			mongoose.connection.collection('tipoMasa').find().toArray((err, info) => {
				if(err) throw err;
				retorno = info;
				res.json(retorno);
			});
	});
});
app.get('/api/tipoMasa/:id', (req, res) => {
	let retorno = [];
	const idx = req.params.id;
	//aquí debo filtrar para obtener sólo la tabla de tipo de masa
	mongoose.connection.db.listCollections().toArray((err, tabla) => {
		if(err) throw err;
		
		mongoose.connection.collection('tipoMasa').find({id: idx}).toArray((err, info) => {
			if(err) throw err;
			retorno = info;
			res.json(retorno);
		});
	});
});
//sabor de masa
app.get('/api/saborMasa', (req, res) => {
	let retorno = [];
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		if(err) throw err;
			mongoose.connection.collection('saborMasa').find().toArray((err, info) => {
				if(err) throw err;
				retorno = info;
				res.json(retorno);
			});
	});
});
app.get('/api/saborMasa/:id', (req, res) => {
	let retorno = [];
	const idx = req.params.id;
	//aquí debo filtrar para obtener sólo la tabla de tipo de masa
	mongoose.connection.db.listCollections().toArray((err, tabla) => {
		if(err) throw err;
		
		mongoose.connection.collection('saborMasa').find({id: idx}).toArray((err, info) => {
			if(err) throw err;
			retorno = info;
			res.json(retorno);
		});
	});
});
// Cobertura
app.get('/api/cobertura', (req, res) => {
	let retorno = [];
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		if(err) throw err;
			mongoose.connection.collection('cobertura').find().toArray((err, info) => {
				if(err) throw err;
				retorno = info;
				res.json(retorno);
			});
	});
});
app.get('/api/cobertura/:id', (req, res) => {
	let retorno = [];
	const idx = req.params.id;
	//aquí debo filtrar para obtener sólo la tabla de tipo de masa
	mongoose.connection.db.listCollections().toArray((err, tabla) => {
		if(err) throw err;
		
		mongoose.connection.collection('cobertura').find({id: idx}).toArray((err, info) => {
			if(err) throw err;
			retorno = info;
			res.json(retorno);
		});
	});
});
// hora
app.get('/api/hora', (req, res) => {
	let retorno = [];
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		if(err) throw err;
			mongoose.connection.collection('hora').find().toArray((err, info) => {
				if(err) throw err;
				retorno = info;
				res.json(retorno);
			});
	});
});
app.get('/api/hora/:id', (req, res) => {
	let retorno = [];
	const idx = req.params.id;
	//aquí debo filtrar para obtener sólo la tabla de tipo de masa
	mongoose.connection.db.listCollections().toArray((err, tabla) => {
		if(err) throw err;
		
		mongoose.connection.collection('hora').find({id: idx}).toArray((err, info) => {
			if(err) throw err;
			retorno = info;
			res.json(retorno);
		});
	});
});
//tamaño
app.get('/api/tamano', (req, res) => {
	let retorno = [];
	mongoose.connection.db.listCollections().toArray((err, tablas) => {
		if(err) throw err;
			mongoose.connection.collection('tamano').find().toArray((err, info) => {
				if(err) throw err;
				retorno = info;
				res.json(retorno);
			});
	});
});
app.get('/api/tamano/:id', (req, res) => {
	let retorno = [];
	const idx = req.params.id;
	//aquí debo filtrar para obtener sólo la tabla de tipo de masa
	mongoose.connection.db.listCollections().toArray((err, tabla) => {
		if(err) throw err;

		mongoose.connection.collection('tamano').find({id: idx}).toArray((err, info) => {
			if(err) throw err;
			retorno = info;
			res.json(retorno);
		});
	});
});
// Ejecución del servidor
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
