import { NextResponse } from 'next/server';

export async function GET() {
  // you should fetch user`s notification-setting-info from userDB
  try {
    return NextResponse.json({ notifications: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'error while ' }, { status: 500 });
  }
}
