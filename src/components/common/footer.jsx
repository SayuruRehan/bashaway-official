import Divider from "./divider";

const Footer = () => {
  const socialLinks = [
    {
      icon: "fb",
      url: "https://www.facebook.com/sliitfoss",
    },
    {
      icon: "insta",
      url: "https://www.instagram.com/sliitfoss/",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/company/sliit-foss-community/",
    },
    {
      icon: "twitter",
      url: "https://twitter.com/fosssliit?lang=en",
    },
    {
      icon: "youtube",
      url: "https://www.youtube.com/channel/UCPPO-QR0Dv13ewjhPsc_I3w/featured",
    },
  ];

  const usefulLinks = [
    // make available after registration opens
    // {
    //     name: 'Register',
    //     url: 'https://sliitfoss.org'
    // },
    // make available after registration opens
    // {
    //     name: 'Competition',
    //     url: 'https://sliitfoss.org'
    // },
    {
      name: "Code of Conduct",
      url: "https://sliitfoss.org/code-conduct",
    },
    // will be made public after the repository is made public
    // {
    //     name: 'Source Code',
    //     url: 'https://github.com/sliit-foss/bashaway-landing'
    // },
  ];

  return (
    <>
      <div
        className="flex flex-col justify-between p-3 md:p-12 bg-black grayscale md:flex-row"
        id="footer"
      >
        <div className="w-full">
          <div className="flex flex-col justify-center items-center w-full xl:w-10/12 md:pl-24 md:items-center md:justify-start scale-75 relative md:bottom-8">
            <div className="flex justify-start items-center">
              <a href="https://sliitfoss.org" target="_blank">
                <img src="/assets/foss-logo.svg" className="w-[6.6rem] h-[6.6rem] mx-6" />
              </a>
              <a href="https://www.facebook.com/sliit.fcsc/" target="_blank">
                <img
                  src="/assets/fcsc-logo.png"
                  className="w-32 h-32 mx-6 filter brightness-125"
                />
              </a>
            </div>
            <div className="flex justify-start items-center">
            <a
              href="https://community.mozilla.org/en/groups/mozilla-campus-club-of-sliit/"
              target="_blank"
            >
              <img
                src="/assets/mozilla-logo.png"
                className="w-28 h-28 mx-6 filter brightness-115"
              />
            </a>
            <a href="https://wif-web.web.app" target="_blank">
              <img
                src="/assets/wif-logo.png"
                className="w-28 h-28 mx-6"
              />
            </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-6 md:justify-start md:items-center ">
          <h1 className="mb-8 text-2xl font-semibold text-white">Contact</h1>
          <a
            className="mb-8 text-nav-links-unselected hover:text-primary transition duration-300"
            href="mailto:sllitfoss@gmail.com"
            target="_blank"
          >
            sllitfoss@gmail.com
          </a>
          <div className="flex justify-start mb-8">
            {socialLinks.map((link) => (
              <a href={link.url} target="_blank">
                <img
                  src={`/assets/social/${link.icon}.svg`}
                  className="w-5 h-5 mx-2 fill-current hover:brightness-200 transition duration-300"
                ></img>
              </a>
            ))}
          </div>
          <h1 className="mb-4 text-2xl font-semibold text-white">
            Visit Us On
          </h1>
          <a
            className="mb-2 text-nav-links-unselected hover:text-primary transition duration-300"
            href="https://sliitfoss.org"
            target="_blank"
          >
            sllitfoss.org
          </a>
        </div>
        <div className="flex flex-col items-center justify-end w-full mt-6 md:justify-start  md:pr-0 ">
          <h1 className="mb-6 text-2xl font-semibold text-white">
            Useful Links
          </h1>
          {usefulLinks.map((link) => (
            <a
              className="mb-3 text-nav-links-unselected hover:text-primary transition duration-300"
              href={link.url}
              target="_blank"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <Divider />
      <div className="flex flex-col justify-start px-10 pt-5 pb-6 bg-black md:flex-row md:justify-between text-nav-links-unselected md:px-24">
        <span className="text-center md:text-left">
          Copyright © 2022 SLIIT FOSS Community
        </span>
        <div className="flex items-center justify-center mt-4 md:justify-start md:mt-0">
          <span className="mr-3 md:mr-8">Visit us On</span>
          <a href="https://github.com/sliit-foss" target="_blank">
            <img
              src={`/assets/social/github.svg`}
              className="w-5 h-5 mb-0.5 hover:brightness-200 transition duration-300"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
