const Footer = () => {
  return (
    <footer className="!mt-6 mx-auto flex flex-col items-center justify-center ">
      <div className="flex w-full flex-wrap items-center justify-center gap-2 text-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Developed with ❤️ by Pradeep</span>
      </div>
    </footer>
  );
};

export default Footer;