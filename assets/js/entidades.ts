class Alumno{
    private idAlumno:number;
    private nombre:string;
    private apellidoPaterno:string;
    private apellidoMaterno:string;
    private email:string;
    private direccion:string;
    private telefono:string;
    private idFacebook:string;
    private tutor:string;
    private telefonoTutor:string;
    private ciudad:string;
    private codigoPostal:number;
    private municipio:string;
    private listaasistenciaList:Array<Listaasistencia>;
    private pagoList:Array<Pago>;

    getIdAlumno() {
        return this.idAlumno;
    }

    setIdAlumno(idAlumno:number) { this.idAlumno = idAlumno; }

    getNombre() { return this.nombre; }

    setNombre(nombre:string) { this.nombre = nombre; }

    getApellidoPaterno() { return this.apellidoPaterno; }

    setApellidoPaterno(apellidoPaterno:string) { this.apellidoPaterno = apellidoPaterno; }

    getApellidoMaterno() { return this.apellidoMaterno; }

    setApellidoMaterno(apellidoMaterno:string) { this.apellidoMaterno = apellidoMaterno; }

    getEmail() { return this.email; }

    setEmail(email:string) { this.email = email; }

    getDireccion() { return this.direccion; }

    setDireccion(direccion:string) { this.direccion = direccion; }

    getTelefono() { return this.telefono; }

    setTelefono(telefono:string) { this.telefono = telefono; }

    getIdFacebook() { return this.idFacebook; }

    setIdFacebook(idFacebook:string) { this.idFacebook = idFacebook; }

    getTutor() { return this.tutor; }

    setTutor(tutor:string) { this.tutor = tutor; }

    getTelefonoTutor() { return this.telefonoTutor; }

    setTelefonoTutor(telefonoTutor:string) { this.telefonoTutor = telefonoTutor; }

    getCiudad() { return this.ciudad; }

    setCiudad(ciudad:string) { this.ciudad = ciudad;}

    getCodigoPostal() { return this.codigoPostal; }

    setCodigoPostal(codigoPostal:number) { this.codigoPostal = codigoPostal; }

    getMunicipio() { return this.municipio; }

    setMunicipio(municipio:string) { this.municipio = municipio; }

    getListaasistenciaList() { return this.listaasistenciaList; }

    setListaasistenciaList(listaasistenciaList:Array<Listaasistencia> ) {
        this.listaasistenciaList = listaasistenciaList;
    }

    getPagoList() { return this.pagoList; }

    setPagoList(pagoList:Array<Pago> ) { this.pagoList = pagoList; }
}

class Cursoclase {
    private idCursoClase:number;
    private nombre:string;
    private descripcionCorta:string;
    private descripcionLarga:string;
    private costo:any;
    private urlImagen:string;
    private grupocompuestoList:Array<Grupocompuesto>;

    getIdCursoClase() {
        return this.idCursoClase;
    }

    setIdCursoClase(idCursoClase:number) {
        this.idCursoClase = idCursoClase;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre:string) {
        this.nombre = nombre;
    }

    getDescripcionCorta() {
        return this.descripcionCorta;
    }

    setDescripcionCorta(descripcionCorta:string) {
        this.descripcionCorta = descripcionCorta;
    }

    getDescripcionLarga() {
        return this.descripcionLarga;
    }

    setDescripcionLarga(descripcionLarga:string) {
        this.descripcionLarga = descripcionLarga;
    }

    getCosto() {
        return this.costo;
    }

    setCosto(costo:number) {
        this.costo = costo;
    }

    getUrlImagen() {
        return this.urlImagen;
    }

    setUrlImagen(urlImagen:string) {
        this.urlImagen = urlImagen;
    }

    getGrupocompuestoList() {
        return this.grupocompuestoList;
    }

    setGrupocompuestoList(grupocompuestoList:Array<Grupocompuesto>) {
        this.grupocompuestoList = grupocompuestoList;
    }
}

class Grupo{
    private idGrupo:number;
    private cupo:number;
    private lugaresDisponibles:number;
    private grupocompuestoList:Array<Grupocompuesto>;

    getIdGrupo() {
        return this.idGrupo;
    }

    setIdGrupo(idGrupo:number) {
        this.idGrupo = idGrupo;
    }

    getCupo() {
        return this.cupo;
    }

    setCupo(cupo:number) {
        this.cupo = cupo;
    }

    getLugaresDisponibles() {
        return this.lugaresDisponibles;
    }

    setLugaresDisponibles(lugaresDisponibles:number) {
        this.lugaresDisponibles = lugaresDisponibles;
    }

    getGrupocompuestoList() {
        return this.grupocompuestoList;
    }

    setGrupocompuestoList(grupocompuestoList:Array<Grupocompuesto>) {
        this.grupocompuestoList = grupocompuestoList;
    }
}

class Grupocompuesto{
    private idGrupoCompuesto:string;
    private listaasistenciaList:Array<Listaasistencia>;
    private idCursoClase:Cursoclase;
    private idGrupo:Grupo;
    private idHorario:Horario;
    private pagoList:Array<Pago>;

    getIdGrupoCompuesto() {
        return this.idGrupoCompuesto;
    }

    setIdGrupoCompuesto(idGrupoCompuesto:string) {
        this.idGrupoCompuesto = idGrupoCompuesto;
    }

    getListaasistenciaList() {
        return this.listaasistenciaList;
    }

    setListaasistenciaList(listaasistenciaList:Array<Listaasistencia>) {
        this.listaasistenciaList = listaasistenciaList;
    }

    getIdCursoClase() {
        return this.idCursoClase;
    }

    setIdCursoClase(idCursoClase:Cursoclase) {
        this.idCursoClase = idCursoClase;
    }

    getIdGrupo() {
        return this.idGrupo;
    }

    setIdGrupo(idGrupo:Grupo) {
        this.idGrupo = idGrupo;
    }

    getIdHorario() {
        return this.idHorario;
    }

    setIdHorario(idHorario:Horario) {
        this.idHorario = idHorario;
    }

    getPagoList() {
        return this.pagoList;
    }

    setPagoList(pagoList:Array<Pago>) {
        this.pagoList = pagoList;
    }
}

class Horario{
    private idHorario:number;
    private descripcionHorario:Date;
    private grupocompuestoList:Array<Grupocompuesto>;

    getIdHorario() {
        return this.idHorario;
    }

    setIdHorario(idHorario:number) {
        this.idHorario = idHorario;
    }

    getDescripcionHorario() {
        return this.descripcionHorario;
    }

    setDescripcionHorario(descripcionHorario:Date) {
        this.descripcionHorario = descripcionHorario;
    }

    getGrupocompuestoList() {
        return this.grupocompuestoList;
    }

    setGrupocompuestoList(grupocompuestoList:Array<Grupocompuesto>) {
        this.grupocompuestoList = grupocompuestoList;
    }

}

class Listaasistencia {
    private idListaAsistencia:number;
    private asistio:number;
    private fecha:Date;
    private idGrupoCompuesto:Grupocompuesto;
    private idAlumno:Alumno;

    getIdListaAsistencia() {
        return this.idListaAsistencia;
    }

    setIdListaAsistencia(idListaAsistencia:number) {
        this.idListaAsistencia = idListaAsistencia;
    }

    getAsistio() {
        return this.asistio;
    }

    setAsistio(asistio:number) {
        this.asistio = asistio;
    }

    getFecha() {
        return this.fecha;
    }

    setFecha(fecha:Date) {
        this.fecha = fecha;
    }

    getIdGrupoCompuesto() {
        return this.idGrupoCompuesto;
    }

    setIdGrupoCompuesto(idGrupoCompuesto:Grupocompuesto) {
        this.idGrupoCompuesto = idGrupoCompuesto;
    }

    getIdAlumno() {
        return this.idAlumno;
    }

    setIdAlumno(idAlumno:Alumno) {
        this.idAlumno = idAlumno;
    }
}

class Pago{
    private idPago:number;
    private cantidad:number;
    private status:number;
    private tipo:number;
    private fechaRegistro:Date;
    private fechaPago:Date;
    private idGrupoCompuesto:Grupocompuesto;
    private idAlumno:Alumno;

    getIdPago() {
        return this.idPago;
    }

    setIdPago(idPago:number) {
        this.idPago = idPago;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(cantidad:number) {
        this.cantidad = cantidad;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status:number) {
        this.status = status;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo:number) {
        this.tipo = tipo;
    }

    getFechaRegistro() {
        return this.fechaRegistro;
    }

    setFechaRegistro(fechaRegistro:Date) {
        this.fechaRegistro = fechaRegistro;
    }

    getFechaPago() {
        return this.fechaPago;
    }

    setFechaPago(fechaPago:Date) {
        this.fechaPago = fechaPago;
    }

    getIdGrupoCompuesto() {
        return this.idGrupoCompuesto;
    }

    setIdGrupoCompuesto(idGrupoCompuesto:Grupocompuesto) {
        this.idGrupoCompuesto = idGrupoCompuesto;
    }

    getIdAlumno() {
        return this.idAlumno;
    }

    setIdAlumno(idAlumno:Alumno) {
        this.idAlumno = idAlumno;
    }
}
