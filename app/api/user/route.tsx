
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";
import client from "../../db";


export function GET() {
  return Response.json({
    email: "sahil@gmail.com",
  });
}
export async function POST(req: NextRequest) {
  console.log("reached here at api end point...............");
  const body = await req.json();
  console.log(body);
  try {
     client.user.create({
      data: {
          username: body.username,
          password: body.password,
      },
  });
    
  } catch (error) {
    console.log("error in creating user", error);
    return NextResponse.json({
      name: "Sahil",
      email: body.email,
      message: "User not Created",
    });
  }
 
  return NextResponse.json({
    name: "Sahil",
    email: body.email,
    message: "User Created",
  });
}
