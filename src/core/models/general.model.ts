//SelectOption
export interface ISelectOption<T = number> {
  label?: string;
  value: T;
}
export type ISingleSelectOption<T = number> = ISelectOption<T> | null;
export type IMultiSelectOption<T = number> = ISelectOption<T>[] | null;
export type ITableModeSelectOption = ISelectOption & { key: number };

//map data type
export interface IMapCenter {
  lat: number;
  lng: number;
}

export type IMapFeildType = IMapCenter | null;

//icon type
// export type LucideIconType = ForwardRefExoticComponent<
//   Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
// >;
