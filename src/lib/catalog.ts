import {catalogCategories, catalogProducts, CatalogProduct} from "@/data/catalog";
import {Category, Product} from "@/providers/context-provider";

type ListProductsParams = {
    page: number;
    perPage: number;
    categoryId?: number;
};

const currencySymbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    NGN: "₦",
};

function formatPrice(value: number): string {
    return value.toFixed(2);
}

function formatCurrency(value: number, currency: string): string {
    const symbol = currencySymbols[currency] ?? "";
    return `${symbol}${value.toFixed(2)}`;
}

function mapProduct(product: CatalogProduct): Product {
    const regularPrice = formatPrice(product.price);
    const sale = product.salePrice !== undefined ? formatPrice(product.salePrice) : "";
    const currentPrice = product.salePrice !== undefined ? sale : regularPrice;
    const regularCurrency = formatCurrency(product.price, product.currency);
    const saleCurrency =
        product.salePrice !== undefined ? formatCurrency(product.salePrice, product.currency) : "";
    const priceHtml = product.salePrice !== undefined
        ? `<del>${regularCurrency}</del> <ins>${saleCurrency}</ins>`
        : `<span>${regularCurrency}</span>`;

    return {
        id: product.id,
        name: product.name,
        description: product.description,
        short_description: product.shortDescription,
        price: currentPrice,
        regular_price: regularPrice,
        sale_price: sale,
        price_html: priceHtml,
        images: product.images,
    };
}

export function listProducts(params: ListProductsParams): Product[] {
    const {page, perPage, categoryId} = params;
    const start = Math.max(0, (page - 1) * perPage);
    const filtered = categoryId
        ? catalogProducts.filter((product) => product.categories.includes(categoryId))
        : catalogProducts;
    return filtered.slice(start, start + perPage).map(mapProduct);
}

export function listCategories(): Category[] {
    return catalogCategories.map((category) => {
        const count = catalogProducts.filter((product) => product.categories.includes(category.id)).length;
        return {
            id: category.id,
            name: category.name,
            count,
        };
    });
}
