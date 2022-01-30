package com.pokemon.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PokemonService implements IPokemonService {

    @Autowired
    private PokemonRepository repository;

    @Override
    public List<Pokemon> find() {
        return repository.findAllByOrderByIdAsc();
    }

    @Override
    public Pokemon create(Pokemon pokemon) {
        return repository.save(pokemon);
    }

    @Override
    public Pokemon update(Long id, int quantity) {
        return repository.findById(id)
            .map(existingPokemon -> {
                existingPokemon.setQuantity(quantity);
                return repository.save(existingPokemon);
            })
            .orElse(null);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

}
