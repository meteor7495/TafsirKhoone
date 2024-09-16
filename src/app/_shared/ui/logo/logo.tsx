import React from "react";
import styles from "./logo.module.scss";
import { Title } from "@mantine/core";
import Link from "next/link";
export const Logo = () => {
    return (
        <div className={styles.root}>
            <Link href={"/"}>
                <Title order={1}>تفسیر نوین</Title>
            </Link>
        </div>
    );
};
