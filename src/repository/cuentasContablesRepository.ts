

class CuentasContablesRepository{ 
  
    public getIdAbono:string="select nextval('s_abono')";
    public getClasesContables:string="select * from clase where empresa_id = $1";
    public getGrupoByClase:string="select * from grupo_contable where clase_id = $1 order by grupo_contable_id ";
    public getCuentaByGrupo:string="select * from cuenta where grupo_contable_id = $1 order by cuenta_id ";
    public getSubCuentaByCuenta:string="select * from sub_cuenta where cuenta_id = $1 order by sub_cuenta_id ";
    public getAuxiliarBySubCuenta:string="select * from auxiliar where sub_cuenta_id = $1 order by auxiliar_id desc ";
    
}

export const cuentasContablesRepository = new CuentasContablesRepository();