

class TrasladosRepository{ 
   
    public getIdRequerimiento:string="select nextval('s_requerimiento')";
    public getIdTraslado:string="select nextval('s_traslado')";
    public getIdRequerimientoDetalle:string="select nextval('s_requerimiento_detalle')";
    public deleteRequerimientoDetalle:string="delete from requerimiento_detalle where requerimiento_id =$1";
    public deleteTrasladoDetalle:string="delete from traslado_detalle where traslado_id =$1";

} 

export const trasladosRepository = new TrasladosRepository();