package com.hotdog.codetest.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;

public class Login
{
    private final String Username;
    @NotBlank
    private final String Password;

    public Login(@NotBlank @JsonProperty("username")String username, @JsonProperty("password")@NotBlank String password) {
        Username = username;
        Password = password;
    }

    public String getUsername() {
        return Username;
    }

    public String getPassword() {
        return Password;
    }

}

