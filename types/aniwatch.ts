// Search results
export interface AniwatchSearch {
  animes?: Anime[];
  mostPopularAnimes?: MostPopularAnime[];
  currentPage?: number;
  hasNextPage?: boolean;
  totalPages?: number;
  searchQuery?: string;
  searchFilters?: SearchFilters;
}

interface Anime {
  id?: string;
  name?: string;
  jname?: string;
  poster?: string;
  duration?: string;
  type?: Type;
  rating?: null;
  episodes?: Episodes;
}

interface Episodes {
  sub?: number;
  dub?: number | null;
}

enum Type {
  Tv = "TV",
}

interface MostPopularAnime {
  id?: string;
  name?: string;
  jname?: string;
  poster?: string;
  episodes?: Episodes;
  type?: Type;
}

interface SearchFilters {}

// Info page for anime
export interface AniwatchInfo {
  anime?: AniwatchInfoAnime;
  seasons?: any[];
  mostPopularAnimes?: any[];
  relatedAnimes?: RelatedAnime[];
  recommendedAnimes?: RecommendedAnime[];
}

interface AniwatchInfoAnime {
  info?: Info;
  moreInfo?: MoreInfo;
}

export interface Info {
  id?: string;
  anilistId?: number;
  malId?: number;
  name?: string;
  poster?: string;
  description?: string;
  stats?: Stats;
  promotionalVideos?: any[];
  charactersVoiceActors?: any[];
}

interface Stats {
  rating?: string;
  quality?: string;
  episodes?: Episodes;
  type?: Type;
  duration?: string;
}

interface MoreInfo {
  japanese?: string;
  synonyms?: string;
  aired?: string;
  premiered?: string;
  duration?: string;
  status?: string;
  malscore?: string;
  genres?: string[];
  studios?: string;
  producers?: string[];
}

interface RecommendedAnime {
  id?: string;
  name?: string;
  jname?: string;
  poster?: string;
  duration?: string;
  type?: string;
  rating?: null | string;
  episodes?: Episodes;
}

interface RelatedAnime {
  id?: string;
  name?: string;
  jname?: string;
  poster?: string;
  episodes?: Episodes;
  type?: Type;
}

// Episodes
export interface AniwatchEpisodes {
  totalEpisodes?: number;
  episodes?: AniEpisode[];
}

interface AniEpisode {
  title?: string;
  episodeId?: string;
  number?: number;
  isFiller?: boolean;
}

// Servers
export interface AniwatchEpisodesServer {
  sub?: AniStatus[];
  dub?: AniStatus[];
  raw?: any[];
  episodeId?: string;
  episodeNo?: number;
}

interface AniStatus {
  serverName?: string;
  serverId?: number;
}

// Episode links
export interface AniwatchEpisodeLinks {
  tracks?: Track[];
  intro?: Tro;
  outro?: Tro;
  sources?: Source[];
  anilistID?: number;
  malID?: number;
}

interface Tro {
  start?: number;
  end?: number;
}

interface Source {
  url?: string;
  type?: string;
}

interface Track {
  file?: string;
  label?: string;
  kind?: Kind;
  default?: boolean;
}

enum Kind {
  Captions = "captions",
  Thumbnails = "thumbnails",
}
