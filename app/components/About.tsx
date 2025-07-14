import Image from "next/image";

const About = () => {
  return (
    <div className="bg-dark flex flex-col justify-center py-36 px-8 w-full lg:flex-row lg:px-24">
      <div className="flex justify-center min-w-1/2">
        <Image
          className="rounded-md"
          src="/images/profile-photo.jpg"
          width={400}
          height={460}
          alt="profile image"
        />
      </div>
      <div className="px-4 py-20 text-white">
        <h2 className="text-4xl font-black uppercase">Hi! I&apos;m Reggie</h2>
        <div>
          <p className="pt-4">
            I&apos;m a Frontend Developer with over 8 years of experience
            creating fast, responsive, and accessible web applications. I
            specialize in React, Angular and modern JavaScript, and I&apos;m
            passionate about building user-first digital experiences that are
            both clean and scalable.
          </p>
          <p className="pt-4">
            But beyond the code, I&apos;m also a dad to a curious 4-year-old who
            reminds me every day that problem-solving doesn&apos;t stop when you
            log off. Whether I&apos;m shipping features or building blanket
            forts, I&apos;m always learning, creating, and striving to do
            better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
