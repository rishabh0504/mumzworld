export type ThemeTypes = {
    [key: string]: string;
};
export type Product = {
    brand?: number;
    brand_info?: BrandInfo;
    categories?: Category[];
    id?: number;
    is_yalla?: string[];
    low_stock_qty?: null;
    name?: string;
    price?: Price;
    price_range?: PriceRange;
    base_price_range?: PriceRange;
    usd_price_range?: UsdPriceRange;
    product_label?: ProductLabel;
    sku?: string;
    small_image?: SmallImage;
    stock_status?: string;
    type_id?: string;
    uid?: string;
    url_key?: string;
    url_suffix?: string;
    __typename?: string;
}

export type PriceRange = {
    minimum_price?: BasePriceRangeMinimumPrice;
    __typename?: string;
}

export type BasePriceRangeMinimumPrice = {
    final_price?: FinalPrice;
    regular_price?: FinalPrice;
    __typename?: string;
    discount?: Discount;
}

export type Discount = {
    amount_off?: number;
    percent_off?: number;
    __typename?: string;
}

export type FinalPrice = {
    currency?: string;
    value?: number;
    __typename?: string;
}

export type BrandInfo = {
    title?: string;
    __typename?: string;
}

export type Category = {
    name?: string;
    __typename?: string;
}

export type Price = {
    regularPrice?: RegularPrice;
    __typename?: string;
}

export type RegularPrice = {
    amount?: FinalPrice;
    __typename?: string;
}

export type ProductLabel = {
    active_from?: string;
    active_to?: string;
    background_color?: string;
    label_id?: null;
    label_text?: string;
    name?: string;
    text_color?: string;
    __typename?: string;
}

export type SmallImage = {
    url?: string;
    __typename?: string;
}

export type UsdPriceRange = {
    minimum_price?: UsdPriceRangeMinimumPrice;
    __typename?: string;
}

export type UsdPriceRangeMinimumPrice = {
    final_price?: FinalPrice;
    __typename?: string;
}
