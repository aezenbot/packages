import { Duration } from "../../../packages/utilities/duration/src/index";

const cases = {
  instance: [
    ["string", "1hour"],
    ["string", "3600000"],
    ["number", 3600000]
  ],
  
  verbose: [
    ["1h", "1 hour"],
    ["1h1m", "1 hour 1 minute"],
    ["1.5h 1m1s", "1 hour 31 minutes 1 second"],
    ["1h 1m1s and 5.5minutes", "1 hour 6 minutes 31 seconds"],
    ["7d25h5m15s", "1 week 1 day 1 hour 5 minutes 15 seconds"],
    ["5.5terayears", "5 terayears 500 gigayears"]
  ],

  elegant: [
    ["1h5m", "1 hour and 5 minutes"],
    ["8d26h5m", "1 week, 2 days, 2 hours and 5 minutes"],
    ["3months 5w 12h 66s", "4 months, 5 days, 1 hour and 32 minutes"]
  ],

  binary: [
    ["1hour and 56 minutes", "1101100110000"],
    ["876960000", "11010110000110100000"],
    ["5w 40days 3.5hours 5 min", "11000110001001011100100"]
  ],

  colon: [
    ["1 hour", "01:00:00"],
    ["1.5hours 30m 55s", "02:00:55"],
    ["5weeks 5days 555.23 hour 12s", "1515:14:00"]
  ],

  scientific: [
    ["1 h", "3.6e+6"],
    ["1.5h 560.32m", "3.90192e+7"],
    ["8years 55mo 16.3w and 672d", "4.6484307e+11"]
  ],

  compact: [
    ["1h and 6 seconds", "1h 6s"],
    ["5w 66d and 12 hours", "3mo 1w 3d 4h 32m 42s"],
    ["1.5terayears", "1tyr 500gyr"]
  ],

  json: [
    ["5.7166years 5mo", JSON.stringify({
      "terayear": "0",
      "gigayear": "0",
      "megayear": "0",
      "millennium": "0",
      "century": "0",
      "decade": "0",
      "year": "6",
      "month": "1",
      "week": "2",
      "day": "4",
      "hour": "7",
      "minute": "21",
      "second": "21",
      "millisecond": "600",
      "microsecond": "0",
      "nanosecond": "0"
    })]
  ]
}

describe("@aezen/duration", () => {
  test.each(cases.instance)(
    "Instance created using %p %p.",
    (_, secondArg) => {
      const duration = new Duration(secondArg);
      expect(duration).toBeInstanceOf(Duration);
      expect(duration.verbose()).toBe("1 hour");
    }
  )

  test("Returns NaN for invalid duration.", () => {
    const duration = new Duration("foo");
    expect(duration.isNaN()).toBeTruthy();
  })

  describe("verbose()", () => {
    test.each(cases.verbose)(
      "%p --> %p.",
      (firstArg, expectedResult) => {
        const duration = new Duration(firstArg);
        expect(duration.verbose()).toBe(expectedResult);
      }
    );
  })

  describe("elegant()", () => {
    test.each(cases.elegant)(
      "%p --> %p.",
      (firstArg, expectedResult) => {
        const duration = new Duration(firstArg);
        expect(duration.elegant()).toBe(expectedResult);
      }
    );
  })

  describe("binary()", () => {
    test.each(cases.binary)(
      "%p --> %p.",
      (firstArg, expectedResult) => {
        const duration = new Duration(firstArg);
        expect(duration.binary()).toBe(expectedResult);
      }
    );
  })

  describe("colon()", () => {
    test.each(cases.colon)(
      "%p --> %p.",
      (firstArg, expectedResult) => {
        const duration = new Duration(firstArg);
        expect(duration.colon()).toBe(expectedResult);
      }
    );
  })

  describe("scientific()", () => {
    test.each(cases.scientific)(
      "%p --> %p.",
      (firstArg, expectedResult) => {
        const duration = new Duration(firstArg);
        expect(duration.scientific()).toBe(expectedResult);
      }
    );
  })

  describe("compact()", () => {
    test.each(cases.compact)(
      "%p --> %p.",
      (firstArg, expectedResult) => {
        const duration = new Duration(firstArg);
        expect(duration.compact()).toBe(expectedResult);
      }
    );
  })

  describe("json()", () => {
    test.each(cases.json)(
      "%p turns into proper unit json.",
      (firstArg, expectedResult) => {
        const duration = new Duration(firstArg);
        expect(duration.json()).toBe(expectedResult);
      }
    );
  })
})