"use client";

import React from "react";
import Image from "next/image";
import styles from "./Avatar.module.css";

export type Props = {
    imgSrc: string;
    imgAlt: string;
    height: number;
    width: number;
}
function Avatar({ imgSrc, imgAlt, height, width }: Props) {
    return (
        <div className={styles.avatar} style={{height, width, position: 'relative'}}>
            <Image
                src={imgSrc}
                alt={imgAlt}
                fill={true}
                priority={true}
                sizes="200px"
                placeholder={"blur"}
                className={styles.avatarImage} />
        </div>
    );
}

export default Avatar;
