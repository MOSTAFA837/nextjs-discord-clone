import { getServerById } from "@/actions/server";
import InitialModal from "@/components/modals/initial-modal";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

export default async function Setup() {
  const profile = await initialProfile();

  const server = await getServerById(profile._id);

  if (server) return redirect(`/servers/${server._id}`);
  return <InitialModal />;
}
