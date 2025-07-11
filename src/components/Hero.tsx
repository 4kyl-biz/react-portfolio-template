"use client";

import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-6xl font-bold tracking-tight mb-4">
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
      <p className="text-2xl text-muted-foreground max-w-xl">
        A full stack engineer from Sydney — I build fast, clean, and delightful
        web experiences.
      </p>
      <Button asChild className="mt-6" size={"lg"}>
        <a className="text-2xl font-bold" href="#about">
          View My Profile
        </a>
      </Button>
    </section>
  );
}
