import { Counter } from "./Counter"

describe("Counter tests", () => {
    it("should start with a value of zero", () => {
        const counter = new Counter();
        expect(counter.value).toEqual(0);
    })
})