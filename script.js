document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const codigoEstudiante = document.getElementById('codigo').value;
        const contraseña = document.getElementById('clave').value;
        const mensajeDiv = document.getElementById('mensaje').value;

        try{
        const response = await fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        if (data.login === true){
            localStorage.setItem('codigo', data.codigo);
            localStorage.setItem('nombre', data.nombre);
            localStorage.setItem('email', data.email);
            localStorage.setItem('codigo', data.mensaje);

            mensajeDiv.style.color = 'green';
            mensajeDiv.textContent = 'Bienvenido, $(data.nombre)';

        }else{
          mensajeDiv.style.color = 'red';
          mensajeDiv.textContent = 'codigo o clave incorrectos';  
        }


        }
        
    });