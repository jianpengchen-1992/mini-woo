import {NextRequest, NextResponse} from "next/server";
import {listProducts} from "@/lib/catalog";

export function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const perPage = Math.max(parseInt(params.get("per_page") || "12", 10), 1);
    const page = Math.max(parseInt(params.get("page") || "1", 10), 1);
    const categoryParam = params.get("category");
    const categoryId = categoryParam ? parseInt(categoryParam, 10) : undefined;

    const products = listProducts({page, perPage, categoryId});
    return NextResponse.json(products);
}
