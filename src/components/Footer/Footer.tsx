import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="py-4 px-8 w-full flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0 mt-auto text-center">
      <p className="text-white/40">
        <FooterLink href="https://svmplr.com"></FooterLink>
      </p>
    </div>
  );
};

export default Footer;
