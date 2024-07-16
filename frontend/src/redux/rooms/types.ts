export interface searchState {
  search: string;
  take: number;
  page: number;
  component: number;
  userData: any;
  searchResult: any;
}

export interface objData {
  pagedItems: any[];
  metaData: metaData;
}

export interface searchResult {
  userData: objData;
  visionData: objData;
  missionData: objData;
  strategyData: objData;
  benefitData: objData;
  objectiveData: objData;
  keyResultData: objData;
  tasksData: objData;
}

export interface metaData {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface searchAction {
  type: string;
  errorMessage: string;
  payload?: any;
  searchResult: any;
}
