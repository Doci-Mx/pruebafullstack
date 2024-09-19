# Requisitos para Usar MySQL y Ejecutar un Script o Query

## Instalación de MySQL

1. **Descargar MySQL**: Visita el sitio oficial de MySQL y descarga la versión adecuada para tu sistema operativo.
2. **Instalar MySQL**: Sigue las instrucciones del instalador para completar la instalación.
3. **Configurar MySQL**: Durante la instalación, configura la contraseña del usuario root y otros parámetros según tus necesidades.

## Ejecutar un Script o Query en MySQL

### Usando MySQL Workbench

1. **Abrir MySQL Workbench**: Inicia MySQL Workbench en tu computadora.
2. **Conectar a la Base de Datos**: Conéctate a tu servidor MySQL usando las credenciales configuradas.
3. **Abrir el Script**: Ve a `File > Open SQL Script` y selecciona el archivo de script que deseas ejecutar.
4. **Ejecutar el Script**: Haz clic en el ícono del rayo (`Execute`) para ejecutar el script.
5. **Verificar Resultados**: Refresca la base de datos para ver los cambios realizados por el script.

6. **Crear Usuario**: Crea un usuario con el nombre de conexion y password G56M@32ML `CREATE USER 'conexion'@'localhost' IDENTIFIED BY 'G56M@32ML';`
7. **Privilegios**: Dale Privilegios al usuario conexion para `GRANT ALL PRIVILEGES ON bd_flores.* TO 'conexion'@'localhost';`
