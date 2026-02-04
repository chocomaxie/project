import { Element } from "react-scroll";

export default function Gallery() {
  return (
    <>
    <Element name="gallery" className="grid grid-cols-2 md:grid-cols-3 min-h-screen items-center">
        <div>
          <h1>Gallery</h1>
        </div>
        <div>
          <h1>Gallery</h1>
        </div>
        <div>
          <h1>Gallery</h1>
        </div>
        <div>
          <h1>Gallery</h1>
        </div>
      </Element>
    </>
  )
}