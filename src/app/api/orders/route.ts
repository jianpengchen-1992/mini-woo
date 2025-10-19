import {NextResponse} from "next/server";

export function POST() {
    return NextResponse.json(
        {message: "Ordering is disabled in catalog mode."},
        {status: 501},
    );
}
