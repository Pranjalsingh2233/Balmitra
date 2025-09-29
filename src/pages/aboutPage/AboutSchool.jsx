import React from "react";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";

export default function AboutSchool() {
  return (
    <>
      <Seo
        title="About Bal Mitra School, Prayagraj – Nurturing Well-Rounded Students"
        description="Learn about Bal Mitra School in Prayagraj, our values, teaching approach, and commitment to holistic education. Discover how we help children grow academically, socially, and emotionally."
      />

      <Hero
        img="/photo_10_2025-09-20_00-42-09.jpg"
        heading="About our school"
        para1="Bal Mitra is a nurturing school dedicated to helping children grow into confident, well-rounded individuals through strong values that last a lifetime. From the very first step in their learning journey, we provide a warm and supportive environment where every child feels at home. At Bal Mitra, we strike the perfect balance between academic excellence and personal development—ensuring our students not only achieve strong results but also build resilience, creativity, communication, and problem-solving skills that prepare them for life beyond the classroom."
        para2="At Bal Mitra, we believe education goes far beyond exams. While academic preparation is important, our true focus is on inspiring children to love learning, build resilience, and approach challenges with confidence. These qualities empower them not only for success today but also for the future ahead. Our dedicated teachers create an inclusive environment where every child’s unique potential is nurtured. With small class sizes and a wide range of enriching activities, every student at Bal Mitra is encouraged to grow, explore, and shine."
        img2="/photo_8_2025-09-20_00-42-09.jpg"
      />
    </>
  );
}
