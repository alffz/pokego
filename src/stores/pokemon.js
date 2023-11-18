import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usePokemon = defineStore("pokemon", () => {
  const short = ref("asc");
  const showByType = ref(true);
  const pokemons = ref(20);
  const loading = ref(false);
  const detailPokemon = ref({});

  const sortResult = (short, data) => {
    if (short === "asc") {
      const sortPokemon = data.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
      });
      return sortPokemon;
    } else {
      const sortPokemon = data.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameB.localeCompare(nameA);
      });
      return sortPokemon;
    }
  };

  const getPokemon = async () => {
    loading.value = true;
    const data = await axios.get("pokemon");
    const names = data.data.results.map(({ name }) => name);
    const images = {};

    for (let n of names) {
      const image = await axios.get(`pokemon/${n}`);
      images[n] = image.data.sprites.other["official-artwork"].front_default;
    }

    const addImages = data.data.results.map((result) => {
      result.images = images[result.name];
      return result;
    });

    pokemons.value = sortResult(short.value, addImages);
    return (loading.value = false);
  };

  return {
    short,
    showByType,
    pokemons,
    loading,
    detailPokemon,
    sortResult,
    getPokemon,
  };
});
