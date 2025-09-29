import { Helmet } from "react-helmet-async";

function Seo({ title, description }) {
  const siteName = "BalMitra";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>

      <meta
        name="description"
        content={
          description ||
          "Give your child the best start at Bal Mitra School in Prayagraj, offering nurturing education, holistic development, and a strong foundation for the future."
        }
      />
      <meta
        name="keywords"
        content="Bal Mitra school, best schools in Prayagraj, top schools in Prayagraj, primary school Prayagraj, preschool Prayagraj, CBSE school Prayagraj, kindergarten Prayagraj, education Prayagraj, English medium school Prayagraj, co-educational school Prayagraj"
      />
    </Helmet>
  );
}

export default Seo;
