

class DocumentoDetalleRepository{
    public getIdDocumentoDetalle:string="select nextval('s_documento_detalle')"; 
    public getDocumentoDetalleByDocumento:string="select * from DOCUMENTO_DETALLE where estado=1 and documento_id = $1"; 
    public getfechaNow:string="select CURRENT_TIMESTAMP fecha_registro"; 
    public getFechaRegistro:string="select fecha_registro from documento_detalle where documento_detalle_id = $1"; 
}

export const documentoDetalleRepository = new DocumentoDetalleRepository();