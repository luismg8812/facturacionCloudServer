

class TrasladosRepository{ 
   
    public getIdRequerimiento:string="select nextval('s_requerimiento')";
    public getIdRequerimientoDetalle:string="select nextval('s_requerimiento_detalle')";

} 

export const trasladosRepository = new TrasladosRepository();