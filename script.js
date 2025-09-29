document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const codigoEstudiante = document.getElementById('codigo').value;
        const contraseña = document.getElementById('clave').value;
        const mensajeDiv = document.getElementById('mensaje');

        const data = {
            codigo: codigoEstudiante,
            clave: contraseña
        };

        try {
            const response = await fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            if (result.login === true) {
                localStorage.setItem('codigo', result.codigo);
                localStorage.setItem('nombre', result.nombre);
                localStorage.setItem('email', result.email);

                mensajeDiv.style.color = 'green';
                mensajeDiv.textContent = `Bienvenido, ${result.nombre}`;
            } else {
                mensajeDiv.style.color = 'red';
                mensajeDiv.textContent = 'Código o clave incorrectos';
            }
        } catch (error) {
            mensajeDiv.style.color = 'red';
            mensajeDiv.textContent = 'Error al conectar con el servidor';
            console.error(error);
        }
    });
});
