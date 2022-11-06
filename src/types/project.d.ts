
type Uuid = string;

export interface Location {
    latitude?: number;
    longitude?: number;
    address: string;
    city: string;
    zip_code: string;
    country: string;
    country_code: string;
}

interface Asset {
    uuid: Uuid;
    media_type: string;
    url: string;
    filename: string;
}

interface UnitsSummary {
    sold_units?: UnitSummary;
    unsold_units?: UnitSummary;
    all_units?: UnitSummary;
}

interface UnitSummary {
    total: number;
    unit_types?: string[];
    ownership_types?: string[];
    size_from: number;
    size_to: number;
    list_price_from: number;
    list_price_to: number;
    total_price_from: number;
    total_price_to: number;
    bedrooms_from: number;
    bedrooms_to: number;
    rooms_from: number;
    rooms_to: number;
}

interface Facility {
    title: string;
}

export interface Image {
    uuid: Uuid;
    sizes: number[]
    media_type: string;
    url: string;
    filename: string;
}

interface Phase {
    title: string;
    period: 'year' | 'quarter' | 'month' | 'custom';
    start_date: string;
    end_date: string;
}

interface UnitSet {
    uuid: Uuid
    units_count: number;
    units_sold: number;
    lower_price_cents: number;
    upper_price_cents: number;
    lower_size_m2: number;
    upper_size_m2: number;
    lower_bedroom_count: number;
    upper_bedroom_count: number;
    ownership_type: string;
    building_type: string;
}

interface Building {
    uuid: Uuid;
    name: string;
    unit_types: string[];
    building_types: string[];
    address: string;
    state: 'draft' | 'complete' | 'archived';
    images: Image[];
    units_sold: number;
    units_count: number;
    lower_price_cents: number;
    upper_price_cents: number;
    lower_size_m2: number;
    upper_size_m2: number;
    currency: string;
    construction_period: 'year' | 'quarter' | 'month' | 'date' | 'custom';
    construction_start_at: string;
    construction_end_at: string;
    moving_period: 'year' | 'quarter' | 'month' | 'date' | 'custom'
    moving_start_at: string;
    moving_end_at: string;
    location: Location;
}

interface Stage {
    uuid: Uuid;
    name: string;
    headline: string;
    description: string;
    link: string;
    sale_state: 'under_development' | 'coming_for_sale' | 'for_sale';
    ownership_types: 'owned' | 'cooperative' | 'stock' | 'bond' | 'other'
    sales_start_at: string;
    location: Location;
    images: Image[];
    phases: Phase[];
    unit_sets: UnitSet[];
    units: Unit[];
    units_summary: UnitsSummary;
}

interface Unit {
    uuid: Uuid;
    building_uuid: Uuid;
    unit_id: string;
    state: 'for_sale' | 'sold' | 'reserved' | 'coming_for_sale';
    unit_type:
    'apartment' |
    'semi_detached' |
    'apartment_condominium' |
    'recreational_other' |
    'duplex' |
    'apartment_self_owned' |
    'detached' |
    'unspecified' |
    'recreational' |
    'townhouse' |
    'other' |
    'recreational_lot' |
    'residential_lot';
    sold: boolean;
    floor_number: number;
    floorplans: Asset[];
    assets: Image[];
    purchase_price: number;
    total_costs: number;
    usable_area_m2: number;
    checkout: string;
    unit_facilities: string[];
    disclaimer: string;
    parking_slots_amount: number;
    balconies: Balcony[];
    shared_price: number;
    type: 'number'
    format: 'float'
    parkings: Parking[];
    joint_debt: number;
    total_price: number;
    size_m2: number;
    bedroom_count: number;
    bathroom_count: number;
}

interface Balcony {
    uuid: Uuid;
    size: number;
    facing_direction:
    'west' |
    'east' |
    'north' |
    'south' |
    'north_east' |
    'north_west' |
    'south_east' |
    'south_west';
}

interface Parking {
    uuid: Uuid;
    price: number;
}

interface Promotable {
    uuid: Uuid;
    type: 'project' | 'stage' | 'building';
}

interface PropertyPicker {
    setting: {
        size: 'small' | 'medium' | 'large';
        lang: 'en' | 'no';
        preview_mode: boolean;
        start_view: string;
        theme: object;
        allow_not_available_interaction: boolean;
        hide_draft_references: boolean;
        hide_units_from_other_directions: boolean;
        layout: 'horizontal' | 'vertical';
        properties: object;
        show_header: boolean;
        show_header_view_switch_labels: boolean;
        sticky_navigation: boolean;
        height: string;
        width: string;
        uuid: Uuid;
    };
    scenes: {
        uuid: Uuid;
        project_uuid: Uuid;
        main: boolean;
        direction:
        'N' |
        'NE' |
        'E' |
        'SE' |
        'S' |
        'SW' |
        'W' |
        'NW';
        promotable: Promotable;
        asset: Asset;
        references: {
            points: {
                x: number;
                y: number;
            }[],
            target: {
                id: string;
                type: 'view' | 'unit' | 'draft';
            },
            parent: string;
            id: string;
        }[];
    }[];
}

export interface Contact {
    uuid?: Uuid;
    name: string;
    image?: string;
    title?: string;
    email?: string;
    company?: string;
}

export interface Project {
    uuid: Uuid;
    name: string;
    slug: string;
    image?: string;
    headline?: string;
    description?: string;
    developer?: string;
    developer_logo?: Image;
    facilities?: Facility[];
    unit_sets?: UnitSet[];
    buildings?: Building[];
    stages?: Stage[];
    phases?: Phase[];
    images?: Image[];
    property_picker?: PropertyPicker;
    liked?: boolean;
    link?: string;
    currency?: string;
    location?: Location;
    units_summary?: UnitsSummary;
    contacts?: Contact[];
}