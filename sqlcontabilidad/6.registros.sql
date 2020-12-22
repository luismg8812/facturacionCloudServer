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

--vencimientos
INSERT INTO public.vencimiento(vencimiento_id, nombre)VALUES (1, 'No maneja vencimiento');
INSERT INTO public.vencimiento(vencimiento_id, nombre)VALUES (2, 'Con vencimiento en cartera');
INSERT INTO public.vencimiento(vencimiento_id, nombre)VALUES (3, 'Con vencimiento en proveedores');
--fin vencimientos

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
INSERT INTO public.grupo_contable(grupo_contable_id, empresa_id, clase_id, codigo, nombre) VALUES (10, 1, 2, '21', 'Pasivos financieros');
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

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (43, 1, 17, '2805', 'Anticipos y avances recibidos');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (44, 1, 17, '2815', 'Ingresos recibidos para terceros');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (45, 1, 18, '3105', 'Capital suscrito y pagado');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (46, 1, 19, '3205', 'Prima en colocación de acciones cuotas o partes d');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (47, 1, 20, '3305', 'Reservas obligatorias');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (48, 1, 21, '3705', 'Resultados de ejercicios anteriores');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (49, 1, 21, '3710', 'Convergencia');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (50, 1, 22, '3905', 'Resultado fiscale de ventas en ganancia ocasional');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (51, 1, 23, '4135', 'Comercio al por mayor y al detal');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (52, 1, 23, '4175', 'Devolución en ventas');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (53, 1, 23, '4180', 'Servicios');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (54, 1, 24, '4210', 'Financieros');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (55, 1, 24, '4218', 'Ingresos método de participación');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (56, 1, 24, '4295', 'Diversos');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (57, 1, 25, '4305', 'Propiedad planta y equipo');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (58, 1, 26, '4405', 'Ingresos por ganancia ocasional');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (59, 1, 26, '4410', 'Ingresos renta ordinaria');	

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (60, 1, 27, '5105', 'Gastos de personal');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (61, 1, 27, '5110', 'Honorarios');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (62, 1, 27, '5115', 'Impuestos');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (63, 1, 27, '5120', 'Arrendamientos');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (64, 1, 27, '5125', 'Contribuciones y afiliaciones');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (65, 1, 27, '5130', 'Seguros');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (66, 1, 27, '5135', 'Servicios');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (67, 1, 27, '5140', 'Gastos legales');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (68, 1, 27, '5145', 'Mantenimiento y reparaciones');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (69, 1, 27, '5150', 'Adecuación e instalación');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (70, 1, 27, '5155', 'Gastos de viaje');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (71, 1, 27, '5160', 'Depreciaciones');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (72, 1, 27, '5165', 'Amortizaciones');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (73, 1, 27, '5195', 'Diversos');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (74, 1, 27, '5199', 'Otros gastos');	

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (75, 1, 28, '5205', 'Gastos de personal');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (76, 1, 28, '5235', 'Servicios');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (77, 1, 28, '5255', 'Gastos de viaje');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (78, 1, 28, '5295', 'Diversos');	

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (79, 1, 29, '5305', 'Financieros');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (80, 1, 29, '5310', 'Perdida en venta y retiro de bienes');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (81, 1, 29, '5315', 'Gastos extraordinarios');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (82, 1, 29, '5395', 'Gastos diversos');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (83, 1, 30, '5405', 'Impuesto de renta y complementarios');	

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (84, 1, 31, '6135', 'Comercio al por mayor y al por menor');
INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (85, 1, 31, '6180', 'Servicios');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (86, 1, 32, '7105', 'Costos de producción o de operación');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (87, 1, 33, '7205', 'Mano de obra directa');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (88, 1, 34, '7305', 'Costos indirectos');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (89, 1, 35, '7405', 'Contratos de servicios');

INSERT INTO public.cuenta(cuenta_id, empresa_id, grupo_contable_id, codigo, nombre) VALUES (90, 1, 37, '9999', 'Cuenta puente');

--fin cuentas

--sub cuentas
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (1, 1, 1, '110505','Caja general');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (2, 1, 1, '110510','Cajas menores');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (3, 1, 2, '111005','Moneda nacional');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (4, 1, 3, '112005','Bancos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (5, 1, 4, '114505','Fiducias');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (6 , 1,5, '120535','Comercio al por mayor y al por menor');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (7 , 1,6, '129515','Acciones o derechos en clubes deportivos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (8 , 1,6, '129595','Otras inversiones');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (9 , 1,7, '130505','Clientes nacionales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (10 , 1,7, '130510','Clientes del exterior');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (11 , 1, 8, '132510','A accionistas');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (12 , 1, 9, '133005','A proveedores');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (13 , 1, 9, '133010','A contratistas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (14 , 1, 9, '133015','A trabajadores');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (15 , 1, 9, '133095','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (16 , 1, 10, '135510','Anticipo de impuestos de industria y com.');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (17 , 1, 10, '135515','Anticipo Retención en la fuente');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (18 , 1, 10, '135517','Impuesto a las ventas retenido');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (19 , 1, 10, '135518','Impuesto de industria y comercio retenido');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (20 , 1, 11, '136515','Educación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (21 , 1, 11, '136525','Calamidad domestica');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (22 , 1, 12, '138095','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (23 , 1, 13, '139905','Clientes');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (24 , 1, 14, '143501','Mercancías no fabricadas');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (25 , 1, 15, '149801','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (26 , 1, 16, '150405','Urbanos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (27 , 1, 17, '151605','Edificios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (28 , 1, 17, '151610','Edificios');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (29 , 1, 18, '152405','Muebles y enseres');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (30 , 1, 18, '152410','Equipos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (31 , 1, 19, '152805','Equipos de procesamiento de datos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (32 , 1, 20, '154005','Vehículos en leasing');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (33 , 1, 21, '159205','Construcciones y edificaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (34 , 1, 21, '159215','Equipo de oficina');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (35 , 1, 21, '159220','Equipo de computación y comunicación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (36 , 1, 21, '159235','Flota y equipo de transporte');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (37 , 1, 22, '163501','Derecho de uso');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (38 , 1, 22, '163515','Marca adquirida');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (39 , 1, 23, '172020','Negocios conjuntos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (40 , 1, 24, '180505','Renta y complementarios');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (41 , 1, 25, '194510','De inversiones');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (42, 1,26, '210510','Pagares');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (43, 1,27, '211095','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (44, 1,28, '220505','Proveedores nacionales');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (45, 1,29, '221005','Proveedores del exterior');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (46, 1,30, '230505','Cuentas corrientes comerciales');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (47, 1,31, '233525','Honorarios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (48, 1,31, '233595','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (49, 1,32, '236505','Salarios y pagos laborales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (50, 1,32, '236510','Dividendos y/o participaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (51, 1,32, '236515','Honorarios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (52, 1,32, '236520','Comisiones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (53, 1,32, '236525','Servicios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (54, 1,32, '236530','Arrendamientos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (55, 1,32, '236535','Rendimientos financieros');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (56, 1,32, '236540','Retención por compras');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (57, 1,32, '236570','Otras retenciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (58, 1,32, '236575','Autorretenciones');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (59, 1,33, '236701','Impuesto a las ventas retenido');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (60, 1,33, '23670','Retención de impuesto a las ventas Iva');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (61, 1,33, '236768','Impuesto a las ventas retenido');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (62, 1,34, '236805','Retención industria y comercio Ica');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (63, 1,35, '237005','Aportes a entidades promotoras de salud eps');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (64, 1,35, '237006','Aporte a administradoras de riesgos profesionales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (65, 1,35, '237010','Aportes al icbf Sena y cajas de compensación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (66, 1,35, '237015','Aportes arl');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (67, 1,35, '237025','Embargos judiciales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (68, 1,35, '237030','Libranzas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (69, 1,35, '237045','Fondos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (70, 1,35, '237050','Ahorro afc');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (71, 1,36, '238030','Fondos de cesantías y/o pensiones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (72, 1,36, '238095','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (73, 1,37, '240405','Vigencia fiscal corriente');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (74, 1,38, '240805','Iva generado en ventas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (75, 1,38, '240806','Iva generado');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (76, 1,38, '240810','Iva descontable por compras');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (77, 1,38, '240815','Descontable por servicios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (78, 1,38, '240820','Descontable por devoluciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (79, 1,38, '240830','Descontable régimen simplificado');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (80, 1,39, '24640','Impuesto por valor en ventas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (81, 1,39, '24640','Impuesto por valor en devolucion en ventas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (82, 1,39, '24640','Impuesto por valor en compras');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (83, 1,39, '24640','Impuesto por valor en devolucion en compras');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (84, 1,40, '249501','Impuesto al consumo nacional');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (85, 1,41, '250505','Salarios por pagar');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (86, 1,42, '251010','Pasivo estimado para obligaciones laborales');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (87, 1,43, '280505','De clientes');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (88, 1,44, '281505','Valores recibidos para terceros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (89, 1,45, '310505','Capital suscrito y pagado');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (90, 1,45, '310510','Capital por suscribir (db)');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (91, 1,46, '320505','Prima en colocación de acciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (92, 1,46, '320520','Superávit por el método de participación');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (93, 1,47, '330505','Reservas obligatorias');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (94, 1,48, '370505','Resultados de ejercicios anteriores');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (95, 1,49, '371005','Convergencia');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (96, 1,50, '390505','Resultados fiscales de ventas en ganancia ocasion.');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (97, 1,51, '413501','Comercio al por mayor y al detal');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (98, 1,52, '417505','Devolución');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (99, 1,53, '418001','Servicios');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (100, 1,54, '421020','Diferencia en cambio');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (101, 1,54, '421040','Descuentos comerciales condicionados');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (102, 1,55, '421805','De sociedades anónimas y/o asimiladas');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (103, 1,56, '429505','Aprovechamientos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (104, 1,56, '429581','Ajuste al peso');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (105, 1,57, '430505','Revaluación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (106, 1,57, '430510','Salvamento');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (107, 1,58, '440505','Ingresos por ganancia ocasional');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (108, 1,59, '441005','Recuperación de deducciones fiscales');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (109, 1,60, '510503','Salario integral');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (110, 1,60, '510506','Sueldos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (111, 1,60, '510512','Apoyo sostenimiento aprendices');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (112, 1,60, '510515','Horas extras y recargos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (113, 1,60, '510524','Incapacidades');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (114, 1,60, '510527','Auxilio de transporte');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (115, 1,60, '510530','Cesantías');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (116, 1,60, '510533','Intereses sobre cesantías');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (117, 1,60, '510536','Prima de servicios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (118, 1,60, '510539','Vacaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (119, 1,60, '510545','Auxilios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (120, 1,60, '510548','Bonificaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (121, 1,60, '510551','Dotación y suministro a trabajadores');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (122, 1,60, '510560','Indemnizaciones laborales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (123, 1,60, '510563','Capacitación al personal');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (124, 1,60, '510566','Gastos deportivos y de recreación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (125, 1,60, '510568','Aportes a administradora de riesgos laborales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (126, 1,60, '510569','Aportes a entidades promotoras de salud eps');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (127, 1,60, '510570','Aporte a fondos de pensión y/o cesantías');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (128, 1,60, '510572','Aportes cajas de compensación familiar');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (129, 1,60, '510575','Aportes icbf');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (130, 1,60, '510578','Aportes Sena');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (131, 1,60, '510584','Gastos médicos y drogas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (132, 1,60, '510595','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (133, 1,61, '511010','Revisoría fiscal');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (134, 1,61, '511015','Auditoria externa');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (135, 1,61, '511020','Avalúos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (136, 1,61, '511025','Asesoría jurídica');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (137, 1,61, '511035','Asesoría técnica');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (138, 1,62, '511505','Industria y comercio');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (139, 1,62, '511515','A la propiedad raíz');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (140, 1,62, '511540','De vehículos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (141, 1,62, '511570','Prorrateo de Iva');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (142, 1,62, '511595','Otros impuestos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (143, 1,63, '512010','Construcciones y edificaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (144, 1,63, '512020','Equipo de oficina');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (145, 1,63, '512025','Equipo de computación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (146, 1,63, '512095','Bodegaje');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (147, 1,64, '512510','Afiliaciones y sostenimiento');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (148, 1,65, '513010','Cumplimiento');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (149, 1,65, '513015','Corriente débil');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (150, 1,65, '513020','Vida colectiva');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (151, 1,65, '513030','Terremoto');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (152, 1,65, '513035','Sustracción y hurto');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (153, 1,65, '513040','Flota y equipo de transporte');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (154, 1,65, '513070','Rotura de maquinaria');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (155, 1,65, '513075','Obligatorio accidente de transito');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (156, 1,66, '513505','Aseo y vigilancia');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (157, 1,66, '513520','Procesamiento electrónico de datos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (158, 1,66, '513525','Acueducto y alcantarillado');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (159, 1,66, '513530','Energía eléctrica');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (160, 1,66, '513535','Teléfono');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (161, 1,66, '513540','Correo portes y telegramas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (162, 1,66, '513550','Transporte fletes y acarreos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (163, 1,66, '513555','Gas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (164, 1,66, '513595','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (165, 1,67, '514005','Notariales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (166, 1,67, '514010','Registro mercantil');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (167, 1,67, '514015','Tramites y licencias');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (168, 1,67, '514095','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (169, 1,68, '514510','Construcciones y edificaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (170, 1,68, '514520','Equipo de oficina');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (171, 1,68, '514525','Equipo de computación y comunicación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (172, 1,68, '514540','Flota y equipo de transporte');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (173, 1,69, '515005','Instalaciones eléctricas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (174, 1,69, '515010','Arreglos ornamentales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (175, 1,69, '515015','Reparaciones locativas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (176, 1,69, '515020','Adecuación de puestos de trabajo');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (177, 1,70, '515505','Alojamiento y manutención');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (178, 1,70, '515515','Pasajes aéreos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (179, 1,70, '515520','Pasajes terrestres');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (180, 1,70, '515595','Otros gastos de viaje');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (181, 1,71, '516005','Construcciones y edificaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (182, 1,71, '516015','Equipo de oficina');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (183, 1,71, '516020','Equipo de computación y comunicación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (184, 1,71, '516035','Flota y equipo de transporte');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (185, 1,72, '516510','Intangibles');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (186, 1,72, '516515','Cargos diferidos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (187, 1,73, '519510','Libros suscripciones periódicos y revistas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (188, 1,73, '519520','Gastos de representación y relaciones publicas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (189, 1,73, '519525','Elementos de aseo y cafetería');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (190, 1,73, '519530','Útiles papelería y fotocopias');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (191, 1,73, '519535','Combustibles y lubricantes');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (192, 1,73, '519545','Taxis y buses');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (193, 1,73, '519560','Casino y restaurante');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (194, 1,73, '519565','Parqueaderos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (195, 1,73, '519595','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (196, 1,74, '519905','Inversiones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (197, 1,74, '519999','Otros gastos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (198, 1,75, '520503','Salario integral');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (199, 1,75, '520506','Sueldos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (200, 1,75, '520512','Apoyo sostenimiento aprendices');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (201, 1,75, '520515','Horas extras y recargos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (202, 1,75, '520524','Incapacidades');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (203, 1,75, '520527','Auxilio de transporte');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (204, 1,75, '520530','Cesantías');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (205, 1,75, '520533','Intereses sobre cesantías');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (206, 1,75, '520536','Prima de servicios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (207, 1,75, '520539','Vacaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (208, 1,75, '520545','Auxilios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (209, 1,75, '520548','Bonificaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (210, 1,75, '520551','Dotación y suministro a trabajadores');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (211, 1,75, '520560','Indemnizaciones laborales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (212, 1,75, '520563','Capacitación al personal');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (213, 1,75, '520566','Gastos deportivos y de recreación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (214, 1,75, '520568','Aportes a administradora de riesgos laborales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (215, 1,75, '520569','Aportes a entidades promotoras de salud eps');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (216, 1,75, '520570','Aporte a fondos de pensión y/o cesantías');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (217, 1,75, '520572','Aportes cajas de compensación familiar');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (218, 1,75, '520575','Aportes icbf');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (219, 1,75, '520578','Aportes Sena');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (220, 1,75, '520584','Gastos médicos y drogas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (221, 1,75, '520595','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (222, 1,76, '523510','Temporales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (223, 1,76, '523535','Teléfono');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (224, 1,76, '523540','Correo portes y telegramas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (225, 1,76, '523560','Publicidad propaganda y promoción');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (226, 1,77, '525515','Pasajes aéreos comercial');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (227, 1,78, '529505','Comisiones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (228, 1,78, '529545','Taxis y buses');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (229, 1,78, '529595','Otros diversos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (230, 1,79, '530505','Gastos bancarios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (231, 1,79, '530515','Comisiones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (232, 1,79, '530520','Intereses');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (233, 1,79, '530525','Diferencia en cambio');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (234, 1,79, '530535','Descuentos comerciales condicionados');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (235, 1,80, '531030','Retiro de propiedades planta y equipo');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (236, 1,81, '531515','Costos y gastos de ejercicios anteriores');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (237, 1,81, '531520','Impuestos asumidos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (238, 1,81, '531525','Costos y gastos no deducibles');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (239, 1,82, '539520','Multas sanciones y litigios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (240, 1,82, '539525','Donaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (241, 1,82, '539581','Ajuste al peso');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (242, 1,82, '539595','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (243, 1,83, '540505','Impuesto de renta y complementarios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (244, 1,83, '540510','Cree');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (245, 1,83, '540515','Impuesto a la riqueza');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (246, 1,84, '613505','Comercio al por mayor y al por menor');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (247, 1,85, '618001','Servicios');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (248, 1,86, '710505','Costos de producción o de operación');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (249, 1,87, '720503','Salario integral');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (250, 1,87, '720506','Sueldos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (251, 1,87, '720512','Apoyo sostenimiento aprendices');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (252, 1,87, '720515','Horas extras y recargos');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (253, 1,87, '720524','Incapacidades');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (254, 1,87, '720527','Auxilio de transporte');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (255, 1,87, '720530','Cesantías');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (256, 1,87, '720533','Intereses sobre cesantías');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (257, 1,87, '720536','Prima de servicios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (258, 1,87, '720539','Vacaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (259, 1,87, '720545','Auxilios');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (260, 1,87, '720548','Bonificaciones');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (261, 1,87, '720551','Dotación y suministro a trabajadores');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (262, 1,87, '720560','Indemnizaciones laborales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (263, 1,87, '720563','Capacitación al personal');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (264, 1,87, '720566','Gastos deportivos y de recreación');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (265, 1,87, '720568','Aportes a administradora de riesgos laborales');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (266, 1,87, '720569','Aportes a entidades promotoras de salud eps');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (267, 1,87, '720570','Aporte a fondos de pensión y/o cesantías');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (268, 1,87, '720572','Aportes cajas de compensación familiar');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (269, 1,87, '720575','Aportes icbf');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (270, 1,87, '720578','Aportes Sena');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (271, 1,87, '720584','Gastos médicos y drogas');
INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (272, 1,87, '720595','Otros');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (273, 1,88, '730505','Costos indirectos');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (274, 1,89, '740505','Contratos de servicios');

INSERT INTO public.sub_cuenta(sub_cuenta_id, empresa_id, cuenta_id, codigo, nombre) VALUES (275, 1,90, '999999','Cuenta puente');
--fin sub cuentas

--auxiliar
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (1, 1,1,1,1, '11050501','Caja general',0,1);
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (2, 1,1,1,1, '11050597','D. fiscal caja general',1,0);

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (3, 1,2,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (4, 1,2,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (5, 1,3,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (6, 1,3,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (7, 1,3,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (8, 1,4,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (9, 1,4,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (10, 1,5,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (11, 1,5,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (12, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (13, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (14, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (15, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (16, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (17, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (18, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (19, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (20, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (21, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (22, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (23, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (24, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (25, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (26, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (27, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (28, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (29, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (30, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (31, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (32, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (33, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (34, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (35, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (36, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (37, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (38, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (39, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (40, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (41, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (42, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (43, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (44, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (45, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (46, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (47, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (48, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (49, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (50, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (51, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (52, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (53, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (54, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (55, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (56, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (57, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (58, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (59, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (60, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (61, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (62, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (63, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (64, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (65, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (66, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (67, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (68, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (69, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (70, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (71, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (72, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (73, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (74, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (75, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (76, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (77, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (78, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (79, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (80, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (81, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (82, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (83, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (84, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (85, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (86, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (87, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (88, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (89, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (90, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (91, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (92, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (93, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (94, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (95, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (96, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (97, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (98, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (99, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (100, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (101, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (102, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (103, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (104, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (105, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (106, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (107, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (108, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (109, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (110, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (111, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (112, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (113, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (114, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (115, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (116, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (117, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (118, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (119, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (120, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (121, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (122, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (123, 1,,,, '','', , );

INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (124, 1,,,, '','', , );
INSERT INTO public.auxiliar(auxiliar_id, empresa_id, sub_cuenta_id, categoria_id, vencimiento_id, codigo, nombre, diferencia_fiscal, estado) VALUES (125, 1,,,, '','', , );


