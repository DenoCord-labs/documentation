import Link from "next/link";
import React, { PropsWithChildren } from "react"


export const CustomLink: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => {

    return (
        <>
            <Link href={href} >
                <a>
                    {
                        children
                    }
                </a>
            </Link>

        </>
    )

}