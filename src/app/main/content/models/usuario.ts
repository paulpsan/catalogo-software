export class Usuario {
  constructor(
    public _id: number,
    public nombre: string,
    public email: string,
    public password: string,
    public descripcion?: string,
    public fecha_creaccion?: string,
    public fecha_modificacion?: string
  ) {}
}
