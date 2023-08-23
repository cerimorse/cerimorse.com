import { CloudinaryImage } from "@/components/common/image";
import { Typography } from "@/components/common/typography";
import { Technology } from "@/components/about/technology";
import { Hobbies } from "@/components/about/hobbies";

export const metadata = {
  title: "About",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-6">
            <CloudinaryImage
              src="pages/about/bitesize"
              alt="Alt tag"
              width={633}
              height={900}
              sizes="(min-width: 0px) 100vw, (min-width: 768px) 50vw"
              priority
              className="h-auto w-full block rounded-lg overflow-hidden"
            />
          </div>
          <div className="col-span-12 space-y-8 md:col-span-6">
            <Typography variant="h2">
              Born and raised in Wales, the land of dragons.
            </Typography>
            <Typography variant="h2">
              Fluent in both Welsh and English.
            </Typography>
            <Typography variant="h2">
              Graduated from Cardiff University with a Bachelor of Science in
              Mathematics and its Applications degree in 2013.
            </Typography>
            <Typography variant="h2">
              Transitioned from developing standalone applications to full stack
              web development.
            </Typography>
          </div>
        </div>
      </section>
      <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-6">
            <Typography variant="body" className="text-muted-foreground">
              My interest in creating software solutions started all the way
              back in secondary school. I built an application for a shop system
              using Microsoft Access as part of a project. Seeing the interface
              and experience change through modifying a few lines of code was
              fascinating to me. I went on to study Mathematics at university
              but took as many Computer Science modules as possible. I built my
              first Java application, a hangman game, and used C++ to learn
              about parallel processing and image processing. I had a really
              exciting final year project working with the Welsh Rugby Union
              modelling line-out strategies using game theory, Monte Carlo
              simulation and Python.
            </Typography>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Typography variant="body" className="text-muted-foreground">
              {`Fresh from university, I started my career as a C++ developer at a
              gambling games company creating virtual casino games. I created a
              roulette game that saw a total value played increase of 700% when
              compared to the average game. I moved in to a lead position in a
              newly created online development team within the company and
              that’s where my interest in web development began. The more I
              explored the rich ecosystem of web technologies, the more I
              realised this was the path for me. I was offered a new role at a
              consultancy firm and led the development of a virtual engagement
              product that allowed mandatory public consultations to continue
              throughout the COVID-19 pandemic, culminating in an internal award
              for digital product of the year.`}
            </Typography>
          </div>
        </div>
      </section>
      <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
        <CloudinaryImage
          src="pages/about/horizon"
          alt="Alt tag"
          width={1080}
          height={720}
          sizes="100vw"
          className="h-auto w-full block rounded-lg overflow-hidden"
        />
      </section>
      <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
        <Typography variant="h3" className="mb-8">
          {`I've used a lot of different technologies during my time as a
          developer. Here's what I enjoy the most and use on a day-to-day basis.`}
        </Typography>
        <Technology />
      </section>
      <section className="max-w-screen-lg px-4 py-16 mx-auto sm:px-8">
        <Typography variant="h3" className="mb-8">
          {`Life isn’t all about work. Here are some things I like to do in my
          downtime to have fun and relax.`}
        </Typography>
        <Hobbies />
      </section>
    </>
  );
}
