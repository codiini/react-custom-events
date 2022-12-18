//import the event.js file
import { publish, subscribe, unsubscribe } from "./events";

//test the subscribe function
test("subscribe", () => {
	const listener = jest.fn();
	subscribe("test", listener);
	publish("test", "test data");
	expect(listener).toHaveBeenCalledWith(
		expect.objectContaining({
			type: "test",
			detail: "test data",
		})
	);
});

//test the unsubscribe function
test("unsubscribe", () => {
	const listener = jest.fn();
	subscribe("test", listener);
	unsubscribe("test", listener);
	publish("test", "test data");
	expect(listener).not.toHaveBeenCalled();
});

//test the publish function
test("publish", () => {
	const listener = jest.fn();
	subscribe("test", listener);
	publish("test", "test data");
	expect(listener).toHaveBeenCalledWith(
		expect.objectContaining({
			type: "test",
			detail: "test data",
		})
	);
});
