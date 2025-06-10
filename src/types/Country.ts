export interface Country {
  name: string;
  alpha3Code: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  nativeName: string;
  topLevelDomain: string[];
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    name: string;
    nativeName: string;
  }[];
  flags: {
    svg: string;
    png: string;
  };
  borders: string[];
}
