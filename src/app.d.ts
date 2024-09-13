// export enum VesselStatus {
//   Available = 'available',
//   Unavailable = 'unavailable',
//   Maintenance = 'maintenance'
// }
export type VesselStatus = 'available' | 'unavailable' | 'maintenance';

interface ContactInfo {
  phone: string;
  email: string;
  website?: string; // Optional website URL
}

interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface BoatType {
  type: string; // Type of boat (e.g., motorboat, sailboat, yacht)
  description?: string; // Optional description of the boat type
}
export enum EngineType {
  Inboard = 'inboard',
  Outboard = 'outboard'
}
interface Engine {
  type: EngineType; // Type of engine (e.g., inboard, outboard)
  fuelType: string; // Type of fuel the engine uses
  power: number; // Engine power in horsepower (hp)
  isPrimary: boolean; // Indicates if this is the primary engine
  manufacturer?: string; 
  model?: string;
}

interface Feature {
  name: string; // Name of the feature (e.g., Sunshade, GPS, Bluetooth)
  description?: string; // Optional description of the feature
}

interface BoatManufacturer {
  id: number;
  name: string;
  contactInfo: ContactInfo;
  address: Address;
  typesOfBoats: BoatType[]; // Array of boat types they manufacture
}
declare enum VesselType {
  Motorboat = 'Motorboat',
  Sailingboat = 'Sailingboat'
}
type VesselSpecifications = {
  type: VesselType;
  capacity: number; // Number of people the vessel can hold
  length: number; // Length of the vessel in meters
  yearBuilt: number; // Year the vessel was built
  width?: number; // Width of the vessel in meters
  model?: string; // 
}

export interface Vessel {
  id: number;
  status: VesselStatus;
  unlicenced: boolean;
  name: string;
  rentalPrice: number|undefined; // the number in Euros the boat coast per day session.
  specifications: VesselSpecifications;
  location: {id: number; name: string; slug: string; }; // Reference to the station where the vessel is located

  // Features
  features: Feature[]; // Array of features

  // Engines
  engines: Engine[]; // Array of engines

  // Optional Info
  images?: ImageObject[]; // Optional URLs of the images of the vessel
  description?: string; // Optional description of the vessel
  lastMaintenanceDate?: Date; // Optional date of last maintenance
}

type ImageObject = {
  src: string;
}

export type Station = {
  id: number;
  name: string;
  slug: string; // URL-friendly identifier for the station
  contactInfo: ContactInfo;
  address: Address;
  coordinates: Coordinates;
  plushCode?: string;
}


type BoatSpecifications = {
  capacity: number; // Number of people the vessel can hold
  length: number; // Length of the vessel in meters
  yearBuilt: number; // Year the vessel was built
  width?: number; // Width of the vessel in meters
}

interface Boat {
  // 
  type: string;
  model: string;
  specifications: BoatSpecifications
}


interface MotorBoat extends Boat {
  type: MotorboatType;
}

declare enum MotorboatType {
  RIB = 'RIB',
  CenterConsole = 'Center Console'
}