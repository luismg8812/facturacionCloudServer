

class EmpresaRepository{
    public pagosEmpresaByEmpresa:string="select * from PAGOS_EMPRESA where empresa_id = $1"; 
}

export const empresaRepository = new EmpresaRepository();