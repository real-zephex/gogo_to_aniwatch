import fetch from "node-fetch";
import type { GogoanimeInfoPage } from "../types/gogo";
import type { AniwatchEpisodes, AniwatchSearch } from "../types/aniwatch";

const CONSUMET_API = "https://consumet-jade.vercel.app/anime/gogoanime/info";
const ANIWATCH_API = "https://aniwatch-test-repo.vercel.app/anime";

export async function gogoDetails(id: string) {
  try {
    const response = await fetch(`${CONSUMET_API}/${id}`);
    const data = (await response.json()) as GogoanimeInfoPage;
    if (!data.id || !data.title) return;

    const aniwatch_response = await fetch(
      `${ANIWATCH_API}/search?q=${encodeURIComponent(data.title)}`
    );
    const aniwatch_data = (await aniwatch_response.json()) as AniwatchSearch;
    const test = aniwatch_data.animes?.find(
      (element) => element.jname === data.title
    );

    if (!test) return;
    const aniwatchAnimeId = test.id;

    const aniwatchEpisdoes = (await fetch(
      `${ANIWATCH_API}/episodes/${aniwatchAnimeId}`
    ).then((response) => response.json())) as AniwatchEpisodes;

    return aniwatchEpisdoes ;
  } catch (error) {
    console.error(`Function failed with following error ${error}`);
    return null;
  }
}

// didn't work on vercel, so this is a stray commit to depoly a new one