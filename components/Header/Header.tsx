import { useMantineColorScheme, Button } from "@mantine/core";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { BsFillSunFill, BsFillMoonFill, BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { DrawerContext } from "../../context/Drawer";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const {
    state: { open },
    dispatch
  } = useContext(DrawerContext);
  const dark = colorScheme === "dark";

  return (
    <header>
      <div
        className={`${styles["headerContainer"]} ${
          styles[dark ? "darkContainer" : "lightContainer"]
        }`}
      >
        <Link passHref href="/">
          <div className={styles["logoContainer"]}>
            <Image src="/images/logo.png" width={60} height={60} priority />
            <span>DenoCord</span>
          </div>
        </Link>
        <div className={styles["toggleColorSchemeContainer"]}>
          <Link href="https://github.com/denocord-labs/denocordts">
            <a target="_blank">
              <Button variant="subtle">
                <BsGithub size={25} />
              </Button>
            </a>
          </Link>
          <Button
            variant="subtle"
            onClick={() =>
              dispatch({ type: "TOGGLE", payload: { open: !open } })
            }
            className={styles["drawerButton"]}
          >
            <GiHamburgerMenu size={25} />
          </Button>
        </div>
      </div>
    </header>
  );
};
