"use client";
import { useParams, useRouter } from 'next/navigation';
import VideoCall from '../../components/VideoCall';
import { useEffect, useState } from 'react';

const RoomPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const [roomID, setRoomID] = useState<string | null>(id as string);

  const appID: number = 594677803;
  const serverSecret: string = "cdb71de5dcd56b3eedc0889cf608c9c8";

  useEffect(() => {
    if (!roomID) {
      const newRoomID = generateRandomID(5);
      setRoomID(newRoomID);
      router.replace(`/room/${newRoomID}`);
    }
  }, [roomID, router]);

  const generateRandomID = (length: number): string => {
    return Math.random().toString(36).substring(2, length + 2);
  };

  if (!roomID) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <VideoCall appID={appID} serverSecret={serverSecret} roomID={roomID} />
    </div>
  );
};

// This function is used to generate static paths for pre-rendering pages at build time
export async function generateStaticParams() {
  // You can replace this with your actual logic to get room IDs
  // For example, you could fetch a list of room IDs from your database
  const ids = ['room1', 'room2', 'room3'];

  return ids.map(id => ({
    id: id,
  }));
}

export default RoomPage;
