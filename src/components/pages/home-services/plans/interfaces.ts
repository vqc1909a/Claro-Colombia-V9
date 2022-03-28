import {Plan} from "redux/slices/reducerStateInterface";

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface CardOne {
  item: Plan
}

export interface CardTwo {
  item: Plan
}

export interface HomeServicesPlansTabHeaderArgs {
  title: string
}