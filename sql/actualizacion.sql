
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


GRANT ALL PRIVILEGES ON DATABASE facturacion_local to facturacion;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO facturacion;	
GRANT ALL PRIVILEGES ON ALL sequences IN SCHEMA public TO facturacion;
commit;