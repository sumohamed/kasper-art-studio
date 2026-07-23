import { useState } from "react";
import { BookingContext } from "./BookingContext";

export const BookingProvider = ({ children }) => {
	const [selectedService, setSelectedService] = useState("");
	const [selectedPlan, setSelectedPlan] = useState("");

	const value = {
		selectedService,
		setSelectedService,
		selectedPlan,
		setSelectedPlan,
	};

	return (
		<BookingContext.Provider value={value}>
			{children}
		</BookingContext.Provider>
	);
};
``;
