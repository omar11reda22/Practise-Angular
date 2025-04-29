export interface IMovie {
  id: number;
  title: string;
  director: string;
  genres: string[];
  releaseYear: number;
  rating: number;
  actorIds: number[]; // refers to actors by their ID
  image: string;
}
