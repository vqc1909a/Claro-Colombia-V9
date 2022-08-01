import {Plan} from "redux/slices/reducerStateInterface";

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface CardOneProps {
  item: Plan
}

export interface CardTwoProps {
  item: Plan
}

