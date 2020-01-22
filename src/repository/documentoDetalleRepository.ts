

class DocumentoDetalleRepository{
    public getIdDocumentoDetalle:string="select nextval('s_documento_detalle')"; 
    public getDocumentoDetalleByDocumento:string="select * from DOCUMENTO_DETALLE where documento_id = $1"; 
    
}

export const documentoDetalleRepository = new DocumentoDetalleRepository();