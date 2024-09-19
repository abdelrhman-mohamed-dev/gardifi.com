import React from 'react'

interface SvgIconProps {
    fill?: string;
}

const ShieldTick: React.FC<SvgIconProps> = ({ fill = "#0F003A" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
                opacity="0.4"
                d="M14.6134 2.74669L7.28007 5.49336C5.88007 6.02669 4.7334 7.68003 4.7334 9.18669V19.9867C4.7334 21.0667 5.44007 22.4934 6.30673 23.1334L13.6401 28.6134C14.9334 29.5867 17.0534 29.5867 18.3467 28.6134L25.6801 23.1334C26.5467 22.48 27.2534 21.0667 27.2534 19.9867V9.18669C27.2534 7.69336 26.1067 6.02669 24.7067 5.50669L17.3734 2.76003C16.6267 2.46669 15.3734 2.46669 14.6134 2.74669Z"
                fill={fill}
            />
            <path
                d="M14.2134 18.9733C13.9601 18.9733 13.7067 18.88 13.5067 18.68L11.3601 16.5333C10.9734 16.1467 10.9734 15.5067 11.3601 15.12C11.7467 14.7333 12.3867 14.7333 12.7734 15.12L14.2134 16.56L19.2401 11.5333C19.6267 11.1467 20.2667 11.1467 20.6534 11.5333C21.0401 11.92 21.0401 12.56 20.6534 12.9467L14.9201 18.68C14.7201 18.88 14.4667 18.9733 14.2134 18.9733Z"
                fill={fill}
            />
        </svg>
    )
}

export default ShieldTick