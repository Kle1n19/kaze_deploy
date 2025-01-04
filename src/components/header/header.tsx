import React from "react";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const getButtonClass = (route: string) =>
    currentRoute === route
      ? "text-yellow-400 underline decoration-yellow-400"
      : "text-white";

  return (
    <div className="!bg-black py-6 px-10 flex flex-row justify-between fixed top-0 w-full z-50">
      <div className="gap-12 space-x-12">
        <Link href="/">
          <Button
            type="link"
            className={`text-yellow-400 font-bold text-2xl custom-button`}
          >
            Kaze
          </Button>
        </Link>
        <Link href="/renting">
          <Button
            type="link"
            className={`${getButtonClass("/renting")} font-thin text-2xl custom-button`}
          >
            Renting
          </Button>
        </Link>
        <Link href="/cleaning">
          <Button
            type="link"
            className={`${getButtonClass("/cleaning")} font-thin text-2xl custom-button`}
          >
            Cleaning
          </Button>
        </Link>
        <Link href="/repair">
          <Button
            type="link"
            className={`${getButtonClass("/repair")} font-thin text-2xl custom-button`}
          >
            Repair
          </Button>
        </Link>
        <Link href="/faq">
          <Button
            type="link"
            className={`${getButtonClass("/faq")} font-thin text-2xl custom-button`}
          >
            FAQ
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/signIn">
          <Button
            type="link"
            className={`${getButtonClass("/signIn")} font-thin text-2xl custom-button`}
          >
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
