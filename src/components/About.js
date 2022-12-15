import SectionTitle from "./SectionTitle";

const About = ({ minHeight }) => {
  return (
    <section
      className="about wrapper"
      style={minHeight ? { minHeight: "50vh" } : null}
    >
      <SectionTitle title="About" />
      <p>
        Surfing is the sport of riding waves in an upright or prone position.
        Surfers catch the ocean, river, or man-made waves and glide across the
        surface of the water until they break and lose their energy. In the
        ocean, wave riders stand up on surfboards and navigate the water -
        nearly parallel to the beach - toward the shore. There are four types of
        surfing waves: spilling waves, plunging waves, surging waves, and
        collapsing waves. The ultimate goal of surfing is to ride and progress
        on the unbroke
      </p>
    </section>
  );
};

export default About;
