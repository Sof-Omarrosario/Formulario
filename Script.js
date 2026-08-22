function crearUsuario(nombre, apellido, tipo_identificacion, numero_identificacion, nacimiento, celular, correo, pais, ciudad, tratamiento_datos) {
    const usuarioCreado = {
        id: Date.now(),
        nombreCompleto: `${nombre}, ${apellido}`, 
        documento: {
            tipo: tipo_identificacion,
            numero_identificacion: numero_identificacion
            
        },
        celu: celular,
        fecha_nac: nacimiento,
        ubicacion: { 
            pais: pais,     
            ciudad: ciudad,
        },
        tratamientos: tratamiento_datos 
    };
    
    return usuarioCreado;
}

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {

    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const identificacion = document.getElementById('tipo_identificacion').value;
    const numero_identificacion = document.getElementById('numero_identificacion').value;
    const nac = document.getElementById('nacimiento').value;
    const calu = document.getElementById('celular').value;
    const correo = document.getElementById('correo').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const datos = document.getElementById('tratamiento_datos').value;

    const crearUduario = crearUsuario(nombre, apellido, identificacion, numero_identificacion, nac, calu, correo, pais, ciudad, datos);
    console.log('Registro Creado')

    const usuarioJSON = JSON.stringify(crearUduario)


    localStorage.setItem('usuarioCreado1', usuarioJSON)

})