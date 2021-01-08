---------TRASLADOS
INSERT INTO public.sub_menu(sub_menu_id, menu_id, nombre, url, op, descripcion)VALUES (29, 3, 'Requerimiento de mercancia', '/requerimiento', 0, 'Opción que permite realizar requerimiento de mercancia a las areas de produccion o a otras sucursales');
INSERT INTO public.sub_menu(sub_menu_id, menu_id, nombre, url, op, descripcion)VALUES (30, 3, 'Traslado de mercancia', '/traslado', 0, 'Opción que permite realizar traslados de mercancia a las areas de produccion o a otras sucursales');

create sequence S_REQUERIMIENTO
START WITH 10
increment by 1
;

create sequence s_requerimiento_DETALLE
START WITH 10
increment by 1
;

create sequence S_TRASLADO
START WITH 10
increment by 1
;

create sequence s_TRASLADO_DETALLE
START WITH 10
increment by 1
;


CREATE  TABLE REQUERIMIENTO (
  REQUERIMIENTO_ID        int NOT NULL DEFAULT nextval('S_REQUERIMIENTO'),
  usuario_id              smallint,
  EMPRESA_ID			  int,
  FECHA_REGISTRO          timestamp,
  ESTADO                  smallint,
  total                   decimal,
  observacion   		  varchar(400),
  CONSTRAINT PK_REQUERIMIENTO
    PRIMARY KEY ( REQUERIMIENTO_ID ) 
);	

ALTER TABLE REQUERIMIENTO ADD CONSTRAINT FK_req_REFEREN_empresa
 FOREIGN KEY (EMPRESA_ID)
    REFERENCES EMPRESA (EMPRESA_ID);  

CREATE  TABLE requerimiento_DETALLE (
  requerimiento_DETALLE_ID         bigint NOT NULL DEFAULT nextval('s_requerimiento_DETALLE'),
  REQUERIMIENTO_ID        int,
  PRODUCTO_ID                      int,
  FECHA_REGISTRO                   timestamp,
  CANTIDAD                         decimal,
  ESTADO                           smallint,
  PARCIAL                          decimal,
  UNITARIO 						   decimal,
  descripcion                      varchar(200),
  CONSTRAINT PK_requerimiento_DETALLE
    PRIMARY KEY ( requerimiento_DETALLE_ID ) 
);


ALTER TABLE requerimiento_DETALLE ADD CONSTRAINT FK_reque_REFERENCE_product
  FOREIGN KEY (PRODUCTO_ID)
    REFERENCES PRODUCTO (PRODUCTO_ID);
	
	ALTER TABLE requerimiento_DETALLE ADD CONSTRAINT FK_reque_detalle_REFERENCE_reque
  FOREIGN KEY (REQUERIMIENTO_ID)
    REFERENCES REQUERIMIENTO (REQUERIMIENTO_ID);


CREATE  TABLE TRASLADO (
  TRASLADO_ID        int NOT NULL DEFAULT nextval('S_TRASLADO'),
  REQUERIMIENTO_ID        int,
  EMPRESA_ORIGEN_ID		  int,
  EMPRESA_DESTINO_ID	  int,
  FECHA_REGISTRO          timestamp,
  usuario_crea_id         smallint,
  usuario_aprueba_id      smallint,
  ESTADO                  smallint,
  total                   decimal,
  observacion   		  varchar(400),
  CONSTRAINT PK_TRASLADO
    PRIMARY KEY ( TRASLADO_ID ) 
);

	ALTER TABLE traslado ADD CONSTRAINT FK_traslado_REFERENCE_reque
  FOREIGN KEY (REQUERIMIENTO_ID)
    REFERENCES REQUERIMIENTO (REQUERIMIENTO_ID);
	
	ALTER TABLE traslado ADD CONSTRAINT FK_traslado_REFERENCE_empr_orig
  FOREIGN KEY (EMPRESA_ORIGEN_ID)
    REFERENCES empresa (EMPRESA_ID);
	
	ALTER TABLE traslado ADD CONSTRAINT FK_traslado_REFERENCE_empr_dest
  FOREIGN KEY (EMPRESA_DESTINO_ID)
    REFERENCES empresa (EMPRESA_ID);
	
	ALTER TABLE traslado ADD CONSTRAINT FK_traslado_REFERENCE_usuario_crea
  FOREIGN KEY (usuario_crea_id)
    REFERENCES usuario (usuario_id);	
	
	ALTER TABLE traslado ADD CONSTRAINT FK_traslado_REFERENCE_usuario_aprue
  FOREIGN KEY (usuario_aprueba_id)
    REFERENCES usuario (usuario_id);		
	


CREATE  TABLE TRASLADO_DETALLE (
  TRASLADO_DETALLE_ID         bigint NOT NULL DEFAULT nextval('s_TRASLADO_DETALLE'),
  TRASLADO_ID        int,
  PRODUCTO_ID                      int,
  FECHA_REGISTRO                   timestamp,
  CANTIDAD_TRASLADO                decimal,
  CANTIDAD_ACEPTADA                decimal,
  CANTIDAD_RECHAZADA               decimal,
  ESTADO                           smallint,
  PARCIAL                          decimal,
  UNITARIO 						   decimal,
  descripcion                      varchar(200),
  CONSTRAINT PK_TRASLADO_DETALLE
    PRIMARY KEY ( TRASLADO_DETALLE_ID ) 
);

	ALTER TABLE TRASLADO_DETALLE ADD CONSTRAINT FK_TRASLADO_DETALLE_REFERENCE_trasl
  FOREIGN KEY (TRASLADO_ID)
    REFERENCES TRASLADO (TRASLADO_ID);

ALTER TABLE TRASLADO_DETALLE ADD CONSTRAINT FK_TRASLADO_DETALLE_REFERENCE_prod
  FOREIGN KEY (PRODUCTO_ID)
    REFERENCES producto (PRODUCTO_ID);	

GRANT ALL PRIVILEGES ON DATABASE facturacion_local to facturacion;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO facturacion;	
GRANT ALL PRIVILEGES ON ALL sequences IN SCHEMA public TO facturacion;
commit;