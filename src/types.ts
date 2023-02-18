export interface RobotStructure {
  name: string;
  image: string;
  stats: StatsInterface;
}

export interface StatsInterface {
  speed: number;
  endurance: number;
  creationDate: number;
}

export type RobotListStructure = RobotStructure[];
