--opciones empalme
INSERT INTO MENU (MENU_ID,NOMBRE) VALUES(6,'Contabilidad');
INSERT INTO public.sub_menu(sub_menu_id, menu_id, nombre, url, op, descripcion)VALUES (26, 6, 'Cuentas contables', '/cuentasContables', 0, 'Opción que permite gestionar los abonos de las cuentas contrables segun PUC');
--fin opciones empalme

--secuencias
create sequence S_CLASE
START WITH 10
increment by 1
;

create sequence S_GRUPO_CONTABLE
START WITH 10
increment by 1
;

create sequence S_CUENTA
START WITH 10
increment by 1
;

create sequence S_SUB_CUENTA
START WITH 10
increment by 1
;

create sequence S_AUXILIAR
START WITH 10
increment by 1
;


--fin secuencias

--tablas
CREATE  TABLE CLASE (
  CLASE_ID                         smallint NOT NULL DEFAULT nextval('S_CLASE'),
  EMPRESA_ID			           int,
  codigo			               VARCHAR(2),
  NOMBRE                           VARCHAR(50),
  CONSTRAINT PK_CLASE
    PRIMARY KEY ( CLASE_ID ) 
);

ALTER TABLE CLASE ADD CONSTRAINT FK_EMPR_REFERENCE_CLASE
  FOREIGN KEY (EMPRESA_ID)
    REFERENCES EMPRESA (EMPRESA_ID);

CREATE  TABLE CATEGORIA (
  CATEGORIA_ID                     smallint NOT NULL,
  NOMBRE                           VARCHAR(50),
  CONSTRAINT PK_CATEGORIA
    PRIMARY KEY ( CATEGORIA_ID ) 
);

CREATE  TABLE VENCIMIENTO(
  VENCIMIENTO_ID                     smallint NOT NULL,
  NOMBRE                           VARCHAR(50),
  CONSTRAINT PK_VENCIMIENTO
    PRIMARY KEY ( VENCIMIENTO_ID ) 
);

CREATE  TABLE GRUPO_CONTABLE (
  GRUPO_CONTABLE_ID                smallint NOT NULL DEFAULT nextval('S_GRUPO_CONTABLE'),
  EMPRESA_ID			           int,
  CLASE_ID                         smallint,
  codigo			               VARCHAR(3),
  NOMBRE                           VARCHAR(50),
  CONSTRAINT PK_GRUPO_CONTABLE
    PRIMARY KEY ( GRUPO_CONTABLE_ID ) 
);

ALTER TABLE GRUPO_CONTABLE ADD CONSTRAINT FK_EMPR_REFERENCE_GRUPO_CONTA
  FOREIGN KEY (EMPRESA_ID)
    REFERENCES EMPRESA (EMPRESA_ID);
ALTER TABLE GRUPO_CONTABLE ADD CONSTRAINT FK_CLASE_REFERENCE_GRUPO_CONTA
  FOREIGN KEY (CLASE_ID)
    REFERENCES CLASE (CLASE_ID);	
	
CREATE  TABLE CUENTA(
  CUENTA_ID                smallint NOT NULL DEFAULT nextval('S_CUENTA'),
  EMPRESA_ID			           int,
  GRUPO_CONTABLE_ID                         smallint,
  codigo			               VARCHAR(5),
  NOMBRE                           VARCHAR(50),
  CONSTRAINT PK_CUENTA
    PRIMARY KEY ( CUENTA_ID ) 
);

ALTER TABLE CUENTA ADD CONSTRAINT FK_EMPR_REFERENCE_CUENTA
  FOREIGN KEY (EMPRESA_ID)
    REFERENCES EMPRESA (EMPRESA_ID);
ALTER TABLE CUENTA ADD CONSTRAINT FK_GRUPO_CONTA_REFERENCE_CUENTA
  FOREIGN KEY (GRUPO_CONTABLE_ID)
    REFERENCES GRUPO_CONTABLE (GRUPO_CONTABLE_ID);	
	
CREATE  TABLE SUB_CUENTA(
  SUB_CUENTA_ID              	   smallint NOT NULL DEFAULT nextval('S_SUB_CUENTA'),
  EMPRESA_ID			           int,
  CUENTA_ID                			smallint,
  codigo			               VARCHAR(7),
  NOMBRE                           VARCHAR(50),
  CONSTRAINT PK_SUB_CUENTA
    PRIMARY KEY ( SUB_CUENTA_ID ) 
);

ALTER TABLE SUB_CUENTA ADD CONSTRAINT FK_EMPR_REFERENCE_SUB_CUENTA
  FOREIGN KEY (EMPRESA_ID)
    REFERENCES EMPRESA (EMPRESA_ID);
ALTER TABLE SUB_CUENTA ADD CONSTRAINT FK_CUENTA_REFERENCE_SUB_CUENTA
  FOREIGN KEY (CUENTA_ID)
    REFERENCES CUENTA (CUENTA_ID);	

CREATE  TABLE AUXILIAR(
  AUXILIAR_ID              	       smallint NOT NULL DEFAULT nextval('S_AUXILIAR'),
  EMPRESA_ID			           int,
  SUB_CUENTA_ID                	   smallint,
  CATEGORIA_ID                     smallint,
  VENCIMIENTO_ID                   smallint,
  codigo			               VARCHAR(20),
  NOMBRE                           VARCHAR(50),
  DIFERENCIA_FISCAL				   smallint,
  ESTADO						   smallint,
  CONSTRAINT PK_AUXILIAR
    PRIMARY KEY ( AUXILIAR_ID ) 
);

ALTER TABLE AUXILIAR ADD CONSTRAINT FK_EMPR_REFERENCE_AUXILIAR
  FOREIGN KEY (EMPRESA_ID)
    REFERENCES EMPRESA (EMPRESA_ID);
ALTER TABLE AUXILIAR ADD CONSTRAINT FK_SUB_CUENTA_REFERENCE_AUXILIAR
  FOREIGN KEY (SUB_CUENTA_ID)
    REFERENCES SUB_CUENTA (SUB_CUENTA_ID);		
ALTER TABLE AUXILIAR ADD CONSTRAINT FK_SUB_CUENTA_REFERENCE_CATEGORIA
  FOREIGN KEY (CATEGORIA_ID)
    REFERENCES CATEGORIA (CATEGORIA_ID);		
ALTER TABLE AUXILIAR ADD CONSTRAINT FK_SUB_CUENTA_REFERENCE_VENCIMIENTO
  FOREIGN KEY (VENCIMIENTO_ID)
    REFERENCES VENCIMIENTO (VENCIMIENTO_ID);		
--fin tablas
-- registros
INSERT INTO public.categoria(categoria_id, nombre)VALUES (1, 'Caja - Bancos');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (2, 'Cuentas por cobrar');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (3, 'Otros activos corrientes');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (4, 'Inventarios');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (5, 'Activos fijos');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (6, 'Otros activos');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (7, 'Cuentas por pagar');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (8, 'Otros activos corrientes');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (9, 'Pasivos corto plazo');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (10, 'Pasivos largos plazos');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (11, 'Otros pasivos');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (12, 'Patrimonio');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (13, 'Ingresos');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (14, 'Otros ingresos');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (15, 'Costos ventas');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (16, 'Gastos');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (17, 'Otros Gastos');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (18, 'Orden');
INSERT INTO public.categoria(categoria_id, nombre)VALUES (19, 'Gasto - Nómina');	

	