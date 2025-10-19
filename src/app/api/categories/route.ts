import {NextResponse} from "next/server";
import {listCategories} from "@/lib/catalog";

export function GET() {
    return NextResponse.json(listCategories());
}
