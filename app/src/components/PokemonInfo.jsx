import { PlusIcon, MinusIcon, XIcon, ExclamationIcon, TrashIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import useDeletePokemon from '../hooks/useDeletePokemon';
import useUpdatePokemon from '../hooks/useUpdatePokemon';

export default function PokemonInfo({ pokemon }) {
    const [showDetail, setShowDetail] = useState(null);
    const mutationUpdatePokemon = useUpdatePokemon();
    const mutationDeletePokemon = useDeletePokemon();

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 0) {
            return;
        }

        mutationUpdatePokemon.mutate({ id, quantity: newQuantity });
    };

    const handleDelete = id => {
        mutationDeletePokemon.mutate({ id });
    };

    return (
        <div className="relative border rounded-lg text-center cursor-pointer transition hover:border-x-cyan-200 hover:border-y-purple-200 hover:shadow-lg">
            <div
                className="p-1"
                onClick={() => setShowDetail(showDetail === pokemon.id ? null : pokemon.id)}
            >
                <div className="flex flex-row justify-center">
                    <img className="w-1/2" src={pokemon.imagefront} />
                    <img className="w-1/2" src={pokemon.imageback} />
                </div>
                <h2 className="text-lg font-bold mb-0">{pokemon.name}</h2>
                <small className="block mb-4">{pokemon.quantity}</small>
            </div>
            <div className="border-t flex flex-row">
                <button
                    className="flex items-center justify-center w-1/2 py-2 border-r font-bold transition hover:bg-slate-200"
                    onClick={() => updateQuantity(pokemon.id, pokemon.quantity + 1)}
                >
                    <PlusIcon className="h-3 w-3" />
                </button>
                <button
                    className="flex items-center justify-center w-1/2 py-2 font-bold transition hover:bg-slate-200"
                    onClick={() => updateQuantity(pokemon.id, pokemon.quantity - 1)}
                >
                    <MinusIcon className="h-3 w-3" />
                </button>
            </div>
            {showDetail === pokemon.id ? (
                <div className="absolute top-0 left-0 rounded-lg w-full h-full backdrop-blur-md flex flex-col justify-center items-center">
                    <button className="absolute top-1 right-1" onClick={() => setShowDetail(null)}>
                        <XIcon className="h-5 w-5" />
                    </button>
                    <span className="font-bold mb-4">Quantity: {pokemon.quantity}</span>
                    <button
                        className="flex items-center justify-center rounded-lg bg-rose-600 text-white font-bold px-4 py-2 transition hover:bg-rose-700 mb-3"
                        disabled={mutationUpdatePokemon.isLoading}
                        onClick={() => updateQuantity(pokemon.id, 0)}
                    >
                        <ExclamationIcon className="h-5 w-5 mr-1" />
                        <span>reset</span>
                    </button>
                    <div className="w-full border-t">
                        <button
                            className="flex items-center justify-center rounded-lg bg-yellow-200 font-bold px-4 py-2 transition hover:bg-yellow-300 mx-auto mt-3"
                            disabled={mutationDeletePokemon.isLoading}
                            onClick={() => handleDelete(pokemon.id)}
                        >
                            <TrashIcon className="h-5 w-5 mr-1" />
                            <span>delete</span>
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
