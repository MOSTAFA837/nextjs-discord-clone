import { getServerById } from "@/actions/server";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

export default async function Setup() {
  const profile = await initialProfile();

  const server = await getServerById(profile.id);

  if (server) return redirect(`/servers/${server.id}`);
  return <div>setup</div>;
}
