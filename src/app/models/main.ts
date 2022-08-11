export interface Weight {
  imperial: string;
  metric: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}

export interface IBreeds {
  weight: Weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image: Image;
  cat_friendly?: number;
  bidability?: number;
}
export interface ICats {
  breeds: IBreeds;
  id: string;
  url: string;
  width: number;
  height: number;
}
export interface breedsState {
  loading: boolean;
  name: IBreeds[];
}
export interface catsState {
  loading: boolean;
  data: ICats[];
}
export interface IStore {
  breeds: breedsState;
  cats: catsState;
}
