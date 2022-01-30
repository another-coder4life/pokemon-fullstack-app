import { SaveIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import useCreatePokemon from '../hooks/useCreatePokemon';

export default function PokemonForm() {
    const [newPokemon, setNewPokemon] = useState({
        name: '',
        imagefront: '',
        imageback: '',
    });
    const mutationCreatePokemon = useCreatePokemon();

    const handleSubmit = e => {
        e.preventDefault();

        mutationCreatePokemon.mutate(newPokemon);

        setNewPokemon({
            name: '',
            imagefront: '',
            imageback: '',
        });
    };

    return (
        <form className="inline-grid" onSubmit={handleSubmit}>
            <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="enter name..."
                value={newPokemon.name}
                required
                onChange={e => setNewPokemon({ ...newPokemon, name: e.target.value })}
            />
            <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="enter front image url..."
                value={newPokemon.imagefront}
                required
                onChange={e => setNewPokemon({ ...newPokemon, imagefront: e.target.value })}
            />
            <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="enter back image url..."
                value={newPokemon.imageback}
                required
                onChange={e => setNewPokemon({ ...newPokemon, imageback: e.target.value })}
            />
            <button
                type="submit"
                className="flex items-center justify-center rounded-lg bg-cyan-200 hover:bg-cyan-300 px-4 py-2 text-slate-700 mt-4"
                disabled={mutationCreatePokemon.isLoading}
            >
                <SaveIcon className="h-5 w-5 mr-1" />
                <span>save</span>
            </button>
        </form>
    );
}
