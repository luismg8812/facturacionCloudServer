

class DocumentoRepository{
    public getIdDocumento:string="select nextval('s_documento')"; 
}

export const documentoRepository = new DocumentoRepository();