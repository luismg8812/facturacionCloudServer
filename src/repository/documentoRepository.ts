

class DocumentoRepository{
    public getIdDocumento:string="select nextval('s_documento')"; 
    public getOrdenesTrabajo:string=""; 
}

export const documentoRepository = new DocumentoRepository();