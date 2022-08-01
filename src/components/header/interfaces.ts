export interface SubCategoryState {
    link: string,
    label: string
}

export interface CategoryState {
    _id: string,
    label: string,
    icon: string,
    status: boolean,
    isActive: boolean,
    subCategories: SubCategoryState[]
}

export type IconsNavigationInterface = {
    [index: string]: any
}