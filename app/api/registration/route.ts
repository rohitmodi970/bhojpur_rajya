import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Registration from "@/db_models/Registration";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, district, mobile, email } = body;

    // Get device and IP information
    const userAgent = request.headers.get("user-agent") || undefined;
    const ipAddress = request.headers.get("x-forwarded-for") || 
                      request.headers.get("x-real-ip") || 
                      undefined;

    // Detect device type
    let device = "Unknown";
    if (userAgent) {
      if (/mobile/i.test(userAgent)) {
        device = "Mobile";
      } else if (/tablet/i.test(userAgent)) {
        device = "Tablet";
      } else {
        device = "Desktop";
      }
    }

    // Create new registration
    const registration = await Registration.create({
      name,
      district,
      mobile,
      email,
      userAgent,
      device,
      ipAddress,
    });

    return NextResponse.json(
      {
        success: true,
        message: "पंजीकरण सफल रहा!",
        data: {
          id: registration._id,
          name: registration.name,
          district: registration.district,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Registration error:", error);

    if (error && typeof error === "object" && "name" in error && error.name === "ValidationError") {
      return NextResponse.json(
        {
          success: false,
          message: "कृपया सभी आवश्यक जानकारी सही तरीके से भरें",
          errors: "errors" in error ? error.errors : undefined,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "पंजीकरण में त्रुटि हुई। कृपया पुनः प्रयास करें।",
      },
      { status: 500 }
    );
  }
}
