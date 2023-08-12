import React from "react";
import Image from "next/image";
import {AvatarProps} from "@/pages/post";


export let avatarColors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#ecf0f1",
    "#95a5a6",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d",
];

function LetterAvatar(name: string, size: number): string | null {
    name = name || "";
    size = size || 60;

    let colours = avatarColors,
        nameSplit = String(name).toUpperCase().split(" "),
        initials,
        charIndex,
        colourIndex,
        canvas,
        context: CanvasRenderingContext2D | null,
        dataURI;

    if (nameSplit.length == 1) {
        initials = nameSplit[0] ? nameSplit[0].charAt(0) : "?";
    } else {
        initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    }

    if (window.devicePixelRatio) {
        size = size * window.devicePixelRatio;
    }

    charIndex = (initials == "?" ? 72 : initials.charCodeAt(0)) - 64;
    colourIndex = charIndex % 20;
    canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    context = canvas.getContext("2d");

    if (!context) return null;

    context.fillStyle = colours[colourIndex - 1];
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = Math.round(canvas.width / 2) + "px Arial";
    context.textAlign = "center";
    context.fillStyle = "#FFF";
    context.fillText(initials, size / 2, size / 1.5);

    dataURI = canvas.toDataURL();
    canvas = null;

    return dataURI;
}


export function AvatarImage(props: AvatarProps) {
    const avatarSrcUrl = LetterAvatar(props.fullName, props.width)

    if (!avatarSrcUrl) return <div></div>

    return <Image src={avatarSrcUrl} alt={props.fullName} width={props.width} height={props.width}/>
}