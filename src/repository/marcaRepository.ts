class MarcaRepository{
    public getMarcas:string="select * from marca_vehiculo order by nombre"; 
    public getModeloByMarca:string="select * from modelo_marca where marca_vehiculo_id = $1 order by nombre"; 
    public getModeloById:string="select * from modelo_marca where modelo_marca_id = $1 "; 
    
}

export const marcaRepository = new MarcaRepository();