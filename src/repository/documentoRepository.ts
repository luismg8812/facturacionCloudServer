

class DocumentoRepository{
    public getIdDocumento:string="select nextval('s_documento')"; 
    public getIdDocumentoInvoice:string="select nextval('s_DOCUMENTO_INVOICE')"; 
    public getIdDocumentoNota:string="select nextval('s_DOCUMENTO_NOTA')"; 
    public getOrdenesTrabajo:string=""; 
    public getFechaRegistro:string="select fecha_registro from documento where documento_id = $1"; 
    public getfechaNow:string="select CURRENT_TIMESTAMP fecha_registro"; 

}

export const documentoRepository = new DocumentoRepository();