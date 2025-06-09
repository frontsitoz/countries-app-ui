export interface Country {
  name: string;
  capital?: string; // ← ahora es opcional
  region: string;
  population: number;
  alpha3Code: string;
  flags: {
    png: string;
    svg: string;
  };
}
