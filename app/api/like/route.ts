import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Like from "@/db_models/Like";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { likeType } = body; // 'support' or 'share'

    // Get device and IP information
    const userAgent = request.headers.get("user-agent") || undefined;
    const ipAddress = request.headers.get("x-forwarded-for") || 
                      request.headers.get("x-real-ip") || 
                      undefined;

    // Detect device type and metadata
    let device = "Unknown";
    let platform = "Unknown";
    let browser = "Unknown";
    let os = "Unknown";

    if (userAgent) {
      // Device type
      if (/mobile/i.test(userAgent)) {
        device = "Mobile";
      } else if (/tablet/i.test(userAgent)) {
        device = "Tablet";
      } else {
        device = "Desktop";
      }

      // Browser detection
      if (/chrome/i.test(userAgent)) browser = "Chrome";
      else if (/firefox/i.test(userAgent)) browser = "Firefox";
      else if (/safari/i.test(userAgent)) browser = "Safari";
      else if (/edge/i.test(userAgent)) browser = "Edge";
      else if (/opera/i.test(userAgent)) browser = "Opera";

      // OS detection
      if (/windows/i.test(userAgent)) os = "Windows";
      else if (/mac/i.test(userAgent)) os = "macOS";
      else if (/linux/i.test(userAgent)) os = "Linux";
      else if (/android/i.test(userAgent)) os = "Android";
      else if (/ios|iphone|ipad/i.test(userAgent)) os = "iOS";

      // Platform
      platform = `${device} - ${os}`;
    }

    // Create new like entry
    const like = await Like.create({
      userAgent,
      device,
      ipAddress,
      likeType,
      metadata: {
        platform,
        browser,
        os,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: likeType === "support" ? "समर्थन के लिए धन्यवाद!" : "शेयर करने के लिए धन्यवाद!",
        data: {
          id: like._id,
          likeType: like.likeType,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Like error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "त्रुटि हुई। कृपया पुनः प्रयास करें।",
      },
      { status: 500 }
    );
  }
}

// Get like counts
export async function GET() {
  try {
    await connectDB();

    const supportCount = await Like.countDocuments({ likeType: "support" });
    const shareCount = await Like.countDocuments({ likeType: "share" });
    const totalCount = supportCount + shareCount;

    return NextResponse.json(
      {
        success: true,
        data: {
          support: supportCount,
          share: shareCount,
          total: totalCount,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Get likes error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "डेटा लाने में त्रुटि हुई।",
      },
      { status: 500 }
    );
  }
}
