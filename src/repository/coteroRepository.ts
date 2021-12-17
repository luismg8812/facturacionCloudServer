

class CoteroRepository{ 
   
    public getIdCotero:string="select nextval('s_cotero')";
    public getCoterosAll:string="select * from cotero";
  
} 

export const coteroRepository = new CoteroRepository();