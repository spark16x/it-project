import { cookies } from "next/headers";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  cookies().set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    domain: "https://edudel-lite-server.vercel.app", // <-- change this
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return new Response("Cookie set", { status: 200 });
}
