import React, { useEffect, useState } from "react";
import { getWelcomeMessage } from "../utils/welcomeMessage";
import SOSForm from "./SOSForm";
import "../App.css";

export default function Message() {
    const [message, setMessage] = useState("Načítám...");
    const [isOpenHours, setIsOpenHours] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        const fetchMessage = async () => {
            const { message: welcomeMessage, isOpen } = await getWelcomeMessage();
            setMessage(welcomeMessage);
            setIsOpenHours(isOpen);
        };
        fetchMessage();
    }, []);

    const handleOpenForm = () => {
        setIsFormVisible(true);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    return (
        <>
            <div className="notice">
                {message}
                {!isOpenHours && (
                    <span className="sos-icon" onClick={handleOpenForm}>
                        🍹
                    </span>
                )}
            </div>
            {isFormVisible && <SOSForm onClose={handleCloseForm} />}
        </>
    );
}
