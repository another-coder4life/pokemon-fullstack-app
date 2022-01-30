package com.pokemon.api;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pokemon")
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String imagefront;
    private String imageback;
    private int quantity;

    public Pokemon() {}

    public Pokemon(String name, String imagefront, String imageback, int quantity) {
        this.name = name;
        this.imagefront = imagefront;
        this.imageback = imageback;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImagefront() {
        return imagefront;
    }

    public void setImagefront(String imagefront) {
        this.imagefront = imagefront;
    }

    public String getImageback() {
        return imageback;
    }

    public void setImageback(String imageback) {
        this.imageback = imageback;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

}
