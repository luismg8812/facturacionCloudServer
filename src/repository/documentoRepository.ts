

class DocumentoRepository{
    public getIdDocumento:string="select nextval('s_documento')"; 
    public getIdDocumentoInvoice:string="select nextval('s_DOCUMENTO_INVOICE')"; 
    public getIdDocumentoNota:string="select nextval('s_DOCUMENTO_NOTA')"; 
    public getOrdenesTrabajo:string=""; 
}

export const documentoRepository = new DocumentoRepository();