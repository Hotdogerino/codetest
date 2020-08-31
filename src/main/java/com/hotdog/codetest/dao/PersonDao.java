package com.hotdog.codetest.dao;

import com.hotdog.codetest.model.Person;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PersonDao {
    int insertPerson(UUID id, Person person);
    default int insertPerson(Person person)
    {
        UUID id = UUID.randomUUID();
        return insertPerson(id, person);
    }
    List<Person> selectAllPeople();
    int deletePersonById(UUID ID);
    int updatePersonById(UUID ID, Person person);
    Optional<Person> selectPersonById(UUID ID);
}
