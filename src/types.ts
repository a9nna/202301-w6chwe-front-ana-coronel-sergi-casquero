export interface RobotStructure {
  name: string;
  image: string;
  stats: StatsInterface;
}

export interface StatsInterface {
  speed: number;
  endurance: number;
  creationDate: Date;
}

export type RobotListStructure = RobotStructure[];
