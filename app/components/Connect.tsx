const Connect = () => {
  return (
    <>
    <div className="flex flex-col justify-center py-24 px-8 w-full text-center bg-dark">
      <div className="px-4 py-20 text-white">
        <h2 className="text-4xl font-black uppercase text-center">
          Let&apos;s Connect!
        </h2>
        <div>
          <p className="pt-4">
            I&apos;m always open to new opportunities — whether it&apos;s
            joining a great team, collaborating on something exciting, or
            chatting about the future of the web.
          </p>
          <p className="pt-4">
            Let&apos;s connect and see how we can work together.
          </p>
        </div>
        <div className="flex justify-center mt-12">
          <a href="mailto:revans911@gmail.com" className="cursor-pointer">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink to-red hover:brightness-125 focus:ring-2 focus:outline-none focus:ring-blue rounded-md px-5 py-2.5 text-center me-2 mb-2 text-lg font-bold min-w-[250px] shadow cursor-pointer transition-all duration-300"
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
        {/* <div className="text-white bg-linear-to-r to-yellow from-blue h-[1px] w-full"></div> */}
        </>
  );
};

export default Connect;
