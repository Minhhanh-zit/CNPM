export interface Movie {
  movie_id: number;
  title: string;
  duration_minutes: number;
  age_rating: string;
  poster_url: string;
  backdrop_url?: string;
  description?: string;
  status: "NOW_SHOWING" | "COMING_SOON" | "ENDED";
  genres: string[];
  featured?: boolean;
}
