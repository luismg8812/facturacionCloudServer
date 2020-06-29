

class AbonoRepository{
  
    public getIdAbono:string="select nextval('s_abono')";
    public getAbonosByDocumento:string="select * from abono where documento_id = $1";
  
}

export const abonoRepository = new AbonoRepository();