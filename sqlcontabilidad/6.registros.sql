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

--categoria
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
--fin categoria
--clases
INSERT INTO public.clase(clase_id, nombre,  codigo,empresa_id)VALUES (1, 'Activo', '1', 1);
INSERT INTO public.clase(clase_id, nombre,  codigo,empresa_id)VALUES (2, 'Pasivo', '2', 1);
INSERT INTO public.clase(clase_id, nombre,  codigo,empresa_id)VALUES (3, 'Patrimonio', '3', 1);
INSERT INTO public.clase(clase_id, nombre,  codigo,empresa_id)VALUES (4, 'Ingresos', '4', 1);
INSERT INTO public.clase(clase_id, nombre,  codigo,empresa_id)VALUES (5, 'Gastos', '5', 1);
INSERT INTO public.clase(clase_id, nombre,  codigo,empresa_id)VALUES (6, 'Costos de ventas', '6', 1);
INSERT INTO public.clase(clase_id, nombre,  codigo,empresa_id)VALUES(7, 'Costos de producción o de operación', '7', 1);
INSERT INTO public.clase(clase_id,  nombre, codigo,empresa_id)VALUES (8, 'Cuentas de orden deudoras', '8', 1);
INSERT INTO public.clase(clase_id, nombre,  codigo,empresa_id)VALUES (9, 'Cuentas de orden acreedoras', '9', 1);
-- clases 

--grupos
--activos
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (1, 1, 1, '11', 'Efectivo y equivalentes de efectivo');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (2, 1, 1, '12', 'Inversiones en asociadas');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (3, 1, 1, '13', 'Deudores comerciales y otras cuentas por cobrar');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (4, 1, 1, '14', 'Inventarios');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (5, 1, 1, '15', 'Propiedad planta y equipo');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (6, 1, 1, '16', 'Intangibles');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (7, 1, 1, '17', 'Otros activos no financieros');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (8, 1, 1, '18', 'Impuesto a las ganancias');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (9, 1, 1, '19', 'Otros activos financieros');
--pasivosINSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (10, 1, 2, '21', 'Pasivos financieros');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (11, 1, 2, '22', 'Proveedores');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (12, 1, 2, '23', 'Acreedores comerciales y otras cuentas por pagar');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (13, 1, 2, '24', 'Pasivos por impuestos');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (14, 1, 2, '25', 'Beneficios a empleados');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (17, 1, 2, '28', 'Pasivos no financieros');

INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (18, 1, 3, '31', 'Capital social');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (19, 1, 3, '32', 'Superávit de capital');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (20, 1, 3, '33', 'Reservas');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (21, 1, 3, '37', 'Resultados de ejercicios anteriores');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (22, 1, 3, '39', 'Afectaciones fiscales de ingresos y gastos');

INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (23, 1, 4, '41', 'Ingresos de actividades ordinarias');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (24, 1, 4, '42', 'Otros ingresos de actividades ordinarias');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (25, 1, 4, '43', 'Ganancias');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (26, 1, 4, '44', 'Ingresos fiscales');

INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (27, 1, 5, '51', 'Administrativos');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (28, 1, 5, '52', 'Ventas');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (29, 1, 5, '53', 'Otros gastos de actividades ordinarias');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (30, 1, 5, '54', 'Impuesto de renta y complementarios');

INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (31, 1, 6, '61', 'Costo de ventas y de prestación de servicios');

INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (32, 1, 7, '71', 'Costos de producción o de operación');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (33, 1, 7, '72', 'Mano de obra directa');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (34, 1, 7, '73', 'Costos indirectos');
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (35, 1, 7, '74', 'Contratos de servicios');

INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (36, 1, 8, '81', 'Derechos contingentes');

INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (37, 1, 9, '99', 'Cuentas de orden acreedoras');
--fin grupos

--cuentas
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (1, 1, 1, '1105', 'Caja');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (2, 1, 1, '1110', 'Bancos');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (3, 1, 1, '1120', 'Cuentas de ahorro');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (4, 1, 1, '1145', 'Inversiones en efectivo');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (5, 1, 2, '1205', 'Acciones');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (6, 1, 2, '1295', 'Acciones o derechos en clubes deportivos');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (7, 1, 3, '1305', 'Clientes nacionales');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (8, 1, 3, '1325', 'Cuentas por cobrar a socios y accionistas');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (9, 1, 3, '1330', 'Anticipos y avances');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (10, 1, 3, '1355', 'Anticipo de impuestos y contribuciones o');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (11, 1, 3, '1365', 'Cuentas por cobrar a trabajadores');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (12, 1, 3, '1380', 'Deudores varios');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (13, 1, 3, '1399', 'Provisiones');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (14, 1, 4, '1435', 'Mercancías no fabricadas por la empresa');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (15, 1, 4, '1498', 'Otros');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (16, 1, 5, '1504', 'Terrenos');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (17, 1, 5, '1516', 'Construcciones y edificaciones');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (18, 1, 5, '1524', 'Equipo de oficina');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (19, 1, 5, '1528', 'Equipo de computación y comunicación');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (20, 1, 5, '1540', 'Flota y equipo de transporte');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (21, 1, 5, '1592', 'Depreciación acumulada');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (22, 1, 6, '1635', 'Licencias');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (23, 1, 7, '1720', 'Entidades controladas en forma conjunta');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (24, 1, 8, '1805', 'Impuesto corriente');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (25, 1, 9, '1945', 'De inversiones');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (26, 1, 10, '2105', 'Bancos nacionales');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (27, 1, 10, '2110', 'Depósitos recibidos');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (28, 1, 11, '2205', 'Proveedores nacionales');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (29, 1, 11, '2210', 'Proveedores del exterior');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (30, 1, 12, '2305', 'Cuentas corrientes comerciales');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (31, 1, 12, '2335', 'Costos y gastos por pagar');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (32, 1, 12, '2365', 'Retenciones en la fuente');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (33, 1, 12, '2367', 'Impuesto a las ventas retenido');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (34, 1, 12, '2368', 'Impuesto de industria y comercio retenido');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (35, 1, 12, '2370', 'Aportes a empresas promotoras de salud eps');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (36, 1, 12, '2380', 'Acreedores varios');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (37, 1, 13, '2404', 'De renta y complementarios corriente');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (38, 1, 13, '2408', 'Impuesto sobre las ventas por pagar');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (39, 1, 13, '2464', 'De licores, cervezas y cigarrillos');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (40, 1, 13, '2495', 'Otros');
	
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (41, 1, 14, '2505', 'Salarios por pagar');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (42, 1, 14, '2510', 'Pasivo estimado para obligaciones laborales');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (43, 1, 15, '2805', 'Anticipos y avances recibidos');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (44, 1, 15, '2815', 'Ingresos recibidos para terceros');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (45, 1, 16, '3105', 'Capital suscrito y pagado');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (46, 1, 17, '3205', 'Prima en colocación de acciones cuotas o partes d');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (47, 1, 18, '3305', 'Reservas obligatorias');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (48, 1, 19, '3705', 'Resultados de ejercicios anteriores');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (49, 1, 19, '3710', 'Convergencia');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (50, 1, 20, '3905', 'Resultados fiscales de ventas en ganancia ocasional');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (51, 1, 21, '4135', 'Comercio al por mayor y al detal');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (52, 1, 21, '4175', 'Devolución en ventas');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (53, 1, 21, '4180', 'Servicios');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (54, 1, 22, '4210', 'Financieros');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (55, 1, 22, '4218', 'Ingresos método de participación');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (56, 1, 22, '4295', 'Diversos');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (57, 1, 23, '4305', 'Propiedad planta y equipo');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (58, 1, 24, '4405', 'Ingresos por ganancia ocasional');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (59, 1, 24, '4410', 'Ingresos renta ordinaria');	