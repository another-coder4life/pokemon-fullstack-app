import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import useNotification from './useNotification';

export default function useUpdatePokemon() {
    const [success, error] = useNotification();
    const queryClient = useQueryClient();

    return useMutation(
        updatedPokemon =>
            axios
                .put(`/pokemon/${updatedPokemon.id}`, {
                    quantity: updatedPokemon.quantity,
                })
                .then(res => res.data),
        {
            onMutate: updatedPokemon => {
                queryClient.setQueryData(['allPokemonData', updatedPokemon.id], updatedPokemon);
            },
            onSuccess: updatedPokemon => {
                queryClient.setQueryData(['allPokemonData', updatedPokemon.id], updatedPokemon);

                if (queryClient.getQueryData('allPokemonData')) {
                    queryClient.setQueryData('allPokemonData', data => {
                        return data.map(oldPokemon => {
                            if (oldPokemon.id === updatedPokemon.id) {
                                return { ...oldPokemon, ...updatedPokemon };
                            }

                            return oldPokemon;
                        });
                    });
                } else {
                    queryClient.setQueryData('allPokemonData', [updatedPokemon]);
                    queryClient.invalidateQueries('allPokemonData');
                }

                success();
            },
            onError: () => error(),
        },
    );
}
