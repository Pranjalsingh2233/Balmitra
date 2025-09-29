import React from "react";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";

export default function AboutPrincipal() {
  return (
    <>
      <Seo
        title="About the Director – Bal Mitra School, Prayagraj"
        description="Meet the Director of Bal Mitra School in Prayagraj, whose vision and leadership nurture a caring, high-quality learning environment, guiding students toward academic excellence and holistic growth."
      />

      <Hero
        img="/photo_10_2025-09-20_00-42-09.jpg"
        heading="A word from our Director"
        para1="From the moment I first walked through the doors of Bal Mitra, I knew it was a special place. My school days were filled with warmth, purpose, and countless opportunities that went far beyond the classroom. That experience has shaped my vision for what Bal Mitra continues to offer its pupils today. Above all, I want to see children arriving each morning with excitement—ready to dive into school life, embrace new challenges, and celebrate every success along the way. While academic excellence is at the heart of what we do, it is often the wider experiences that create the most lasting memories—whether it’s participating in sports, enjoying creative competitions, or performing on stage. These are the moments our children will carry with them long after their time at Bal Mitra."
        para2="Bal Mitra is a truly distinctive school. Parents value our open-door approach, appreciating the ease with which they can connect with staff and share in their child’s learning journey. Their support and pride in their children’s achievements form an essential part of our close-knit community. As a nurturing school, Bal Mitra has earned a reputation for helping every child achieve far beyond expectations. By combining the best of our traditions with a forward-looking approach to learning, we provide an exceptional education that prepares our students not only for the next stage of their schooling but also for life in the 21st century."
        img2="/photo_4_2025-09-20_00-42-34.jpg"
      />
    </>
  );
}
