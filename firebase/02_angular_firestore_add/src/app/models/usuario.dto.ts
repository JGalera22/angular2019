export class UsuarioDto {
    constructor(
        public nombre: string,
        public email: string,
        public github: string,
        public es_admin: boolean
    ) {}

    transformarDto() {
        return { 
            nombre: this.nombre, 
            email: this.email, 
            github: this.github, 
            es_admin: this.es_admin
        };
    }
}