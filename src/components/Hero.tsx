"use client";

import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-5xl font-bold tracking-tight mb-4">
        <Typewriter
          words={["Hey, I'm Lee"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </h1>
      <p className="text-xl text-muted-foreground max-w-xl">
        A full stack engineer from Sydney — I build fast, clean, and delightful
        web experiences.
      </p>
      <Button asChild className="mt-6">
        <a href="#about">View My Profile</a>
      </Button>
    </section>
  );
}
