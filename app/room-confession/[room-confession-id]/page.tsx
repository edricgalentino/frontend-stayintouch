import MainLayout from "@/components/Common/template/MainLayout";
import crypto from "@/lib/helpers/crypto";
import type { Metadata } from "next";

type PageProps = {
  params: { "room-confession-id": string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "room-confession-id": encryptedId } = params;
  const roomConfessionId = crypto.decrypt(encryptedId);
  return {
    title: `Detail Room Confession`,
  };
}

const SeeDetailRoomConfession = ({ params }: PageProps) => {
  const { "room-confession-id": encryptedId } = params;
  const roomConfessionId = crypto.decrypt(encryptedId);
  return (
    <MainLayout>
      SeeDetailRoomConfession : {encryptedId} | roomConfessionId : {roomConfessionId}
    </MainLayout>
  );
};

export default SeeDetailRoomConfession;
