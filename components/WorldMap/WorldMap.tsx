import React, { useEffect, useState } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
// import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

import geoData from "./custom.geo.json"

type UserData = {
    [countryCode: string]: number
}

const WorldMap = ({ userData }: { userData: UserData }) => {
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
    const [hoveredUsers, setHoveredUsers] = useState<number | null>(null)

    useEffect(() => {
        // console.log(userData["USA"])
        console.log(hoveredCountry)
        console.log(hoveredUsers)
    }, [hoveredCountry, hoveredUsers])

    return (
        <div className="relative w-[100%]">
            <ComposableMap>
                <Geographies geography={geoData}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const countryName = geo.properties.name_ar
                            const countryCode = geo.properties.iso_a3
                            const users = userData[countryCode] || 0


                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        setHoveredCountry(countryName)
                                        setHoveredUsers(users)
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredCountry(null)
                                        setHoveredUsers(null)
                                    }}
                                    style={{
                                        default: {
                                            fill: users > 0 ? "#2563eb" : "#d6d6d6",
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#a39b99",
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "#a19897",
                                            outline: "none",
                                        },
                                    }}
                                />
                            )
                        })
                    }
                </Geographies>
            </ComposableMap>

            {/* Custom Tooltip */}
            {hoveredCountry && (
                <div
                    className="absolute p-2 text-sm bg-black text-white rounded"
                    style={{ bottom: '20px', left: '0' }}
                >
                    {hoveredCountry}: {hoveredUsers} مستخدم
                </div>
            )}
        </div>
    )
}

export default WorldMap