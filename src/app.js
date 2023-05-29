import express  from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import __dirname from './utils.js';

const app = express ();

app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);

const server = app.listen(8081, ()=> console.log("Server running"));

const io = new Server (server);



io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('dataTransfer', data=>{
        io.emit('log', data)})

    socket.on('disconnect', () => {
    console.log('client disconnected');
    });


});







