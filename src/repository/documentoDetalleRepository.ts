

class DocumentoDetalleRepository{
    public getIdDocumentoDetalle:string="select nextval('s_documento_detalle')"; 
}

export const documentoDetalleRepository = new DocumentoDetalleRepository();