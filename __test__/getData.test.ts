import { expect, test } from "vitest";
import { getData } from "../app/dashboard/getData";

test("get Data Test", () => {
  const returnedValue = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  expect(getData()).toHaveReturned;
  expect(getData()).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      }),
    ])
  );
  expect(getData()).toEqual(returnedValue);
});
