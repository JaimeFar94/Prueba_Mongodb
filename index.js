const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const { connection } = require('./static/bd');
const Usuario = require('./static/usuario');

// Conectar a la base de datos
connection();


// Configuración de middlewares
app.use(morgan('dev'));
app.use(express.json()); // Para datos JSON
app.use(express.static(path.join(__dirname, 'src', 'static')));


// Configuración de la aplicación
app.set('appName', 'Prueba  Node.js y MongoDB');
app.set('port', 3000);
app.set('case sensitive routing', true);



//Rutas

app.post('/usuarios', async (req,res) =>{

    //Almacena la información
    try{
        const nuevo_usuario = new Usuario(req.body);
        await nuevo_usuario.save();
        res.status(200).json('Usuario almacenado Correctamente');
    }catch(error){
        res.status(400).json('Error al almacenar los datos.',error);
    }
})


app.get('/usuarios', async (req,res) => {

    //Consulta todos los usuarios
    try{
       const query =  await Usuario.find({});
       res.send (query);
    } catch(error){
        res.status(400).json('Usuarios no Encontrados.', error);
    }
})


app.get('/usuarios/:id', async (req, res) => {
    // Busqueda por ID
    try {
        const query = await Usuario.findById(req.params.id);
        if (!query) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json(query);
    } catch (error) {
        res.status(400).json({ mensaje: 'El Usuario Solicitado no Existe', error: error.message });
    }
});

app.put('/usuarios/:id', async (req, res) =>{
    //Actualizar un usuario por id
    try{
        const query = await Usuario.findByIdAndUpdate(req.params.id, req.body,{
            new: true, runValidators: true
        });
    
        if(!query){
            return res.status(404).json({mensaje: 'Usuario No Encontrado'});
        }res.status(200).json(query);
    } catch(error){
        res.status(400).json({ mensaje: 'Error al Actualizar', error: error.message });
    }

})

app.delete('/usuarios/:id', async (req,res) =>{
    try{
        const query = await Usuario.findByIdAndDelete(req.params.id);
        res.send(query);
    }catch(error){
        res.status(400).json({mensaje: 'Error al Eliminar el usuario', error: error.message});
    }
})


//para que este escuchando el puerto
app.listen(app.get('port'), ()=>{
    console.log(`servidor ${app.get('appName')} iniciado en el puerto ${app.get('port')}`)
})