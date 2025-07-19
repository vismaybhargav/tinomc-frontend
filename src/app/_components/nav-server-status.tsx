import { useEffect, useState } from "react";
const { SERVER_IP, SERVER_PORT } = process.env;

export default async function NavServerStatus() {
    let [isServerOn, setServerOn] = useState(true);
    
    useEffect(() => {
        /*
        const fetchServerStatus = async () => {
            try {
                const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/server-status`);
                if (response.ok) {
                    const data = await response.json();
                    setServerOn(data.isOn);
                } else {
                    console.error("Failed to fetch server status");
                }
            } catch (error) {
                console.error("Error fetching server status:", error);
            }
        };

        fetchServerStatus();
        */
    });

    return (
        <div className="flex" >
            Server Status
            <div className="">
                {isServerOn ? "Online" : "Offline"}
            </div>
        </div>
    );
}
