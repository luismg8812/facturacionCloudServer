

class BonoRepository{ 
   
    public getIdBono:string="select nextval('s_bono')";
    public getTiposBono:string="select * from tipo_bono";
    public getBonoById:string="select * from bono where bono_id= $1";
    
  
} 

export const bonoRepository = new BonoRepository();