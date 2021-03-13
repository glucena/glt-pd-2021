import { Film } from './film.model';
import { Pilot } from './pilot.model';

export interface Ship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: string;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  hyperdrive_rating: number;
  MGLT: number;
  starship_class: string;
  pilots: [Pilot];
  films: [Film];
  created: Date;
  edited: Date;
  url: string;
}
