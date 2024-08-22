import ClientRoomPage from './ClientRoomPage';

interface RoomPageProps {
  params: {
    id: string;
  };
}

// Server component that passes the `id` param to the client component
const RoomPage: React.FC<RoomPageProps> = ({ params }) => {
  const { id } = params;

  return <ClientRoomPage id={id} />;
};

// This function is used to generate static paths for pre-rendering pages at build time
export async function generateStaticParams() {
  // Replace this array with your actual logic to get room IDs
  const ids = ['room1', 'room2', 'room3'];

  return ids.map(id => ({
    id: id,
  }));
}

export default RoomPage;
