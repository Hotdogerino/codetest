package com.hotdog.codetest.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotBlank;

import java.util.UUID;

public class Person {
    private final UUID ID;
    @NotBlank
    private final String Name;


    public Person(@JsonProperty("id") UUID id,@JsonProperty("name") String name) {
        ID = id;
        Name = name;
    }

    public UUID getID() {
        return ID;
    }

    public String getName() {
        return Name;
    }
}
