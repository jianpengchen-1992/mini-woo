export type CatalogCategory = {
    id: number;
    name: string;
    description?: string;
};

export type CatalogProduct = {
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    price: number;
    currency: "USD" | "EUR" | "GBP" | "NGN" | string;
    categories: number[];
    images: { src: string; alt?: string }[];
    salePrice?: number;
};

export const catalogCategories: CatalogCategory[] = [
    {
        id: 1,
        name: "Coffee Beans",
        description: "Single-origin beans roasted weekly.",
    },
    {
        id: 2,
        name: "Brewing Gear",
        description: "Tools to help you brew the perfect cup.",
    },
    {
        id: 3,
        name: "Merch",
        description: "Gifts and apparel for coffee lovers.",
    },
];

export const catalogProducts: CatalogProduct[] = [
    {
        id: 101,
        name: "Ethiopia Yirgacheffe",
        description:
            "<p>Floral aroma with bright citrus and honey sweetness. Roasted to highlight the delicate tea-like body.</p>",
        shortDescription:
            "<p>Washed process · Light roast · Notes of jasmine, lemon, and peach.</p>",
        price: 18.5,
        currency: "USD",
        categories: [1],
        images: [
            { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", alt: "Bag of Ethiopian coffee beans" },
        ],
    },
    {
        id: 102,
        name: "Colombia Huila",
        description:
            "<p>Sweet caramel body with ripe red berry acidity. Ideal for both filter brewing and espresso.</p>",
        shortDescription: "<p>Honey process · Medium roast · Notes of caramel, raspberry, and cocoa.</p>",
        price: 17,
        currency: "USD",
        categories: [1],
        images: [
            { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e", alt: "Freshly roasted coffee beans" },
        ],
        salePrice: 15,
    },
    {
        id: 201,
        name: "Pour Over Kit",
        description:
            "<p>A curated kit including a glass dripper, paper filters, and a gooseneck kettle. Everything you need for pour over brewing.</p>",
        shortDescription: "<p>Starter kit with brewer, filters, and kettle.</p>",
        price: 85,
        currency: "USD",
        categories: [2],
        images: [
            { src: "https://images.unsplash.com/photo-1523365280197-f1783db9fe62", alt: "Pour over coffee setup" },
        ],
    },
    {
        id: 202,
        name: "Hand Grinder",
        description:
            "<p>Precision burr grinder with 35 grind settings and a compact travel-friendly design.</p>",
        shortDescription: "<p>Stainless steel burrs · 35 grind steps · Travel ready.</p>",
        price: 69,
        currency: "USD",
        categories: [2],
        images: [
            { src: "https://images.unsplash.com/photo-1459257868276-5e65389e2722", alt: "Manual coffee grinder" },
        ],
    },
    {
        id: 301,
        name: "Signature Mug",
        description:
            "<p>Stoneware mug with heat-retaining walls and our roastery logo embossed on the side.</p>",
        shortDescription: "<p>12oz capacity · Dishwasher safe · Matte finish.</p>",
        price: 18,
        currency: "USD",
        categories: [3],
        images: [
            { src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef", alt: "Ceramic coffee mug" },
        ],
    },
    {
        id: 302,
        name: "Canvas Tote",
        description:
            "<p>Durable organic cotton tote with reinforced straps. Perfect for carrying beans and everyday essentials.</p>",
        shortDescription: "<p>Organic cotton · 15\" x 16\" · Inner pocket.</p>",
        price: 22,
        currency: "USD",
        categories: [3],
        images: [
            { src: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8", alt: "Canvas tote bag" },
        ],
    },
];
