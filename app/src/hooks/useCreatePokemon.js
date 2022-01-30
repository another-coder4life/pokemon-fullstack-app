import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import useNotification from './useNotification';

export default function useCreatePokemon() {
    const queryClient = useQueryClient();
    const [success, error] = useNotification();

    return useMutation(data => axios.post('/pokemon', data).then(res => res.data), {
        onMutate: newPokemon => {
            const oldPokemon = queryClient.getQueryData('allPokemonData');

            if (oldPokemon) {
                queryClient.setQueryData('allPokemonData', oldPokemon => [
                    ...oldPokemon,
                    newPokemon,
                ]);
                return;
            }

            return () => queryClient.setQueryData('allPokemonData', oldPokemon);
        },
        onSettled: () => {
            queryClient.invalidateQueries('allPokemonData');
        },
        onSuccess: () => success(),
        onError: () => error(),
    });
}
