# Proyecto Spring Boot

Este proyecto utiliza Spring Boot y requiere Java 17. A continuación, se detallan las instrucciones para configurar y ejecutar el proyecto en diferentes sistemas operativos utilizando Maven Wrapper.

## Requisitos

- Java 17
- Maven Wrapper (incluido en el proyecto)

## Configuración del Entorno

### Linux/macOS

- Compila y empaqueta el proyecto:
    ```sh
    ./mvnw clean package
    ```

- Ejecuta el JAR generado:
    ```sh
    java -jar .\target\prueba-flores-0.0.1-SNAPSHOT.jar
    ```

- Alternativamente, puedes ejecutar el proyecto directamente con:
    ```sh
    ./mvnw spring-boot:run
    ```

### Windows


- Compila y empaqueta el proyecto:
    ```sh
    .\mvnw.cmd clean package
    ```

- Ejecuta el JAR generado:
    ```sh
    java -jar .\target\prueba-flores-0.0.1-SNAPSHOT.jar
    ```

- Alternativamente, puedes ejecutar el proyecto directamente con:
    ```sh
    .\mvnw.cmd spring-boot:run
    ```

## Comandos Maven Útiles

- `./mvnw clean` o `.\mvnw.cmd clean`: Limpia los archivos generados por compilaciones anteriores.
- `./mvnw package` o `.\mvnw.cmd package`: Empaqueta el proyecto en un archivo JAR.
- `./mvnw clean package` o `.\mvnw.cmd clean package`: Limpia y empaqueta el proyecto en un solo comando.
- `./mvnw spring-boot:run` o `.\mvnw.cmd spring-boot:run`: Ejecuta la aplicación directamente sin empaquetar.

## Notas

- Asegúrate de tener Java 17 instalado y configurado en tu PATH.
- El archivo JAR generado se encuentra en el directorio `target`.
- url : `localhost:8080/api/persons`