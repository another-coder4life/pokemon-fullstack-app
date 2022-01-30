import axios from 'axios';
import { useQuery } from 'react-query';

export default function usePokemonData() {
    return useQuery('allPokemonData', () => axios.get('/pokemon').then(res => res.data));
}
