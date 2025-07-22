import { NextRequest, NextResponse } from "next/server";
const { SERVER_IP, SERVER_PORT } = process.env;

export async function GET(request: NextRequest) {
    const res = await fetch("", {
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();

    return NextResponse.json({ data });
}