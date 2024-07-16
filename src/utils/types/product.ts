export interface Root {
    data?: Data
}

export interface ProductDetails {
    language: string;
    redirect_code: number;
    relative_url: string;
    type: string;
    amrma_default_resolution_period: number;
    brand: number;
    brand_info: BrandInfo;
    categories: Category[];
    cautions: string;
    cross_border_product: CrossBorderProduct;
    description: Description;
    dimensions: string;
    features: string;
    id: number;
    is_yalla: any[];
    media_gallery: Mediagallery[];
    media_gallery_entries: Mediagallery[];
    meta_description: string;
    meta_title: string;
    name: string;
    pkgdimensions: string;
    price: Price;
    price_range: PriceRange;
    base_price_range: PriceRange;
    usd_price_range: PriceRange;
    product_label: ProductLabel;
    rating_summary: number;
    recom_age: string;
    review_count: number;
    reviews: Reviews;
    shipping_weight?: any;
    sku: string;
    small_image: Image;
    stock_status: string;
    uid: string;
    url_key: string;
    weight: number;
    __typename: string;
    options?: any;
}

export interface Data {
    products?: Products
}

export interface Products {
    items?: Item[]
    page_info?: PageInfo
    total_count?: number
    yalla_total_count?: number
    __typename?: string
}

export interface Mediagallery {
    disabled?: boolean;
    file?: string;
    id?: number;
    label?: any;
    position?: number;
    uid?: string;
    __typename?: string;
    url?: string;
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
    base_price_range: PriceRange
    usd_price_range: PriceRange
    product_label: ProductLabel
    sku: string
    small_image: Image
    stock_status: string
    type_id: string
    uid: string
    url_key: string
    url_suffix: string
    __typename: string
}

export interface BrandInfo {
    img_src?: string;
    title?: string;
    url: string;
    __typename?: string;
}

export interface Category {
    name?: string
    __typename?: string
    level?: number;
    id?: number;
    url_path?: string;
    url_key?: string;
    breadcrumbs?: Breadcrumb[];
}
export interface Description {
    html?: string;
    __typename?: string;
}
export interface CrossBorderProduct {
    is_allowed?: boolean;
    disallow_countries?: string;
    __typename?: string;
}
export interface Breadcrumb {
    category_id?: number;
    category_name?: string;
    category_url_key?: string;
    category_url_path?: string;
    __typename?: string;
}
export interface Price {
    regularPrice?: PriceDetail
    __typename?: string
}

export interface PriceDetail {
    amount: Amount
    __typename: string
}

export interface Amount {
    currency: string
    value: number
    __typename: string
}

export interface PriceRange {
    minimum_price?: MinimumPrice
    __typename?: string
}

export interface MinimumPrice {
    discount?: Discount
    final_price?: PriceValue
    regular_price?: PriceValue
    __typename?: string
}

export interface Discount {
    amount_off: number
    percent_off: number
    __typename: string
}

export interface PriceValue {
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

export interface Image {
    url: string
    __typename: string
}

export interface PageInfo {
    total_pages: number
    __typename: string
}

export interface Reviews {
    items: any[];
    page_info: PageInfo;
    __typename: string;
}