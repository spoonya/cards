import { Address, AppealStatusType } from ".";

export interface Appeal {
  id: number;
  number: number;
  createdAt: string;
  controlDate?: string;
  completionDate?: string;
  system: string;
  type: string;
  object: Address;
  text: string;
  status: AppealStatusType;
  isTechnological: boolean;
  duration?: number;
  files?: string[];
}
