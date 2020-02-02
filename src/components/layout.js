import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Bio from "./bio";

class Layout extends React.Component {
    render() {
        const { location, title, children, description } = this.props;
        console.log(description);
        console.log(title);


        const rootPath = `${__PATH_PREFIX__}/`;
        let header;

        if (location && location.pathname === rootPath) {
            header = (
                <>
                    <h1
                        style={{
                            ...scale(1.8),
                            marginBottom:0,
                            marginTop: 0,
                        }}
                    >

                        <Link
                            style={{
                                boxShadow: `none`,
                                textDecoration: `none`,
                                color: `inherit`,
                            }}
                            to={`/`}
                        >
                            {title}

                        </Link>
                    </h1>
                    <p
                        style={{
                            marginTop:`0`,
                            paddingTop:`0`,
                            marginBottom: rhythm(1.5),
                        }}
                    >
                        {description}
                    </p>
                    {/*<Bio/>*/}

                </>

            )
        } else {
            header = (
                <h3
                    style={{
                        fontFamily: `Montserrat, sans-serif`,
                        marginTop: 0,
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h3>
            )
        }
        return (
            <div
                style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    maxWidth: rhythm(24),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
            >
                <header>{header}</header>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}Learning Man
                </footer>
            </div>
        )
    }
}

export default Layout
