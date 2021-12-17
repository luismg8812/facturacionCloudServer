import {Router} from 'express';
import { documentoControllers } from '../controllers/documentoControllers';

class DocumentoRoutes{

    public router:Router =  Router();
    
    constructor(){
         this.config();
    }

    config():void{
        this.router.post('/createDocumento' ,documentoControllers.createDocumento);
        this.router.post('/saveDocumentoNota' ,documentoControllers.saveDocumentoNota );
        this.router.post('/saveRetiro' ,documentoControllers.saveRetiro);
        this.router.post('/saveInvoice' ,documentoControllers.saveInvoice);
        this.router.post('/updateDocumento' ,documentoControllers.updateDocumento);
        this.router.post('/updateDocumentoNota' ,documentoControllers.updateDocumentoNota); 
        this.router.post('/createTipoPagoDocumento' ,documentoControllers.createTipoPagoDocumento);
        this.router.get('/getDocumentoByTipo' ,documentoControllers.getDocumentoByTipo);
        this.router.get('/getCuadreCaja' ,documentoControllers.getCuadreCaja);
        this.router.get('/getOrdenesTrabajo' ,documentoControllers.getOrdenesTrabajo);
        this.router.post('/createDocumentoOrden' ,documentoControllers.createDocumentoOrden);
        this.router.post('/deleteDocumentoOrdenByOrden' ,documentoControllers.deleteDocumentoOrdenByOrden);
        this.router.post('/deleteDocumentoOrdenByDocumento' ,documentoControllers.deleteDocumentoOrdenByDocumento);
        
        this.router.get('/getDocumentoOrdenById' ,documentoControllers.getDocumentoOrdenById);
        this.router.get('/getOrdenesByDocumentoId' ,documentoControllers.getOrdenesByDocumentoId);
        this.router.get('/getNominaByEmpleado' ,documentoControllers.getNominaByEmpleado);
        this.router.get('/getVentasPorGrupos' ,documentoControllers.getVentasPorGrupos);
        this.router.get('/getVentasPorSubGrupos' ,documentoControllers.getVentasPorSubGrupos);
        this.router.get('/getOrdenesByEmpleado' ,documentoControllers.getOrdenesByEmpleado);
        this.router.get('/getOrdenesByEmpleados' ,documentoControllers.getOrdenesByEmpleados);
        
        this.router.get('/getDocumentosByFechaAndTipoDetalle' ,documentoControllers.getDocumentosByFechaAndTipoDetalle);
        this.router.post('/cierreNomina' ,documentoControllers.cierreNomina);
        this.router.get('/getTiposDocumento' ,documentoControllers.getTiposDocumento);
        this.router.get('/getInvoice' ,documentoControllers.getInvoice);
        this.router.get('/getDocumentosByFechaAndTipo' ,documentoControllers.getDocumentosByFechaAndTipo);
        this.router.get('/getDocumentoByTipoAndFecha' ,documentoControllers.getDocumentoByTipoAndFecha);
        this.router.get('/getRetirosByFechaAndTipo' ,documentoControllers.getRetirosByFechaAndTipo);
        this.router.get('/getUltimoDocumentoId' ,documentoControllers.getUltimoDocumentoId);
        this.router.get('/getDocumentosByTipoPago' ,documentoControllers.getDocumentosByTipoPago);
        this.router.get('/getCarteraClientes' ,documentoControllers.getCarteraClientes);
        
        this.router.get('/getDocumentoForFacturacionElectronica' ,documentoControllers.getDocumentoForFacturacionElectronica);
        this.router.get('/getByDocumentoId' ,documentoControllers.getByDocumentoId);
        this.router.get('/getDocumentoInvoiceByDocumento' ,documentoControllers.getDocumentoInvoiceByDocumento);
        this.router.get('/getDocumentoNotaByDocumento' ,documentoControllers.getDocumentoNotaByDocumento);
        this.router.get('/getGananciaDocumentos' ,documentoControllers.getGananciaDocumentos);
        this.router.get('/getTerceros' ,documentoControllers.getTerceros);
        
    }
}
const documentoRoutes= new DocumentoRoutes();
export default documentoRoutes.router;