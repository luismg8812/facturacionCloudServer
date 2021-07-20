
CREATE  TABLE sub_GRUPO (
  sub_GRUPO_ID                         smallint NOT NULL DEFAULT nextval('S_GRUPO'),
  EMPRESA_ID			           int,
  NOMBRE                           VARCHAR(50),
  CONSTRAINT PK_sub_GRUPO
    PRIMARY KEY ( sub_GRUPO_ID ) 
);

ALTER TABLE sub_GRUPO ADD CONSTRAINT FK_EMPR_REFERENCE_sub_GRUPO
  FOREIGN KEY (EMPRESA_ID)
    REFERENCES EMPRESA (EMPRESA_ID);	

alter table producto add sub_grupo_id smallint;
ALTER TABLE PRODUCTO ADD CONSTRAINT FK_PRODUCTO_REFERENCE_sub_GRUPO
  FOREIGN KEY (sub_GRUPO_ID)
    REFERENCES sub_GRUPO (sub_GRUPO_ID);
	
	
	CREATE  TABLE TIPO_RESOLUCION (
  TIPO_RESOLUCION_ID               smallint NOT NULL,
  NOMBRE                           VARCHAR(50),
  CONSTRAINT PK_TIPO_RESOLUCION
    PRIMARY KEY ( TIPO_RESOLUCION_ID ) 
);

alter table resolucion_empresa add tipo_resolucion_id smallint;


	
	--tipo resolucion empresa
INSERT INTO TIPO_RESOLUCION (TIPO_RESOLUCION_id,NOMBRE) VALUES(1,'POS');
INSERT INTO TIPO_RESOLUCION (TIPO_RESOLUCION_id,NOMBRE) VALUES(2,'POR COMPUTADOR');
INSERT INTO TIPO_RESOLUCION (TIPO_RESOLUCION_id,NOMBRE) VALUES(3,'ELECTRONICA');
--fin tipo resolucion
create sequence S_RETIRO_CAJA
START WITH 10
increment by 1
;

CREATE  TABLE retiro_caja (
  retiro_caja_ID                   int NOT NULL,
  usuario_hace_id  				   int,
  usuario_aplica_id  				   int,
  EMPRESA_ID					   SMALLINT,
  valor								decimal,
  cierre_diario 					smallint,
  FECHA_REGISTRO                   timestamp,
  DESCRIPCION					   VARCHAR(500),
  CONSTRAINT PK_retiro_caja
    PRIMARY KEY ( retiro_caja_ID ) 
);

ALTER TABLE retiro_caja ADD CONSTRAINT FK_usuario_hace_REFERENCE_retiro_caja
  FOREIGN KEY (usuario_hace_id)
    REFERENCES usuario (usuario_id);
	
	ALTER TABLE retiro_caja ADD CONSTRAINT FK_usuario_aplica_REFERENCE_retiro_caja
  FOREIGN KEY (usuario_aplica_id)
    REFERENCES usuario (usuario_id);
	
ALTER TABLE EMPRESA ADD DIGITO_VERIFICACION			   VARCHAR(1);

CREATE  TABLE RESPONSABILIDAD_FISCAL (
  RESPONSABILIDAD_FISCAL_ID        smallint NOT NULL,
  CODIGO						   SMALLINT,
  NOMBRE                           VARCHAR(150),
   estado 						   smallint, 	
  CONSTRAINT PK_RESPONSABILIDAD_FISCAL_ID
    PRIMARY KEY ( RESPONSABILIDAD_FISCAL_ID ) 
);

CREATE  TABLE   responsabilidad_fiscal_cliente (
  responsabilidad_fiscal_cliente_ID   smallint NOT NULL,
  cliente_ID			    		  int,
  responsabilidad_fiscal_id			  smallint,
  CONSTRAINT PK_responsabilidad_fiscal_cliente
    PRIMARY KEY ( responsabilidad_fiscal_cliente_ID )
);	

ALTER TABLE responsabilidad_fiscal_cliente ADD CONSTRAINT FK_responsabilidad_fiscal_clie
 FOREIGN KEY (cliente_ID)
    REFERENCES cliente (cliente_ID);	
	
ALTER TABLE responsabilidad_fiscal_cliente ADD CONSTRAINT FK_responsabilidad_fiscal_fiscal
 FOREIGN KEY (responsabilidad_fiscal_id)
    REFERENCES responsabilidad_fiscal (responsabilidad_fiscal_id);	
	
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (1,'Aporte especial para la administración de justicia' , 1, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (2,'Gravamen a los movimientos financieros' , 2, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (3, 'Impuesto al patrimonio', 3, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (4, 'Impuesto de renta y complementario régimen especial',4 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (5, 'Impuesto de renta y complementario régimen ordinario',5 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (6, 'Ingresos y patrimonio', 6, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (7, 'Retención en la fuente a título de renta',7 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (8,'Retención timbre nacional' , 8, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (9,'Retención en la fuente en el impuesto sobre las ventas' ,9 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (10,'Usuario aduanero' , 10, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (11, 'Gran contribuyente',13 ,1 );
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (12,'Informante de exógena' ,14 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (13,'Autorretenedor' , 15,1 );
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (14, 'Obligación a facturar por ingresos bienes y/o servicios excluidos',16 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (15, 'Profesionales de compra y venta de divisas', 17, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (16, 'Precios de transferencia', 18, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (17, 'Productor de bienes y/o servicios exentos (incluye exportadores)', 19, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (18, 'Obtención NIT Dto. 3050 de 1997 (Art. 3o)', 20, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (19, 'Declarar ingreso o salida del país de divisas o moneda legal', 21, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (20, 'Obligado a declarar a nombre de terceros', 22, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (21, 'Agente de retención en ventas', 23, 1 );
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (22, 'Declaración consolidada precios de transferencia',24 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (23, 'Declaración individual precios de transferencia', 26, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (24, 'Impuesto Nacional a la Gasolina y al ACPM', 32, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (25, 'Impuesto sobre la renta para la equidad  CREE',35 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (26, 'Establecimiento permanente', 36, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (27, 'Clientes seleccionados por resolución del Director General como obligados a facturar electrónicamente', 37, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (28, 'Obligado a Facturar Electrónicamente ', 38, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (29, 'Proveedor de Servicios Tecnológicos PST',39 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (30, 'Impuesto a la Riqueza',40 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (31, 'Declaración anual de activos en el exterior ',41 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (32, 'Obligado a Llevar Contabilidad', 42, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (33, 'Régimen simple de tributación',47 ,1 );
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (34, 'Impuesto sobre las ventas', 48, 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (35, 'No responsable de IVA', 49,1 );
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (36, 'No responsable de consumo restaurantes y bares',50 , 0);
INSERT INTO public.responsabilidad_fiscal(responsabilidad_fiscal_id, nombre,codigo, estado)VALUES (37, 'Agente de retención impoconsumo de bienes inmuebles', 51, 0);

create sequence s_responsabilidad_fiscal_cliente_id
START WITH 10
increment by 1
;
ALTER TABLE CLIENTE ADD  RAZON_SOCIAL                     VARCHAR(100);
ALTER TABLE CLIENTE ADD  DIGITO_VERIFICACION			   VARCHAR(1);

create sequence S_PRODUCTO_PRECIOS
START WITH 10
increment by 1
;

CREATE  TABLE PRODUCTO_PRECIOS (
  PRODUCTO_PRECIOS_ID              int NOT NULL DEFAULT nextval('S_PRODUCTO_PRECIOS'),
  PRODUCTO_ID			           int,
  PRECIO_2						   DECIMAL,
  PRECIO_3						   DECIMAL,
  PRECIO_4						   DECIMAL,
  PRECIO_5						   DECIMAL,
  PRECIO_6						   DECIMAL,
  PRECIO_7						   DECIMAL,
  PRECIO_8						   DECIMAL,
  PRECIO_9						   DECIMAL,
  PRECIO_10						   DECIMAL,
  CONSTRAINT PK_PRODUCTO_GRUPO
    PRIMARY KEY ( PRODUCTO_ID ) 
);

ALTER TABLE PRODUCTO_PRECIOS ADD CONSTRAINT FK_PROD_REFERENCE_PRECIO
  FOREIGN KEY (PRODUCTO_ID)
    REFERENCES PRODUCTO (PRODUCTO_ID);	

INSERT INTO public.activacion(	activacion_id, nombre,descripcion)	VALUES (25, 'Activar multiples precios para productos productos',' Permite asignar multiples precios para los productos en la facturación');

create sequence S_CAMPO_INVENTARIO_USUARIO
START WITH 10
increment by 1
;


CREATE  TABLE CAMPO_INVENTARIO (
  CAMPO_INVENTARIO_ID              smallint NOT NULL ,
  NOMBRE                           VARCHAR(100),
  DESCRIPCION					   VARCHAR(200),
  CONSTRAINT PK_CAMPO_INVENTARIO
    PRIMARY KEY ( CAMPO_INVENTARIO_ID ) 
);


CREATE  TABLE CAMPO_INVENTARIO_USUARIO (
  CAMPO_INVENTARIO_USUARIO_ID      int NOT NULL DEFAULT nextval('S_CAMPO_INVENTARIO_USUARIO'),
  CAMPO_INVENTARIO_ID                    smallint,
  USUARIO_ID                       int,
  CONSTRAINT PK_CAMPO_INVENTARIO_USUARIO
    PRIMARY KEY ( CAMPO_INVENTARIO_USUARIO_ID ) 
);

ALTER TABLE CAMPO_INVENTARIO_USUARIO ADD CONSTRAINT FK_CAMPO_INVENTARIO_REFERENCE_USUARIO
 FOREIGN KEY (USUARIO_ID)
    REFERENCES USUARIO (USUARIO_ID);	
	
	ALTER TABLE CAMPO_INVENTARIO_USUARIO ADD CONSTRAINT FK_CAMPO_USUARIO_REFERENCE_CAMPO
 FOREIGN KEY (CAMPO_INVENTARIO_ID)
    REFERENCES CAMPO_INVENTARIO (CAMPO_INVENTARIO_ID);	
	
INSERT INTO public.campo_inventario(campo_inventario_id, nombre, descripcion) VALUES (1, 'Cantidad', 'Cantidad del producto');
INSERT INTO public.campo_inventario(campo_inventario_id, nombre, descripcion) VALUES (2, 'Costo', 'Costo del producto');
INSERT INTO public.campo_inventario(campo_inventario_id, nombre, descripcion) VALUES (3, 'Costo publico', 'Precio de venta del producto en inventario fisico');
INSERT INTO public.campo_inventario(campo_inventario_id, nombre, descripcion) VALUES (4, 'IVA', 'IVA del producto en inventario fisico');
INSERT INTO public.campo_inventario(campo_inventario_id, nombre, descripcion) VALUES (5, 'Pesado', 'Campo para activar o desactivar la gramera');
INSERT INTO public.campo_inventario(campo_inventario_id, nombre, descripcion) VALUES (6, 'Cod. Barras', 'Codigo de barras del producto');
INSERT INTO public.campo_inventario(campo_inventario_id, nombre, descripcion) VALUES (7, 'Promociones', 'Configuración de las promociones del producto');
INSERT INTO public.campo_inventario(campo_inventario_id, nombre, descripcion) VALUES (8, 'Utilidad', 'Utilidad del producto');
INSERT INTO public.campo_inventario(campo_inventario_id, nombre, descripcion) VALUES (9, 'Diferencia', 'Diferencia del costo y costo publico');

create sequence S_USUARIO_EMPLEADO
START WITH 10
increment by 1
;

CREATE  TABLE USUARIO_EMPLEADO (
  USUARIO_EMPLEADO_ID      int NOT NULL DEFAULT nextval('S_USUARIO_EMPLEADO'),
  USUARIO_ID                       int,
  EMPLEADO_ID                       int,
  CONSTRAINT PK_USUARIO_EMPLEADO
    PRIMARY KEY ( USUARIO_EMPLEADO_ID ) 
);

ALTER TABLE USUARIO_EMPLEADO ADD CONSTRAINT FK_USU_EMPLE_REFERENCE_USUARIO
 FOREIGN KEY (USUARIO_ID)
    REFERENCES USUARIO (USUARIO_ID);	

ALTER TABLE USUARIO_EMPLEADO ADD CONSTRAINT FK_USU_EMPLE_REFERENCE_EMPLEADO
 FOREIGN KEY (EMPLEADO_ID)
    REFERENCES EMPLEADO (EMPLEADO_ID);	

INSERT INTO public.activacion(	activacion_id, nombre,descripcion)	VALUES (26, 'Activar permisos para reapertura de ordenes de trabajo',' se otorgan permisos para reapertura de ordenes de trabajo');	
INSERT INTO public.activacion(	activacion_id, nombre,descripcion)	VALUES (27, 'Activar creación de productos desde la venta','se otorgan permisos para permitir la creación de productos dentro de punto de venta dia y gestion de ordenes de trabajo');


create sequence S_VEHICULO
START WITH 10
increment by 1
;

CREATE  TABLE VEHICULO (
  VEHICULO_ID                        int NOT NULL,
  CLIENTE_ID                         int,
  MARCA_VEHICULO_ID					 smallint,
  MODELO_MARCA_ID                    int ,
  PLACA                              VARCHAR(10),
  LINEA_VEHICULO                     VARCHAR(20),
  CONSTRAINT PK_VEHICULO
    PRIMARY KEY ( VEHICULO_ID ) 
);

ALTER TABLE VEHICULO ADD CONSTRAINT FK_VEHICULO_REFERENCE_CLIENT
 FOREIGN KEY (CLIENTE_ID)
    REFERENCES CLIENTE (CLIENTE_ID);

ALTER TABLE VEHICULO ADD CONSTRAINT FK_VEHICULO_REFERENCE_MARCA
 FOREIGN KEY (MARCA_VEHICULO_ID)
    REFERENCES MARCA_VEHICULO (MARCA_VEHICULO_ID);

ALTER TABLE VEHICULO ADD CONSTRAINT FK_VEHICULO_REFERENCE_MODELO
 FOREIGN KEY (MODELO_MARCA_ID)
    REFERENCES MODELO_MARCA (MODELO_MARCA_ID);	
	
	
	
create sequence S_BONO
START WITH 10
increment by 1
;	

CREATE  TABLE TIPO_BONO (
  TIPO_BONO_ID              smallint NOT NULL ,
  NOMBRE                           VARCHAR(100),
  CONSTRAINT PK_TIPO_BONO
    PRIMARY KEY ( TIPO_BONO_ID ) 
);	
	
CREATE  TABLE BONO (
  BONO_ID                        int NOT NULL,
  VEHICULO_ID                         int,
  TIPO_BONO_ID					 smallint,
  USUARIO_ID                    int ,
  DOCUMENTO_ID					BIGint,
  EMPRESA_ID					INT,
  OBSERVACION                   VARCHAR(300),
  TOTAL							DECIMAL,
  ESTADO						VARCHAR(20),
  FECHA_REGISTRO                timestamp,
  FECHA_USO                		timestamp,
  CONSTRAINT PK_BONO
    PRIMARY KEY ( BONO_ID ) 
);

ALTER TABLE BONO ADD CONSTRAINT FK_VEHICULO_REFERENCE_BONO
 FOREIGN KEY (VEHICULO_ID)
    REFERENCES VEHICULO (VEHICULO_ID);	

ALTER TABLE BONO ADD CONSTRAINT FK_TIPO_BONO_REFERENCE_BONO
 FOREIGN KEY (TIPO_BONO_ID)
    REFERENCES TIPO_BONO (TIPO_BONO_ID);	

ALTER TABLE BONO ADD CONSTRAINT FK_USU_REFERENCE_BONO
 FOREIGN KEY (USUARIO_ID)
    REFERENCES USUARIO (USUARIO_ID);		
	
	ALTER TABLE BONO ADD CONSTRAINT FK_DOCUMENTO_REFERENCE_BONO
 FOREIGN KEY (DOCUMENTO_ID)
    REFERENCES DOCUMENTO (DOCUMENTO_ID);	
	
ALTER TABLE BONO ADD CONSTRAINT FK_empr_REFERENCE_BONO
 FOREIGN KEY (EMPRESA_ID)
    REFERENCES EMPRESA (EMPRESA_ID);	


INSERT INTO public.sub_menu(sub_menu_id, menu_id, nombre, url, op, descripcion)VALUES (27, null, 'Gestión de bonos', '/bonos', 1, 'Opción que permite controlar bonos para las promociones');			

alter table empresa add correo varchar(50);

INSERT INTO public.sub_menu(sub_menu_id, menu_id, nombre, url, op, descripcion)VALUES (28, 3, 'Kardex', '/kardex', 0, 'Opción que permite realizar el seguimiento del comportamiento de un determinado producto');
alter table documento_detalle add saldo decimal;

CREATE  TABLE   SUB_PRODUCTO (
  SUB_PRODUCTO_ID                 int NOT NULL,
  PRODUCTO_PADRE                   int,
  PRODUCTO_HIJO                    int,
  CANTIDAD                         decimal,
  ESTADO                           smallint,
  CONSTRAINT PK_SUB_PRODUCTO
    PRIMARY KEY ( SUB_PRODUCTO_ID ) 
);

ALTER TABLE SUB_PRODUCTO ADD CONSTRAINT FK_SUB_PRO_REFEREN_SUB_PRO_PA
 FOREIGN KEY (PRODUCTO_PADRE)
    REFERENCES PRODUCTO (PRODUCTO_ID);
    
ALTER TABLE SUB_PRODUCTO ADD CONSTRAINT FK_SUB_PRO_REFEREN_SUB_PRO_HI
 FOREIGN KEY (PRODUCTO_HIJO)
    REFERENCES PRODUCTO (PRODUCTO_ID);

create sequence s_sub_producto
START WITH 10
increment by 1
;
	
INSERT INTO public.activacion(	activacion_id, nombre,descripcion)	VALUES (28, 'Activar facturación para cantidades negativas','si se tiene activa esta opción se permite facturar productos que tengan cantidades por debajo de 0');	
INSERT INTO public.activacion(	activacion_id, nombre,descripcion)	VALUES (29, 'Activar usuario para multiples empresas','el usuario que tenga activada esta opción prodrá ver los registros de todas las sucursales registradas');

 alter table producto add REGISTRO_SANITARIO	 VARCHAR(200);
 alter table producto add lote						   VARCHAR(200);
 alter table producto add cum			   VARCHAR(200);
 alter table producto add laboratorio			   VARCHAR(200);

INSERT INTO public.activacion(	activacion_id, nombre,descripcion)	VALUES (30, 'Activar Productos especiales desde punto de venta','Esta opción permite agregar productos que NO existan en el inventario y facturarlos');

alter table documento add resolucion_empresa_id smallint;
	
	ALTER TABLE DOCUMENTO ADD CONSTRAINT FK_DOCU_REFERENCE_resolucion
  FOREIGN KEY (RESOLUCION_EMPRESA_ID)
    REFERENCES RESOLUCION_EMPRESA (RESOLUCION_EMPRESA_ID);
	
INSERT INTO public.activacion(	activacion_id, nombre,descripcion)	VALUES (31, 'Activar Envío de facturas electrónicas automaticamente','Esta opción permite que las facturas electronicas que se generan sean enviadas automanticanente a la DIAN');	
INSERT INTO public.sub_menu(sub_menu_id, menu_id, nombre, url, op, descripcion)VALUES (32, 5, 'Reporte de terceros', '/reporteTerceros', 0, 'Opción que permite ver las compras o ventas de los clientes o proveedores durante un rango de fechas determinado');

alter table empresa add identificador int; 

alter table abono add cierre_diario smallint;

CREATE  TABLE   CONTROL_INVENTARIO (
  control_inventario_id                 int NOT NULL,
  producto_id							int,
  nombre                                VARCHAR(200),
  EMPRESA_ID					        INT,
  inicial                   			int,
  entrada                    			int,
  venta                         		decimal,
  fecha_cierre                     		timestamp,
  CONSTRAINT PK_CONTROL_INVENTARIO
    PRIMARY KEY ( control_inventario_id ) 
);

 --alter table control_inventario add nombre                                VARCHAR(200);
    --alter table control_inventario add empresa_id                                int;

ALTER TABLE CONTROL_INVENTARIO ADD CONSTRAINT FK_producto_REFEREN_control_inv
 FOREIGN KEY (producto_id)
    REFERENCES PRODUCTO (PRODUCTO_ID);	


INSERT INTO public.sub_menu(sub_menu_id, menu_id, nombre, url, op, descripcion)VALUES (33, 5, 'Control de inventario', '/controlImventario', 0, 'Esta opción permite controlar el inventario de los productos que ingresan vs los productos que salen entre cierre diario y cierre diario');

create sequence s_control_inventario
START WITH 10
increment by 1
;

create sequence s_auditoria
START WITH 10
increment by 1
;

CREATE  TABLE   accion_auditoria (
  accion_auditoria_id                 smallint NOT NULL,
  nombre                        VARCHAR(200),
  CONSTRAINT PK_accion_auditoria
    PRIMARY KEY ( accion_auditoria_id ) 
);

CREATE  TABLE   AUDITORIA (
  auditoria_id                 int NOT NULL,
  accion_auditoria_id						smallint,
  usuario_id							int,
  valor_anterior                        VARCHAR(200),
  valor_actual                          VARCHAR(200),
  aplicativo                            VARCHAR(200),
  observacion                           VARCHAR(200),
  EMPRESA_ID					        INT,
  fecha_registro                     		timestamp,
  CONSTRAINT PK_auditoria
    PRIMARY KEY ( auditoria_id ) 
);

ALTER TABLE AUDITORIA ADD CONSTRAINT FK_accion_REFEREN_auditoria
 FOREIGN KEY (accion_auditoria_id)
    REFERENCES accion_auditoria (accion_auditoria_id);

--accion auditoria
INSERT INTO public.accion_auditoria(accion_auditoria_id, nombre) VALUES (1, 'Cambio de precio inventario fisico');
INSERT INTO public.accion_auditoria(accion_auditoria_id, nombre) VALUES (2, 'Cambio de precio entrada de almacen');
INSERT INTO public.accion_auditoria(accion_auditoria_id, nombre) VALUES (3, 'Cambio de precio edicion de producto');
INSERT INTO public.accion_auditoria(accion_auditoria_id, nombre) VALUES (4, 'eliminacion de producto');
INSERT INTO public.accion_auditoria(accion_auditoria_id, nombre) VALUES (5, 'creacion de producto');
INSERT INTO public.accion_auditoria(accion_auditoria_id, nombre) VALUES (6, 'Cambio de precio entrada de almacen');
INSERT INTO public.accion_auditoria(accion_auditoria_id, nombre) VALUES (7, 'Descuento');
--accion auditoria	

--PESADO EN SUBPRODUCTO
ALTER TABLE SUB_PRODUCTO ADD PESADO  smallint;

GRANT ALL PRIVILEGES ON DATABASE facturacion_local to facturacion;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO facturacion;	
GRANT ALL PRIVILEGES ON ALL sequences IN SCHEMA public TO facturacion;
commit;