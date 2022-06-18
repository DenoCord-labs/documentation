import styles from "./Sidebar.module.css";
import {
  useMantineColorScheme,
  Drawer,
  Button,
  ColorScheme,
  LoadingOverlay,
  Accordion
} from "@mantine/core";
import { openSpotlight } from "@mantine/spotlight";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import { DrawerContext } from "../../context/Drawer";
import { FcSearch } from "react-icons/fc";
const isProd = process.env.NODE_ENV === "production"

type Routes = {
  name: string,
  href?: string,
  children: [] | Omit<Routes, "children">[]
}

export function Sidebar() {

  const { colorScheme } = useMantineColorScheme();
  const {
    state: { open },
    dispatch
  } = useContext(DrawerContext);
  const router = useRouter();
  const [routes, setRoutes] = useState<Routes[]>([])
  useEffect(() => {

    async function fetchData() {
      const data = await fetch(isProd ? "https://denocord-labs.github.io/documentation/routes/data.json" : "/routes/data.json").catch(err => { })
      if (data) {
        const routesToRender = await data.json()
        setRoutes(routesToRender["routes"])
      }
    }
    fetchData()

  }, [router.pathname, router.route]);
  return (
    <aside
      className={`${styles["container"]} ${styles[colorScheme === "dark" ? "darkContainer" : "lightContainer"]
        }`} style={{
          height: "100%"
        }}
    >

      {routes
        ? routes.map((doc) => {
          if (!doc.children.length) {
            return (
              <LinkComponent key={doc.name} colorScheme={colorScheme} active={router.asPath == doc.href!} title={doc.name} href={doc.href!} />
            )
          }
          return (
            <Accordion iconPosition="right" key={doc.name} >
              <Accordion.Item label={doc.name} style={{
                borderBottom: "none",
                borderRadius: "10px"
              }} >
                {
                  doc.children.map(child => {
                    return (
                      <LinkComponent key={child.name} colorScheme={colorScheme} active={router.asPath == child.href!} title={child.name} href={child.href!} />

                    )
                  })
                }
              </Accordion.Item>
            </Accordion>
          )
        })
        : (
          <LoadingOverlay visible />
        )}
      <Drawer
        opened={open}
        onClose={() => dispatch({ type: "TOGGLE", payload: { open: !open } })}
        title="Documentation"
        size="md"
        padding="lg"
        styles={{
          drawer: {
            overflowY: "scroll"
          }
        }}
      >
        <>
          <Button
            variant="subtle"
            onClick={() => {
              dispatch({ type: "TOGGLE", payload: { open: !open } });
              openSpotlight();
            }}
          >
            <FcSearch size={25} />
          </Button>
          {routes
            ? routes.map((doc) => {
              if (!doc.children.length) {
                return (
                  <LinkComponent key={doc.name} colorScheme={colorScheme} active={router.asPath == doc.href!} title={doc.name} href={doc.href!} />
                )
              }
              return (
                <Accordion iconPosition="right" key={doc.name} >
                  <Accordion.Item label={doc.name} >
                    {
                      doc.children.map(child => {
                        return (
                          <LinkComponent key={child.name} colorScheme={colorScheme} active={router.asPath == child.href!} title={child.name} href={child.href!} />

                        )
                      })
                    }
                  </Accordion.Item>
                </Accordion>
              )
            })
            : (
              <LoadingOverlay visible />
            )}
        </>
      </Drawer>
    </aside>
  );
}

interface LinkProps {
  colorScheme: ColorScheme;
  href: string;
  title: string;
  active: boolean;
}

const LinkComponent: React.FC<LinkProps> = ({
  colorScheme,
  href,
  title,
  active
}) => {
  return (
    <Link href={href} passHref>
      <a
        className={`${styles[colorScheme === "dark" ? "darkLink" : "lightLink"]
          } ${styles["docsLink"]} ${active &&
          styles[colorScheme === "dark" ? "darkActive" : "lightActive"]
          }`}
      >
        {title}
      </a>
    </Link>
  );
};
