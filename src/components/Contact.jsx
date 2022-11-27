const Skills = () => {
  return (
    <section
      className="w-full h-full px-40 py-5 pt-20 flex justify-between gap-5 duration-200 dark:text-white max-sm:px-6"
      id="Contact"
    >
      <div className="">
        <div className="flex flex-col gap-3">
          <h1 className="text-7xl max-sm:text-5xl">Contact</h1>
          <p className="text-2xl max-sm:text-lg">Contact me!</p>
        </div>
        <div className="w-full flex flex-wrap gap-5 py-10 relative">
          <div className="w-full bg-contain absolute -z-10 opacity-5 dark:opacity-25 hidden max-sm:-top-20 max-sm:flex">
            <img
              className="w-auto dropShadow border-2"
              src="https://res.cloudinary.com/dovavvnjx/image/upload/v1669457818/ui-ux-design_1_znsqm9.png"
              alt="Me"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 max-sm:flex-col">
              <div className="relative w-full">
                <span className="bg-white dark:bg-zinc-900 px-2 absolute bottom-8 left-2 duration-200">
                  Nombre y Apellidos
                </span>
                <input
                  className="max-sm:w-full dark:focus:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-black/30 placeholder-white/10 outline-none rounded-md py-2 px-3 dark:bg-black/10 border border-black/30 dark:border-white/30 duration-200"
                  type="text"
                  placeholder="Escribe..."
                />
              </div>
              <div className="relative">
                <span className="bg-white  dark:bg-zinc-900 px-2 absolute bottom-8 left-2 duration-200">
                  Correo electronico
                </span>
                <input
                  className="max-sm:w-full dark:focus:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-black/30 placeholder-white/10 outline-none rounded-md py-2 px-3 dark:bg-black/10 border border-black/30 dark:border-white/30 duration-200"
                  type="text"
                  placeholder="Escribe..."
                />
              </div>
            </div>

            <div className="w-full flex max-sm:flex-col gap-5">
              <div className="relative w-full">
                <span className="bg-white dark:bg-zinc-900 px-2 absolute bottom-8 left-2 duration-200">
                  ¿Que te gusto?
                </span>
                <input
                  className="max-sm:w-full dark:focus:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-black/30 placeholder-white/10 outline-none rounded-md py-2 px-3 dark:bg-black/10 border border-black/30 dark:border-white/30 duration-200"
                  type="text"
                  placeholder="Escribe..."
                />
              </div>
              <div className="relative w-full">
                <span className="bg-white dark:bg-zinc-900 px-2 absolute bottom-8 left-2 duration-200">
                  ¿Que proyecto te gusto?
                </span>
                <input
                  className="max-sm:w-full dark:focus:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-black/30 placeholder-white/10 outline-none rounded-md py-2 px-3 dark:bg-black/10 border border-black/30 dark:border-white/30 duration-200"
                  type="text"
                  placeholder="Escribe..."
                />
              </div>
            </div>
            <div className="relative w-full">
              <span className="bg-white dark:bg-zinc-900 px-2 absolute -top-3 left-2 duration-200">
                Dejame un mensaje
              </span>
              <textarea
                rows="10"
                className="w-full dark:focus:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-black/30 placeholder-white/10 outline-none rounded-md py-2 px-3 dark:bg-black/10 border border-black/30 dark:border-white/30 duration-200"
                name="comentarios"
                placeholder="Escribe..."
              ></textarea>
            </div>
            <div className="w-full">
              <button className="w-full rounded-md py-2 px-3 bg-black/90 text-white dark:bg-black dark:bg-black/10 border border-black/30 dark:border-white/30 duration-200">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="rotate-90 flex flex-col justify-center opacity-10 max-sm:hidden">
        <img
          src="https://res.cloudinary.com/dovavvnjx/image/upload/v1669457818/ui-ux-design_1_znsqm9.png"
          alt="UI/UX Designer"
        />
      </div>
    </section>
  );
};

export default Skills;
