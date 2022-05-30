import { FC, PropsWithChildren } from "react";

interface CalloutProps {
  variant: "info" | "danger";
  children: React.ReactNode;
}

export const Callout: FC<CalloutProps> = ({ variant = "info", children }) => {
  const variantStyles = {
    info: {
      borderLeft: "5px solid yellow",
      backgroundColor: "#292724"
    },
    danger: {
      borderLeft: "5px solid #f44336",
      backgroundColor: "#292724"
    }
  };
  return (
    <aside
      style={{
        padding: "1rem 2rem",
        margin: "1.5rem auto",
        borderRadius: 20,
        ...variantStyles[variant]
      }}
    >
      {children}
    </aside>
  );
};
