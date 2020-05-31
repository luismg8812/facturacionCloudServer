import express, {Application} from 'express';
import morgan from 'morgan';
import indexRoutes from "./routes/indexRoutes";

class Server{
    public app:Application;

    constructor(){       
        this.app=express();
        this.config();
        this.router();
    }

    config():void{
        this.app.set("port",process.env.PORT ||9090);
        this.app.use(morgan('dev'));
        this.app.use(express.json({limit: '50mb'}));
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }

    router():void{
        this.app.use(indexRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("start by port: ",this.app.get('port'));
        });
    }
}

const server =new Server();
server.start();