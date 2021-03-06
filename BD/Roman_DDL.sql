CREATE DATABASE Roman_Keiji
GO

USE Roman_Keiji
GO

CREATE TABLE PROJETO (
		idProjeto INT PRIMARY KEY IDENTITY(1,1),
		idUsuario INT FOREIGN KEY REFERENCES USUARIO(idUsuario),
		idTema INT FOREIGN KEY REFERENCES TEMA(idTema),
		nome VARCHAR(100) NOT NULL,
		decricao VARCHAR(300)
)
GO

CREATE TABLE USUARIO(
		idUsuario INT PRIMARY KEY IDENTITY(1,1),
		idTipoUsuario TINYINT FOREIGN KEY REFERENCES TIPOUSUARIO(idTipoUsuario),
		email VARCHAR(256) NOT NULL,
		nome VARCHAR(100) NOT NULL,
		senha VARCHAR(25) NOT NULL
)
GO

CREATE TABLE TEMA(
		idTema INT PRIMARY KEY IDENTITY(1,1),
		tituloTema VARCHAR(100) NOT NULL
)
GO

CREATE TABLE TIPOUSUARIO(
		idTipoUsuario TINYINT PRIMARY KEY IDENTITY(1,1),
		titulo VARCHAR(50) NOT NULL
)
GO