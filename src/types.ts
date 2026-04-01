export type NodeStatus = 'Ready' | 'NotReady';
export type NodeType = 'Master' | 'Worker';

export interface ClusterNode {
  id: string;
  name: string;
  ip: string;
  status: NodeStatus;
  type: NodeType;
  zoneId: string | null; // null means unassigned
}

export interface Zone {
  id: string;
  name: string;
  regionId: string;
}

export interface Region {
  id: string;
  name: string;
}

export interface ClusterStats {
  total: number;
  assigned: number;
  unassigned: number;
}
