select empleado.nombre, documento.documento_id, documento_detalle.parcial, 
documento.detalle_entrada, documento.fecha_registro
from empleado, documento,documento_detalle
where documento_detalle.documento_id = documento.documento_id
and documento.empleado_id= empleado.empleado_id
and documento.impreso=1
and documento.fecha_registro BETWEEN '2022-09-01 01:27:57.186' and '2022-09-30 16:27:57.186'
and documento_detalle.producto_id=357