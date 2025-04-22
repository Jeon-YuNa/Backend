"use client";
import GuestbookCard from "@/components/guestbook/GuestbookCard";
import { guestbooks } from "../data/guestbooks";
import { Guestbook } from "@/types/guestbook";
import { useEffect, useState } from "react";
import { getGuestbooks } from "@/utils/api";

export default function Home() {
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);

  useEffect(() => {
    getGuestbooks().then((guestbooks) => setGuestbooks(guestbooks));
  }, []);
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">방명록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guestbooks.map((guestbooks) => (
          <GuestbookCard key={guestbooks.id} guestbook={guestbooks} />
        ))}
      </div>
    </main>
  );
}
