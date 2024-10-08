import React from 'react'

interface IconProps {
    fill?: string;
}

const LeftArrow: React.FC<IconProps> = ({ fill = "black" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "#FFFFFFB2" }} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M18 9.33005V14.67C18 17.99 15.65 19.34 12.78 17.69L11.5 16.95C11.19 16.77 11 16.44 11 16.08V7.92005C11 7.56005 11.19 7.23005 11.5 7.05005L12.78 6.31005C15.65 4.66005 18 6.01005 18 9.33005Z"
                fill={fill}
            />
            <path
                opacity="0.4"
                d="M10.0001 8.79006V15.2201C10.0001 15.6101 9.58006 15.8501 9.25006 15.6501L8.15006 15.0101C5.28006 13.3601 5.28006 10.6401 8.15006 8.99006L9.25006 8.35006C9.58006 8.16006 10.0001 8.40006 10.0001 8.79006Z"
                fill={fill}
            />
        </svg>
    )
}

export default LeftArrow