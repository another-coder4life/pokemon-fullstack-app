import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import useNotification from './useNotification';

export default function useDeletePokemon() {
    const queryClient = useQueryClient();
    const [success, error] = useNotification();

    return useMutation(pokemon => axios.delete(`/pokemon/${pokemon.id}`).then(res => res.data), {
        onSettled: () => {
            queryClient.invalidateQueries('allPokemonData');
        },
        onSuccess: () => success(),
        onError: () => error(),
    });
}
