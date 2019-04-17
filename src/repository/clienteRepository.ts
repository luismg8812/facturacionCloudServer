

class ClienteRepository{
    public getClientesByEmpresa:string="select * from cliente where empresa_id = $1"; 
}

export const clienteRepository = new ClienteRepository();