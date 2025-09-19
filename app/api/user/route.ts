import { NextResponse, NextRequest } from 'next/server';
import  prisma  from "@/db";

export async function GET() {
  const user = await prisma.user.findFirst({});
  return Response.json({ name: user?.username, email: user?.username })
}

export async function POST(req : NextRequest) {
  const { username, password } = await req.json();
  
  const user = await prisma.user.create({
    data : {
      username,
      password
    }
  })

  console.log(user.id);

  return NextResponse.json({message:"Signed up"})
}


