export interface Script {
  id: number,
  title: string,
  description?: string,
  code: string,
  isFavorite: boolean,
  createdAt: string,
  lastUpdatedAt: string
}
