package com.hotdog.codetest.dao;

import com.hotdog.codetest.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Repository("postgres")
public class PersonDataAccessService implements PersonDao{

    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public PersonDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertPerson(UUID id, Person person)
    {
        final String sql = "INSERT INTO person VALUES(?, ?)";
        jdbcTemplate.update(sql, id, person.getName()
        );
        return 1;
    }

    @Override
    public List<Person> selectAllPeople()
    {
        final String sql = "SELECT id, name FROM person";
        List<Person> people = jdbcTemplate.query(sql, (resultSet, i)->{
            UUID id =UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            return new Person(id, name);
        });
        return people;
    }

    @Override
    public int deletePersonById(UUID ID)
    {
        final String sql = "DELETE FROM person WHERE id = ?";
        Optional<Person> personMaybe = selectPersonById(ID);
        if (personMaybe.isEmpty()) {
            return 0;
        }
        int count = jdbcTemplate.update(sql, ID );
        return count;
    }

    @Override
    public int updatePersonById(UUID ID, Person updatePerson)
    {
        final String sql = "UPDATE person SET name = ? WHERE id = ?";
        int count = jdbcTemplate.update(sql,new Object[] { updatePerson.getName(), ID });
        return count;

    }

    @Override
    public Optional<Person> selectPersonById(UUID ID) {
        final String sql = "SELECT id, name FROM person WHERE id = ?"; // that's why the question mark is there it
        Person person = jdbcTemplate.queryForObject(sql, new Object[]{ID}, ///prevents sql injections
                (resultSet, i) -> {
            UUID personId = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            return new Person(personId, name);
        });
        return Optional.ofNullable(person);
    }
}
