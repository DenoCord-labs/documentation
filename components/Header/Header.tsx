import { useMantineColorScheme, Button, createStyles } from "@mantine/core";
import styles from "./Header.module.css";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { DrawerContext } from "../../context/Drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { openSpotlight } from "@mantine/spotlight"
import { FcSearch } from "react-icons/fc";

const useStyle = createStyles((theme) => {
  return {
    button: {
      ["@media only screen and (max-width:1100px)"]: {
        display: "none"
      }
    }
  }
})

export const Header: React.FC = () => {
  const { colorScheme, } = useMantineColorScheme();
  const { classes } = useStyle()
  const {
    state: { open },
    dispatch
  } = useContext(DrawerContext);
  const dark = colorScheme === "dark";

  return (
    <header>
      <div
        className={`${styles["headerContainer"]} ${styles[dark ? "darkContainer" : "lightContainer"]
          }`}
      >
        <Link passHref href="/">
          <div className={styles["logoContainer"]}>
            <img src="https://denocord-labs.github.io/documentation/images/logo.png" width={60} height={60} loading="eager" />
            <span>DenoCord</span>
          </div>
        </Link>
        <div className={styles["toggleColorSchemeContainer"]}>
          <Button
            variant="subtle"
            onClick={() =>
              openSpotlight()
            }
            className={classes.button}
          >
            <FcSearch size={25} />
          </Button>
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
