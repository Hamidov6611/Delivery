interface ChildProps {
    children: React.ReactNode;
  }

export interface way {
  id: number,
  name: string,
  load: string,
  typeLoad: string,
  get: string,
  send: string
}

export interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}