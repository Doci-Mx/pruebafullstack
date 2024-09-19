package com.pruebaflores.prueba_flores.exeptions;

public class PersonNotFoundException extends RuntimeException {
    public PersonNotFoundException(Long id) {
        super("No se encontró la persona con id " + id);
    }
}
