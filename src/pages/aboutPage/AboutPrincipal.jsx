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
        img="/img16.webp"
        heading="A word from our Director"
        para1="At Bal Mitra School, we believe a student is more than someone who excels acadenically they are individuals who embrace challenges, explore their passions, and grow with confidence.

We provide high-quality education alongside strong ethical values, nurturing children to become responsible, compassionate, and capable individuals. Students discover their unique potentials through academics, sports, arts, and co-curricular activities, gaining skills that last a lifetime.

Our hands-on approach ensures every child can explore, experiment, and excel. We encourage participation in state and national competitions in sports, quizzes, creative arts, performing arts, and more. Expert mentors are invited regularly to guide and inspire our students.

With a supportive environment, discipline, and a focus on holistic growth, Bal Mitra School prepares every child to face the world confidently, creatively, and with a lifelong love for learning."
        para2="Bal Mitra School, Prayagraj, is a truly distinctive institution. Parents value our open-door approach, appreciating how easily they can connect with teachers and actively participate in their child’s learning journey. Their support and pride in their children’s achievements are integral to our close-knit school community.

As a nurturing school in Prayagraj, Bal Mitra has earned a reputation for helping every child exceed expectations. By blending the best of our traditions with a forward-looking approach to education, we provide an exceptional learning experience that prepares students not only for the next stage of their schooling but also for success in the 21st century and beyond."
        img2="/img19.webp"
      />
    </>
  );
}
