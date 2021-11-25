USE Roman_Keiji
GO

INSERT INTO TIPOUSUARIO(titulo)
VALUES ('Administrador'),
	   ('Professor')
GO

INSERT INTO TEMA(tituloTema)
VALUES ('Matemática'),
	   ('Português'),
	   ('Biologia'),
	   ('História'),
	   ('Geografia')
GO

INSERT INTO USUARIO(idTipoUsuario, email, nome, senha)
VALUES ('1','adm@adm.com','Jeremias','jere123'),
	   ('2','tulio@hotmail.com','Túlio','tulio321'),
	   ('2','ronaldo@gmail.com','Ronaldo','ronaldo123')
GO

INSERT INTO PROJETO(idUsuario, idTema, nome, decricao)
VALUES ('3','1','Pitaya','Você terá que somar 1+1 e descobrir porque não é 1'),
	   ('2','1','Lichia','Você terá que gerar números da telecena')
GO