

class TrasladosRepository{ 
   
    public getIdRequerimiento:string="select nextval('s_requerimiento')";
    public getIdRequerimientoDetalle:string="select nextval('s_requerimiento_detalle')";
    public deleteRequerimientoDetalle:string="delete from requerimiento_detalle where requerimiento_id =$1";

} 

export const trasladosRepository = new TrasladosRepository();