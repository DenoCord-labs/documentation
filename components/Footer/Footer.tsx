import styles from "./Footer.module.css";
import { useRouter } from "next/router";

const BASE_PAGE_URL =
  "https://github.com/denocord-labs/documentation/tree/main";

export const Footer: React.FC = () => {
  const { asPath } = useRouter();
  return (
    <div className={styles["container"]}>
      <span>MIT {new Date().getFullYear()} © DenoCord-Labs.</span>
      <a
        target="_blank"
        rel="noreferrer"
        href={
          asPath === "/"
            ? `${BASE_PAGE_URL}/pages/index.jsx`
            : `${BASE_PAGE_URL}${asPath}.mdx`
        }
      >
        Edit This Page on Github
      </a>
    </div>
  );
};
