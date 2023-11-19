import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { showAlert } from "../utils/utils";

export const usePokemon = defineStore("pokemon", () => {
  const user = ref(null);
  const short = ref("asc");
  const showByType = ref(true);
  const pokemons = ref(20);
  const loading = ref(false);
  const detailPokemon = ref({});
  const favorite = ref([]);
  const isFavorite = ref(false);
  const page = ref(1);
  const next = ref();
  const previous = ref();

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

  const getPokemon = async (url = "pokemon") => {
    loading.value = true;
    const data = await axios.get(url);
    next.value = data.data?.next;
    previous.value = data.data?.previous;
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

  const addToFavorite = (name) => {
    const data = {
      name,
      date: new Date().toLocaleDateString(),
    };

    if (favorite.value.some((data) => data.name === name)) {
      return showAlert({
        message: "Already added",
        background: "alert-warning",
      });
    }

    favorite.value.push(data);
    isFavorite.value = true;

    return showAlert({
      message: "added to favorite",
      background: "alert-success",
    });
  };

  return {
    user,
    short,
    showByType,
    pokemons,
    loading,
    detailPokemon,
    favorite,
    isFavorite,
    page,
    next,
    previous,
    sortResult,
    getPokemon,
    addToFavorite,
  };
});
