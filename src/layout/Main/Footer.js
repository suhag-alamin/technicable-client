const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center text-xs w-full border-t-2 border-techniblePrimary py-1">
      &copy; Technible {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
};

export default Footer;
