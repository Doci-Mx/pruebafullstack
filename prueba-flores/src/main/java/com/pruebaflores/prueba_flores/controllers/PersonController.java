package com.pruebaflores.prueba_flores.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collections;
import java.util.List;
import com.pruebaflores.prueba_flores.entities.Person;
import com.pruebaflores.prueba_flores.exeptions.PersonNotFoundException;
import com.pruebaflores.prueba_flores.models.ApiResponse;
import com.pruebaflores.prueba_flores.services.PersonService;

@CrossOrigin(origins={"http://localhost:4200"})
@RestController
@RequestMapping("/api/persons")
public class PersonController {
    
    @Autowired
    private PersonService personService; // Cambiado a la interfaz

     @PostMapping
    public ResponseEntity<ApiResponse<Person>> createPerson(@RequestBody Person person) {
        try {
            Person createdPerson = personService.createPerson(person);
            return ResponseEntity.ok(new ApiResponse<>(true, "Persona creada exitosamente", Collections.singletonList(createdPerson)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ApiResponse<>(false, "Error al crear la persona", null));
        }
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Person>> getAllPersons() {
        List<Person> persons = personService.getAllPersons();
        return ResponseEntity.ok(new ApiResponse<>(true, "Personas recuperadas exitosamente", persons));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Person>> getPersonById(@PathVariable Long id) {
        Person person = personService.getPersonById(id);
        if (person == null) {
            throw new PersonNotFoundException(id);
        }
        return ResponseEntity.ok(new ApiResponse<>(true, "Persona recuperada exitosamente", Collections.singletonList(person)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Person>> updatePerson(@PathVariable Long id, @RequestBody Person person) {
        // Verifica si la persona existe antes de intentar actualizar
        Person existingPerson = personService.getPersonById(id);
        if (existingPerson == null) {
            // Retorna ApiResponse con un mensaje adecuado y status false
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse<>(false, "Persona no encontrada con id " + id, null));
        }

        try {
            // Llama al servicio para actualizar la persona
            Person updatedPerson = personService.updatePerson(id, person);
            return ResponseEntity.ok(new ApiResponse<>(true, "Persona actualizada exitosamente", Collections.singletonList(updatedPerson)));
        } catch (Exception e) {
            // Manejo de excepciones para errores de actualización
            return ResponseEntity.badRequest().body(new ApiResponse<>(false, "Error al actualizar la persona", null));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deletePerson(@PathVariable Long id) {
        try {
            personService.deletePerson(id);
            return ResponseEntity.ok(new ApiResponse<>(true, "Persona eliminada exitosamente", null));
        } catch (PersonNotFoundException e) {
            throw new PersonNotFoundException(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ApiResponse<>(false, "Error al eliminar la persona", null));
        }
    }
}
