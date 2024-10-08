import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-full">
            <a
              href="#"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Ler Documentação
            </a>
            <a
              href={`https://github.com/israaboy/plug-docs`}
              className="mx-3 font-bold hover:underline"
            >
              Ver no GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer