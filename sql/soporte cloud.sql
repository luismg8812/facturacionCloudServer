/*select sum(a.reltuples) from (
SELECT 
nspname AS schemaname,relname,reltuples::integer 
FROM pg_class C 
LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace) 
WHERE 
nspname NOT IN ('pg_catalog', 'information_schema') AND 
relkind='r' 
ORDER BY reltuples DESC
) a*/

--delete from documento_detalle where documento_detalle_id in (select documento_detalle_id from documento_detalle where estado=0 order by documento_detalle_id desc );

/*select * from documento where total=0  and documento_id not in (
 select documento_detalle.documento_id from documento, documento_detalle where documento.documento_id = documento_detalle.documento_id
);*/

/*delete from documento where total=0  and documento_id not in (
 select documento_detalle.documento_id from documento, documento_detalle where documento.documento_id = documento_detalle.documento_id
);*/

/*select * from documento_detalle where documento_detalle_id not in (
 select documento_detalle.documento_detalle_id from documento, documento_detalle where documento.documento_id = documento_detalle.documento_id
);*/

delete from cliente where cliente_id in (  SELECT cliente_id
FROM (  SELECT  *, 
                COUNT(*) OVER(PARTITION BY documento) N
        FROM cliente) as A
WHERE N > 1) 
and cliente_id not in (15,20,53,59,63,66,137,146,174,206,229,235)
,
delete from bono where vehi =224;
select * from vehiculo where cliente_id = 10;
delete from cliente where documento  in ('1143941218');

select * from documento where cliente_id in (355);

delete from modelo_marca where modelo_marca_id not in (138,141,144,223,308,337,339,346,355,358,371,410,417,420,421,424,430,517,520,526,529,530,589,635,687,696,736,739,740,913,915,928,961,970);  



