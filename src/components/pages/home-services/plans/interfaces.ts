export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface Plan {
    subcategory: string;
    image: string;
    idImage: string;
    benefits: string[];
    comboPrice: number;
    isActive: boolean;
    _id: string;
    category: string;
    plan: string;
    unitPrice: number;
    createdAt: string;
    updatedAt: string;
    isSelected: boolean
}

export interface CardOne {
  item: {
    subcategory: string,
    image: string,
    idImage: string,
    benefits: string[],
    comboPrice: number,
    isActive: boolean,
    _id: string,
    category: string,
    plan: string,
    unitPrice: number,
    createdAt: string,
    updatedAt: string,
    isSelected: boolean
  }
}

export interface CardTwo {
  item: {
    subcategory: string,
    image: string,
    idImage: string,
    benefits: string[],
    comboPrice: number,
    isActive: boolean,
    _id: string,
    category: string,
    plan: string,
    unitPrice: number,
    createdAt: string,
    updatedAt: string,
    isSelected: boolean
  }
}

export interface HomeServicesPlansTabHeaderArgs {
  title: string
}