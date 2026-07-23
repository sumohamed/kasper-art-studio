import { useState, useEffect } from "react";

export const useStatusMsg = () => {
	const [showMessage, setShowMessage] = useState(false);
	useEffect(() => {
		if (!showMessage) return;

		const timeout = setTimeout(() => {
			setShowMessage(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, [showMessage]);
	return { showMessage, setShowMessage };
};
