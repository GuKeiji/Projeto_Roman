USE Roman_Keiji
GO

INSERT INTO TIPOUSUARIO(titulo)
VALUES ('Administrador'),
	   ('Professor')
GO

INSERT INTO TEMA(tituloTema)
VALUES ('Matem�tica'),
	   ('Portugu�s'),
	   ('Biologia'),
	   ('Hist�ria'),
	   ('Geografia')
GO

INSERT INTO USUARIO(idTipoUsuario, email, nome, senha)
VALUES ('1','adm@adm.com','Jeremias','jere123'),
	   ('2','tulio@hotmail.com','T�lio','tulio321'),
	   ('2','ronaldo@gmail.com','Ronaldo','ronaldo123')
GO

INSERT INTO PROJETO(idUsuario, idTema, nome, decricao)
VALUES ('3','1','Pitaya','Voc� ter� que somar 1+1 e descobrir porque n�o � 1'),
	   ('2','1','Lichia','Voc� ter� que gerar n�meros da telecena')
GO