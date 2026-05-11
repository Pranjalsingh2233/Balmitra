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
        img="/img15.webp"
        heading="About our school"
        para1="Established in 1986, Bal Mitra School in Preetam Nagar, Prayagraj is a trusted English-medium school known for academic excellence and holistic development. With modern infrastructure, well-equipped classrooms, science and computer labs, and dedicated sports facilities, the school offers quality education from preschool to senior secondary levels. Parents searching for the best school near me in Prayagraj choose BMS for its experienced faculty, safe campus, and strong results. The curriculum blends conceptual learning with extracurricular activities like sports, music, and dance, nurturing confident, well-rounded students. Admissions for the upcoming session are open."
        para2="At Bal Mitra School, Prayagraj, we believe that true education goes far beyond exams. While academic preparation is important, our real focus is on inspiring children to love learning, develop resilience, and approach challenges with confidence. These lifelong skills empower our students not only to succeed today but to thrive in every stage of life.

Our dedicated teachers at Bal Mitra, Prayagraj, foster an inclusive and supportive environment where every child’s unique potential is recognized and nurtured. With small class sizes, personalized attention, and a diverse range of enriching activities, we ensure that each student has the opportunity to grow, explore, and shine — both inside and outside the classroom."
        img2="/img3.webp"
      />

      {/* <!-- Fee Structure --> */}
      <div class="container py-5">
  <div class="text-center mb-5">
    <h1 class="fw-bold">Bal Mitra School (ICSE Wing)</h1>
    <p class="text-muted fs-5">Fee Structure 2026-27</p>
  </div>

  {/* <!-- Playgroup to UKG --> */}
  <div class="card shadow-sm border-0 rounded-4 mb-5">
    <div class="card-body p-4">
      <h3 class="fw-bold mb-4">Playgroup to UKG</h3>

      <div class="table-responsive">
        <table class="table table-bordered align-middle text-center">
          <thead class="table-dark">
            <tr>
              <th>Fee Head</th>
              <th>Playgroup</th>
              <th>Nursery</th>
              <th>LKG-UKG</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="fw-semibold">Admission Fee</td>
              <td>₹2000</td>
              <td>₹2000</td>
              <td>₹2000</td>
            </tr>

            <tr>
              <td class="fw-semibold">Annual Charges</td>
              <td>₹2000</td>
              <td>₹2000</td>
              <td>₹2000</td>
            </tr>

            <tr>
              <td class="fw-semibold">Tuition Fee</td>
              <td>₹1600</td>
              <td>₹1700</td>
              <td>₹1800</td>
            </tr>

            <tr>
              <td class="fw-semibold">
                Term Fee
                <br />
                <small class="text-muted">(July, Oct and Jan)</small>
              </td>
              <td>₹500</td>
              <td>₹500</td>
              <td>₹500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  {/* <!-- Classes 1-12 --> */}
  <div class="card shadow-sm border-0 rounded-4">
    <div class="card-body p-4">
      <h3 class="fw-bold mb-4">Classes 1 - 12</h3>

      <div class="table-responsive">
        <table class="table table-bordered align-middle text-center">
          <thead class="table-success">
            <tr>
              <th>Fee Head</th>
              <th>Classes 1-5</th>
              <th>Classes 6-8</th>
              <th>Classes 9-10</th>
              <th>Classes 11-12 (Science)</th>
              <th>Classes 11-12 (Arts/Commerce)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="fw-semibold">Admission Fee</td>
              <td>₹3,000</td>
              <td>₹3,000</td>
              <td>₹6,500</td>
              <td>₹6,500</td>
              <td>₹6,500</td>
            </tr>

            <tr>
              <td class="fw-semibold">Annual Charges</td>
              <td>₹2,400</td>
              <td>₹2,400</td>
              <td>₹2,400</td>
              <td>₹2,400</td>
              <td>₹2,400</td>
            </tr>

            <tr>
              <td class="fw-semibold">Tuition Fee</td>
              <td>₹1,800</td>
              <td>₹2,000</td>
              <td>₹2,500</td>
              <td>₹3,000</td>
              <td>₹2,800</td>
            </tr>

            <tr>
              <td class="fw-semibold">
                Term Fee
                <br />
                <small class="text-muted">(April, July, Oct and Jan)</small>
              </td>
              <td>₹500</td>
              <td>₹500</td>
              <td>₹600</td>
              <td>₹600</td>
              <td>₹600</td>
            </tr>

            <tr>
              <td class="fw-semibold">Board Fee</td>
              <td>NA</td>
              <td>NA</td>
              <td>₹5,500</td>
              <td>₹5,600</td>
              <td>₹5,600</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
