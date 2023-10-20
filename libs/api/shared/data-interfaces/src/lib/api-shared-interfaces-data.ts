export interface ApiServiceModel<Model, CreateDto = unknown, ModifyDto = unknown> {
  get?(id?: string): Promise<Model | Array<Model>>;
  create?(dto: CreateDto): Promise<void>;
  modify?(id: string, dto: ModifyDto): Promise<void>;
  remove?(id: string): Promise<void>;
}
