import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";

export default function Gallery() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="title col-12 text-center mt-5">
        <small data-cue="slideInUp">The FreeInGo Experience</small>
        <h2 data-cue="slideInUp" data-delay="100">
          Gallery
        </h2>
      </div>
      <Carousel className="w-screen max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-6">
                  <div className="">
                    <img
                      src="/img/img1.jpg"
                      className="object-cover w-full rounded-md"
                    />
                  </div>
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
