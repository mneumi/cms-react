export interface IMenuItem {
  title: string;
  key: string;
  children?: Array<IMenuItem>;
}