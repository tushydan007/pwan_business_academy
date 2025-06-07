// components/BooksOfTheMonth.tsx

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

type Book = {
  id: number;
  title: string;
  author: string;
  price: string;
  image: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "Deep Work",
    author: "Cal Newport",
    price: "$14.99",
    image: "/assets/deepwork.png",
  },
  {
    id: 2,
    title: "Mindset",
    author: "Dr Carol S. Dweck",
    price: "$12.50",
    image: "/assets/mindset.png",
  },
  {
    id: 3,
    title: "Go Pro",
    author: "Eric Worre",
    price: "$10.00",
    image: "/assets/gopro.png",
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    price: "$16.00",
    image: "/assets/atomichabits.png",
  },
];

export default function BooksOfTheMonth() {
  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="md:text-3xl text-2xl text-red-600 font-bold mb-6 text-center">
        📚 Books of the Month
      </h2>

      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-6"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...books, ...books].map((book, index) => (
            <Card
              key={`${book.id}-${index}`}
              className="min-w-[200px] w-[200px] shadow-md flex-shrink-0"
            >
              <CardContent className="p-0">
                <div className="relative w-full h-48">
                  <Image
                    src={book.image}
                    alt={book.title}
                    layout="fill"
                    className="rounded-t-md"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-sm">{book.title}</h3>
                  <p className="text-muted-foreground text-xs">{book.author}</p>
                  <span className="text-primary font-bold mt-1 block">
                    {book.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
