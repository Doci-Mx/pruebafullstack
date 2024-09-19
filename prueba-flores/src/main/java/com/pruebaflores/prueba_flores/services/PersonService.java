package com.pruebaflores.prueba_flores.services;


import com.pruebaflores.prueba_flores.entities.Person;
import java.util.List;

public interface PersonService {

    Person createPerson(Person person);
    List<Person> getAllPersons();
    Person getPersonById(Long id);
    void deletePerson(Long id);
    Person updatePerson(Long id, Person person);
}
