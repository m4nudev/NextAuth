import { Session } from "inspector/promises";
import { Appbar } from "./components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG)
  return session;
}

export default async function Home() {
  const session = await getUser();
  return (
    <div>
      <Appbar />
      {JSON.stringify(Session)}
    </div>
  )
}
