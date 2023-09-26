import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function GET(req: Request) {
  const defaultImagePath = path.join(process.cwd(), 'public', 'assets', 'images', 'svg', 'profile-img.svg'); // Adjust the path to your default image

  try {
    if (fs.existsSync(defaultImagePath)) {
      const image = fs.readFileSync(defaultImagePath);
      return new NextResponse(image, {
        headers: {
          'Content-Type': 'image/svg',
        },
      });
    } else {
      return new NextResponse('Default profile image not found', {
        status: 404,
      });
    }
  } catch (error) {
    console.error('Error serving default profile image:', error);
    return new NextResponse('Internal Server Error', {
      status: 500,
    });
  }
}
