import Heading from "./components/Heading/Heading";
import ContactForm from "./components/Contact/ContactForm";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";
import { VscGithub } from "react-icons/vsc";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-custom-bg bg-cover bg-center opacity-90"></div>
      <div className="relative">
        <VscGithub
          onClick={() =>
            window.open("https://github.com/rajarshisamaddar", "_blank")
          }
          className="fixed top-0 right-0 m-4 text-5xl text-white opacity-50 z-50 cursor-pointer transform transition duration-100 ease-in-out hover:scale-105"
        />
        <Heading />
        <div className="flex mx-4 lg:mx-0 flex-col-reverse justify-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-40">
          <div className="flex-2">
            <ContactForm />
          </div>
          <div className="flex-1">
            <Links />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
