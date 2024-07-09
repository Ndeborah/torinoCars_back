use mikim_torinocars;

CREATE TABLE clientes
(
    nombre    varchar(255) NOT NULL,
    email     varchar(255) NOT NULL,
    telefono  varchar(255) NOT NULL,
    direccion varchar(255) NOT NULL,
    password  varchar(255) NOT NULL,
    id        int         NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

CREATE TABLE autos
(
    patente  varchar(10) NOT NULL,
    marca    varchar(10) NULL,
    modelo   varchar(10) NULL,
    color    varchar(10) NULL,
    PRIMARY KEY (patente),
    id_users int         NOT NULL,
    FOREIGN KEY (id_users) REFERENCES clientes (id)
);

CREATE TABLE profesionales
(
    codigoProfesional int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre            varchar(30)        NOT NULL
);



CREATE TABLE servicios
(
    codigo            int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre            varchar(30)        NOT NULL,
    tiempoEstimado    int                NULL,
    codigoProfesional int                NULL,
    FOREIGN KEY (codigoProfesional) REFERENCES profesionales (codigoProfesional)
);

CREATE TABLE turnos
(
    nroTurno          int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    fecha             datetime,
    patenteAuto       varchar(10)        NOT NULL,
    codigoServicio    int                NOT NULL,
    codigoProfesional int                NOT NULL,
    FOREIGN KEY (codigoProfesional) REFERENCES profesionales (codigoProfesional),
    FOREIGN KEY (patenteAuto) REFERENCES autos (patente),
    FOREIGN KEY (codigoServicio) REFERENCES servicios (codigo)
);
CREATE TABLE serviciosprofesionales
(
    id                int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    codigoProfesional int                NOT NULL,
    codigoServicio    int                NOT Null,
    FOREIGN KEY (codigoProfesional) REFERENCES profesionales (codigoProfesional),
    FOREIGN KEY (codigoServicio) REFERENCES servicios (codigo)
);