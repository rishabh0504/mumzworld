export interface Root {
    data: Data
}

export interface Data {
    products: Products
}

export interface Products {
    items: Item[]
    page_info: PageInfo
    total_count: number
    yalla_total_count: number
    __typename: string
}

export interface Item {
    brand: number
    brand_info: BrandInfo
    categories: Category[]
    id: number
    is_yalla: string[]
    low_stock_qty: any
    name: string
    price: Price
    price_range: PriceRange
    base_price_range: BasePriceRange
    usd_price_range: UsdPriceRange
    product_label: ProductLabel
    sku: string
    small_image: SmallImage
    stock_status: string
    type_id: string
    uid: string
    url_key: string
    url_suffix: string
    __typename: string
}

export interface BrandInfo {
    title: string
    __typename: string
}

export interface Category {
    name: string
    __typename: string
}

export interface Price {
    regularPrice: RegularPrice
    __typename: string
}

export interface RegularPrice {
    amount: Amount
    __typename: string
}

export interface Amount {
    currency: string
    value: number
    __typename: string
}

export interface PriceRange {
    minimum_price: MinimumPrice
    __typename: string
}

export interface MinimumPrice {
    discount: Discount
    final_price: FinalPrice
    regular_price: RegularPrice2
    __typename: string
}

export interface Discount {
    amount_off: number
    percent_off: number
    __typename: string
}

export interface FinalPrice {
    currency: string
    value: number
    __typename: string
}

export interface RegularPrice2 {
    currency: string
    value: number
    __typename: string
}

export interface BasePriceRange {
    minimum_price: MinimumPrice2
    __typename: string
}

export interface MinimumPrice2 {
    final_price: FinalPrice2
    regular_price: RegularPrice3
    __typename: string
}

export interface FinalPrice2 {
    currency: string
    value: number
    __typename: string
}

export interface RegularPrice3 {
    currency: string
    value: number
    __typename: string
}

export interface UsdPriceRange {
    minimum_price: MinimumPrice3
    __typename: string
}

export interface MinimumPrice3 {
    final_price: FinalPrice3
    __typename: string
}

export interface FinalPrice3 {
    currency: string
    value: number
    __typename: string
}

export interface ProductLabel {
    active_from: string
    active_to: string
    background_color: string
    label_id?: number
    label_text: string
    name: string
    text_color: string
    __typename: string
}

export interface SmallImage {
    url: string
    __typename: string
}

export interface PageInfo {
    total_pages: number
    __typename: string
}
