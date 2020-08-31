package com.hotdog.codetest.dao;

import com.hotdog.codetest.model.Person;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Repository("fakeDao")
public class FakePersonDataAccessService implements PersonDao
{
    private static List<Person> DB = new ArrayList<>();
    @Override
    public int insertPerson(UUID id, Person person)
    {
        DB.add(new Person(id, person.getName()));
        return 1;
    }

    @Override
    public List<Person> selectAllPeople() {
        return DB;
    }

    @Override
    public int deletePersonById(UUID ID)
    {
        Optional<Person> personMaybe = selectPersonById(ID);
        if (personMaybe.isEmpty()) {
            return 0;
        }
        DB.remove(personMaybe.get());
        return 1;

    }

    @Override
    public int updatePersonById(UUID ID, Person updatePerson) {
        return selectPersonById(ID)
                .map(person -> {
                    int indexOfPersonToDelete = DB.indexOf(person);
                    if (indexOfPersonToDelete >= 0){
                        DB.set(indexOfPersonToDelete, new Person(ID, updatePerson.getName()));
                        return 1;
                    }
                    return 0;
                }).orElse(0);
    }

    @Override
    public int deletePersonByName(UUID ID, String name) {
        return 0;
    }

    @Override
    public Optional<Person> selectPersonById(UUID ID) {
        return DB.stream().filter(person -> person.getID().equals(ID)).findFirst();
    }


}
