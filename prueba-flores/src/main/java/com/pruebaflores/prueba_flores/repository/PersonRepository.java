package com.pruebaflores.prueba_flores.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pruebaflores.prueba_flores.entities.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
}
