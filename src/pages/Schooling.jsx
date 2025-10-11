import React from "react";
import Hero from "../components/Hero";
import Seo from "../components/Seo";

export default function Schooling() {
  return (
    <>
      <Seo
        title="Primary & Secondary Education – Bal Mitra School, Prayagraj"
        description="Bal Mitra School in Prayagraj offers a seamless journey from primary to secondary education, focusing on academic excellence, holistic development, and nurturing confident, well-rounded students."
      />

      <Hero
        img="/photo_1_2025-09-20_00-42-26.jpg"
        heading="Bal Mitra Primary to Senior Secondary School in Prayagraj"
        para1="Bal Mitra School, Prayagraj, is a thriving Primary to Senior Secondary institution nurturing students from Classes 1 to 12. Our academic achievements are commendable, but they represent only one part of our story. At Bal Mitra, we emphasize community, character, and creativity—encouraging every student to discover their individuality and make meaningful contributions to the world around them.

Located in Prayagraj, our campus offers state-of-the-art facilities, including dedicated subject-specific classrooms, a modern sports hall, all-weather sports grounds, a nature centre, and spacious areas designed for exploration, play, and growth."
        para2="As our students progress through Primary to Secondary, they are encouraged to embrace greater freedom and take on more responsibility for their personal growth and achievements. Guided by specialist teachers, they follow a comprehensive and challenging curriculum that goes well beyond the standard requirements. At Bal Mitra School, learners are supported in extending their knowledge, refining their skills, and excelling in an environment filled with encouragement and care."
        img2="/photo_2_2025-09-20_00-42-09.jpg"
      />
      <div className="container">
        <div className="row text-center align-items-center">
          <h2 className="text-col">Beyond the classroom</h2>
          <div className="col-md-8 offset-md-2 mt-3">
            <p>
              At Bal Mitra School, academics are just one part of a broad,
              balanced, and opportunity-rich approach to learning. We believe
              that education extends far beyond textbooks, which is why sports,
              music, and the arts are valued as essential to a child’s overall
              growth and development—just as much as classroom studies.
            </p>
          </div>
          <h2 className="mt-5">Music</h2>
          <div className="col-md-6 mt-5 mb-md-5">
            <img
              src="/photo_6_2025-09-20_00-42-09.jpg"
              className="img-fluid"
              alt="music"
              style={{
                borderRadius: "14px",
                width: "100%",
                objectFit: "cover",
                height: "25rem",
              }}
            />
          </div>
          <div className="col-md-6 mt-5 p-md-5 mb-5">
            <p>
              The standard and scope of music at Bal Mitra School are truly
              exceptional, engaging every student through the dedication of our
              specialist music teachers and a team of visiting instrumental
              experts. We believe that every child should have the opportunity
              to experience the joy of music—singing, performing, and playing
              instruments regularly as an integral part of their education.
            </p>
          </div>
          <h2 className="mt-md-5">Drama</h2>

          <div className="col-md-6 mt-md-5 p-md-5 mb-5">
            <p>
              At Bal Mitra School, Performing Arts play a vital role in
              nurturing creativity, self-expression, and confidence. Through
              dynamic workshops and interactive learning experiences, students
              are encouraged to explore their talents while developing essential
              social and listening skills. From voice training and performance
              poetry to improvisation and character studies, every activity is
              designed to build a wide range of transferable creative skills. As
              our students progress through their school journey, they gain
              confidence year by year, with even the most reserved learners
              blossoming into assured performers.
            </p>
          </div>
          <div className="col-md-6 mt-md-5 mb-5">
            <img
              src="/photo_6_2025-09-20_00-42-26.jpg"
              className="img-fluid"
              alt="music"
              style={{
                borderRadius: "14px",
                width: "100%",
                objectFit: "cover",
                height: "25rem",
              }}
            />
          </div>
          <h2 className="mt-5">Sport</h2>
          <div className="col-md-6 mt-md-5 mt-3 mb-md-5">
            <img
              src="/photo_3_2025-09-20_00-42-34.jpg"
              className="img-fluid"
              alt="music"
              style={{
                borderRadius: "14px",
                width: "100%",
                objectFit: "cover",
                height: "25rem",
              }}
            />
          </div>
          <div className="col-md-6 mt-5 p-md-5 mb-md-5">
            <p>
              Our wide-ranging programme of physical and creative activities
              inspires students to explore new interests while developing their
              individual talents. At Bal Mitra School, sport is placed at the
              heart of school life, as we recognize its vital role in promoting
              health, well-being, teamwork, and lifelong fitness. Through active
              participation, students not only build physical strength but also
              learn resilience, discipline, and the joy of healthy competition.
            </p>
          </div>
          <h2 className="mt-5">Art</h2>
          <div className="col-md-6 mt-md-5 mt-3 p-md-5 mb-5">
            <p>
              At Bal Mitra School, our aim is to instill in every student a
              lasting love and appreciation for Art that will remain with them
              throughout their lives. We believe that creativity is a vital part
              of a well-rounded education, and we work hard to create an
              environment where imagination and originality can flourish.
              Through engaging, ambitious, and carefully designed projects,
              students are encouraged to express their ideas freely, experiment
              with different mediums, and explore the world of visual
              creativity. In doing so, they not only develop artistic skills but
              also build confidence, critical thinking, and the ability to view
              the world from fresh perspectives.
            </p>
          </div>
          <div className="col-md-6 mt-md-5 mb-5">
            <img
              src="/photo_5_2025-09-20_00-42-26.jpg"
              className="img-fluid"
              alt="music"
              style={{
                borderRadius: "14px",
                width: "100%",
                objectFit: "cover",
                height: "25rem",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
