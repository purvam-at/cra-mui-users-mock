export interface IMenu {
  code: string;
  icon: string;
  id: number;
  level: number;
  name: string;
  parent_id: number | null;
  sequence: number;
  state: string;
  permissions: string[];
  isOpen: boolean;
  sub_menu?: IMenu[];
}
