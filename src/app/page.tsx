"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  const router = useRouter();

  // Redirect to a new room if accessed directly
  useEffect(() => {
    router.push(`/room/${generateRandomID(5)}`);
  }, [router]);

  // Helper function to generate random ID
  const generateRandomID = (length: number): string => {
    return Math.random().toString(36).substring(2, length + 2);
  };

  return <div>Redirecting to a new room...</div>;
};

export default HomePage;
