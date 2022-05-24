import styles from './Sidebar.module.css';
import { useMantineColorScheme, Drawer, Button } from '@mantine/core'
import { openSpotlight, closeSpotlight } from '@mantine/spotlight'
import { allDocs } from 'contentlayer/generated'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react';
import { DrawerContext } from '../../context/Drawer'
import { FcSearch } from 'react-icons/fc'
export function Sidebar() {
    const { colorScheme } = useMantineColorScheme()
    const { state: { open }, dispatch } = useContext(DrawerContext)
    const router = useRouter()
    useEffect(() => {

    }, [router.pathname, router.route])
    return (
        <aside className={`${styles['container']} ${styles[colorScheme === "dark" ? "darkContainer" : "lightContainer"]}`} >

            {
                allDocs ? allDocs.map(doc => {
                    return (
                        <LinkComponent key={doc._id} colorScheme={colorScheme} href={doc.url} title={doc.title} active={router.asPath === doc.url} />
                    )
                }) : null
            }
            <Drawer opened={open} onClose={() => dispatch({ type: "TOGGLE", payload: { open: !open } })}
                title="Documentation"
                size="md"
                padding="lg"
                styles={{
                    drawer: {
                        overflowY: "scroll"
                    }
                }}
            ><>
                    <Button variant='subtle' onClick={() => {
                        dispatch({ type: "TOGGLE", payload: { open: !open } })
                        openSpotlight()
                    }} >
                        <FcSearch size={25} />
                    </Button>
                    {
                        allDocs ? allDocs.map(doc => {
                            return (
                                <LinkComponent key={doc._id} colorScheme={colorScheme} href={doc.url} title={doc.title} active={router.asPath === doc.url} />
                            )
                        }) : null
                    }
                </>

            </Drawer>
        </ aside>
    );
}

function LinkComponent({ colorScheme, href, title, active }) {

    return (
        <Link href={href} passHref >
            <a className={`${styles[colorScheme === "dark" ? "darkLink" : "lightLink"]} ${styles['docsLink']} ${active && styles[colorScheme === "dark" ? "darkActive" : "lightActive"]}`} >
                {title}
            </a>

        </Link>
    )
}