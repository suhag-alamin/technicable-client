const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center text-xs w-full border-t border-technicablePrimary py-1 mt-auto">
      &copy; Technible {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
};

export default Footer;
