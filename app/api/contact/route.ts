import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name: string;
      email: string;
      message: string;
    };

    console.log("CONTACT_FORM_DATA", body);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 },
      );
    }

    // Abhi sirf dummy success response
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 },
    );
  }
}