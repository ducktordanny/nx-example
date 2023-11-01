export interface ApiServiceModel<Document, CreateDto = unknown, ModifyDto = CreateDto> {
  get?(id?: string): Promise<Document | Array<Document>>;
  create?(dto: CreateDto, id?: string): Promise<void>;
  modify?(id: string, dto: ModifyDto): Promise<void>;
  remove?(id: string): Promise<void>;
}

export interface AuthPayload {
  username: string;
  sub: string;
}
