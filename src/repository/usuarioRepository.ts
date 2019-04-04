

class UsuarioRepository{
    public usuarioByMail:string="select * from usuario where correo = $1"; 
}

export const usuarioRepository = new UsuarioRepository();