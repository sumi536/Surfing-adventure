import SectionTitle from "./SectionTitle";
import GalleryItem from "./GalleryItem";

const images = [
  {
    id: 1,
    src: "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2021/4/24/hkpbfz2kr4j6bhy6agk3/carissa-moore-tahiti-2019",
    title: "surfing waves: spilling waves",
    // category: "pool",
  },
  {
    id: 2,
    src: "https://www.lima2019.pe/sites/default/files/2019-07/surf-banner_0.jpg",
    title: "plunging waves",
    // category: "Hotel",
  },
  {
    id: 3,
    src: "https://isasurf.org/wp-content/uploads/2022/08/background-adaptive.jpg",
    title: "surging waves",
    // category: "Annabelle",
  },
  {
    id: 4,
    src: "https://www.sixsenses.com/media/1552/fiji-surfing_fiji2_r.jpg?anchor=center&mode=crop&rnd=132266537910000000",
    title: "collapsing waves",
    category: "Record",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <SectionTitle title="Gallery" needMargin={true} />
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
