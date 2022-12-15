import { useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoScroller,
  useGsapPhotoLevitate,
} from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.3, heroRef);
  useGsapPhotoScroller(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        Sea Rocks <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Photograph <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo one"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/beautiful-outdoor-tropical-beach-sea-paradise-island_74190-6839.jpg?w=360")',
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo two"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1173935107/photo/long-wave-on-the-coast-dawn-on-the-sea-tunisia.jpg?b=1&s=170667a&w=0&k=20&c=Vhi_ZXYXI5VZFX96XeesDYji7c4HAlYoS_rt_j8ZEY4=")',
          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo three"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/170624721/photo/chopped-coconut-on-sea-beach.jpg?s=612x612&w=0&k=20&c=6rsvVRiaUDH8_U49qtm2eWgUsKK7yjopI8bfNygWSBY=")',
          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo four"
          style={{
            backgroundImage:
              'url("https://c4.wallpaperflare.com/wallpaper/766/588/1008/sunset-wallpaper-preview.jpg")',
          }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo five"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
