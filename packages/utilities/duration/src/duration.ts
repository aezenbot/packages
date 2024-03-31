import BigNumber from "bignumber.js";
import { DEFAULT_UNITS, TimeTypes, Time } from "./constants";

type SeparatorOptions = {
  right: string;
  left: string;
}

const tokens: Map<string, BigNumber> = new Map([
  ["nanoseconds", Time.Nanosecond],
  ["nanosecond", Time.Nanosecond],
  ["nsecs", Time.Nanosecond],
  ["nsec", Time.Nanosecond],
  ["ns", Time.Nanosecond],
  ["n", Time.Nanosecond],

  ["microseconds", Time.Microsecond],
  ["microsecond", Time.Microsecond],
  ["musecs", Time.Microsecond],
  ["musec", Time.Microsecond],
  ["mus", Time.Microsecond],
  ["mu", Time.Microsecond],
  ["μs", Time.Microsecond],
  ["us", Time.Microsecond],
  ["u", Time.Microsecond],

  ["milliseconds", Time.Millisecond],
  ["millisecond", Time.Millisecond],
  ["msecs", Time.Millisecond],
  ["msec", Time.Millisecond],
  ["ms", Time.Millisecond],

  ["seconds", Time.Second],
  ["second", Time.Second],
  ["secon", Time.Second],
  ["seco", Time.Second],
  ["secs", Time.Second],
  ["sec", Time.Second],
  ["se", Time.Second],
  ["s", Time.Second],

  ["minutes", Time.Minute],
  ["minute", Time.Minute],
  ["minu", Time.Minute],
  ["mins", Time.Minute],
  ["min", Time.Minute],
  ["mi", Time.Minute],
  ["mn", Time.Minute],
  ["m", Time.Minute],

  ["hour", Time.Hour],
  ["hours", Time.Hour],
  ["hrs", Time.Hour],
  ["hr", Time.Hour],
  ["hs", Time.Hour],
  ["h", Time.Hour],

  ["days", Time.Day],
  ["day", Time.Day],
  ["dys", Time.Day],
  ["da", Time.Day],
  ["dy", Time.Day],
  ["ds", Time.Day],
  ["d", Time.Day],

  ["weeks", Time.Week],
  ["week", Time.Week],
  ["wks", Time.Week],
  ["we", Time.Week],
  ["ws", Time.Week],
  ["wk", Time.Week],
  ["w", Time.Week],

  ["months", Time.Month],
  ["month", Time.Month],
  ["mth", Time.Month],
  ["mos", Time.Month],
  ["mo", Time.Month],
  ["b", Time.Month],

  ["years", Time.Year],
  ["year", Time.Year],
  ["yrs", Time.Year],
  ["yea", Time.Year],
  ["ye", Time.Year],
  ["yr", Time.Year],
  ["ys", Time.Year],
  ["y", Time.Year],

  ["decades", Time.Decade],
  ["decade", Time.Decade],
  ["decad", Time.Decade],
  ["deca", Time.Decade],
  ["decs", Time.Decade],
  ["dec", Time.Decade],
  ["de", Time.Decade],

  ["centuries", Time.Century],
  ["century", Time.Century],
  ["cents", Time.Century],
  ["cent", Time.Century],
  ["cen", Time.Century],
  ["ce", Time.Century],
  ["c", Time.Century],

  ["millennia", Time.Millennium],
  ["milleniums", Time.Millennium],
  ["millenium", Time.Millennium],
  ["millennias", Time.Millennium],
  ["milly", Time.Millennium],
  ["mill", Time.Millennium],
  ["mil", Time.Millennium],
  ["ml", Time.Millennium],

  ["megayears", Time.Megayear],
  ["megayear", Time.Megayear],
  ["megayear", Time.Megayear],
  ["megayea", Time.Megayear],
  ["megayes", Time.Megayear],
  ["megayer", Time.Megayear],
  ["megay", Time.Megayear],
  ["mega", Time.Megayear],
  ["megayrs", Time.Megayear],
  ["megary", Time.Megayear],
  ["myr", Time.Megayear],

  ["gigayears", Time.Gigayear],
  ["gigayear", Time.Gigayear],
  ["gigayea", Time.Gigayear],
  ["gigayes", Time.Gigayear],
  ["gigayer", Time.Gigayear],
  ["gigay", Time.Gigayear],
  ["gyr", Time.Gigayear],
  ["gigary", Time.Gigayear],
  ["gy", Time.Gigayear],

  ["terayears", Time.Terayear],
  ["terayear", Time.Terayear],
  ["terayea", Time.Terayear],
  ["terayer", Time.Terayear],
  ["terayes", Time.Terayear],
  ["teray", Time.Terayear],
  ["tera", Time.Terayear],
  ["teryrs", Time.Terayear],
  ["teryr", Time.Terayear],
  ["tery", Time.Terayear],
  ["tyr", Time.Terayear],
  ["ty", Time.Terayear]
]);

const TimeMappings: Map<BigNumber, string> = new Map([
  [Time.Nanosecond, "nanoseconds"],
  [Time.Microsecond, "microseconds"],
  [Time.Millisecond, "milliseconds"],
  [Time.Second, "seconds"],
  [Time.Minute, "minutes"],
  [Time.Hour, "hours"],
  [Time.Day, "days"],
  [Time.Week, "weeks"],
  [Time.Month, "months"],
  [Time.Year, "years"],
  [Time.Decade, "decades"],
  [Time.Century, "centuries"],
  [Time.Millennium, "millennia"],
  [Time.Megayear, "megayears"],
  [Time.Gigayear, "gigayears"],
  [Time.Terayear, "terayears"],
]);

const TimeValues: [string, BigNumber][] = [
  [TimeTypes.Terayear, Time.Terayear],
  [TimeTypes.Gigayear, Time.Gigayear],
  [TimeTypes.Megayear, Time.Megayear],
  [TimeTypes.Millennium, Time.Millennium],
  [TimeTypes.Century, Time.Century],
  [TimeTypes.Decade, Time.Decade],
  [TimeTypes.Year, Time.Year],
  [TimeTypes.Month, Time.Month],
  [TimeTypes.Week, Time.Week],
  [TimeTypes.Day, Time.Day],
  [TimeTypes.Hour, Time.Hour],
  [TimeTypes.Minute, Time.Minute],
  [TimeTypes.Second, Time.Second],
  [TimeTypes.Millisecond, Time.Millisecond],
  [TimeTypes.Microsecond, Time.Microsecond],
  [TimeTypes.Nanosecond, Time.Nanosecond]
];

export class Duration {
  units: { [key: string]: any };
  ms: BigNumber;
  nanoseconds = 0;
  microseconds = 0;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  days = 0;
  weeks = 0;
  months = 0;
  years = 0;
  decades = 0;
  centuries = 0;
  millennia = 0;
  megayears = 0;
  gigayears = 0;
  terayears = 0;
  
  private static readonly patternRegex = /(-?\d*\.?\d+(?:e[-+]?\d+)?)\s*([a-zμ]*)/gi;
  private static readonly commaRegex = /,/g;
  private static readonly aAndAnRegex = /\ban?\b/gi;

  constructor(pattern: string | number) {
    this.units = DEFAULT_UNITS;
    this.ms = typeof pattern === "string" && isNaN(Number(pattern))
      ? this.calculateOffset(pattern.toLowerCase())
      : new BigNumber(pattern);
  }

  public isNaN(): boolean {
    return this.ms.isNaN();
  }
  
  public fromNow(): Date {
    return this.dateFrom(new Date());
  }

  public dateFrom(date: Date): Date {
    return new Date(date.getTime() + this.ms.toNumber());
  }

  public verbose(precision: number = 7, separators: SeparatorOptions = { right: " ", left: " " }) {
    let duration = this.ms
    
    if (duration.isNaN()) {
      return NaN
    }

    const output: string[] = [];
    const negative: boolean = duration.isNegative();
    
    if (negative) {
      duration = duration.abs();
    }

    for (const [type, value] of TimeValues) {
      const division: BigNumber = duration.dividedBy(value);

      if (division.isLessThan(1)) {
        continue;
      }

      const floored: BigNumber = division.integerValue(BigNumber.ROUND_FLOOR);
      duration = duration.minus(floored.times(value));
      output.push(this.addUnit(floored, this.units[type], separators.right!));

      if (output.length >= precision) {
        break;
      }
    }
    
    return `${negative ? "-" : ""}${output.join(separators.right) || this.addUnit(new BigNumber(0), this.units.second, separators.left)}`;
  }

  public elegant(precision: number = 7, separator: SeparatorOptions = { right: " ", left: " " }): string | number {
    let duration = this.ms;
    
    if (duration.isNaN()) {
      return NaN
    }

    const output: string[] = [];
    const negative: boolean = duration.isNegative();

    if (negative) {
      duration = duration.abs();
    }

    for (const [type, value] of TimeValues) {
      const division: BigNumber = duration.dividedBy(value);

      if (division.isLessThan(1)) {
        continue;
      }

      const floored: BigNumber = division.integerValue(BigNumber.ROUND_FLOOR);
      duration = duration.minus(floored.times(value));
      output.push(this.addUnit(floored, this.units[type], separator.left!));

      if (output.length >= precision) {
        break;
      }
    }

    return `${negative ? "-" : ""}${this.joinWithConjunction(output, separator.right)}`;
  }

  public binary(): string | number {
    const duration = this.ms;
    
    if (duration.isNaN()) {
      return NaN
    }

    const seconds: BigNumber = duration.dividedBy(Time.Second).integerValue(BigNumber.ROUND_FLOOR);
    
    return seconds.toString(2);
  }

  public colon(): string | number {
    let duration = this.ms;
    
    if (duration.isNaN()) {
      return NaN
    }

    const hours: BigNumber = duration.dividedBy(Time.Hour).integerValue(BigNumber.ROUND_FLOOR);
    duration = duration.modulo(Time.Hour);

    const minutes: BigNumber = duration.dividedBy(Time.Minute).integerValue(BigNumber.ROUND_FLOOR);
    duration = duration.modulo(Time.Minute);

    const seconds: BigNumber = duration.dividedBy(Time.Second).integerValue(BigNumber.ROUND_FLOOR);

    return `${this.padWithZero(hours)}:${this.padWithZero(minutes)}:${this.padWithZero(seconds)}`;
  }

  public scientific(): string | number {
    const duration = this.ms;
    
    if (duration.isNaN()) {
      return NaN
    }

    return duration.toExponential();
  }
  
  public compact(separator: string = " "): string | number {
    let duration = this.ms;
    
    if (duration.isNaN()) {
      return NaN
    }

    const output: string[] = [];
    const negative: boolean = duration.isNegative();

    if (negative) {
      duration = duration.abs();
    }

    for (const [type, value] of TimeValues) {
      const division: BigNumber = duration.dividedBy(value);

      if (division.isLessThan(1)) {
        continue;
      }

      const floored: BigNumber = division.integerValue(BigNumber.ROUND_FLOOR);
      duration = duration.minus(floored.times(value));

      output.push(this.addUnit(floored, this.units[type], "", { compact: true }));
    }

    return output.length > 0 ? `${negative ? "-" : ""}${output.join(separator)}` : "0";
  }

  public json(): string {
    let duration = this.ms;
    
    if (duration.isNaN()) {
      return "{}"
    }

    const result: { [key: string]: BigNumber } = {};

    for (const [type, value] of TimeValues) {
      const count: BigNumber = duration.dividedBy(value).integerValue(BigNumber.ROUND_FLOOR);
      duration = duration.modulo(value);
      result[type] = count;
    }

    return JSON.stringify(result);
  }

  private calculateOffset(pattern: string): BigNumber {
    let result: BigNumber = new BigNumber(0);
    let valid: boolean = false;

    if (typeof pattern === "string") {
      pattern = pattern
      .replace(Duration.commaRegex, "")
      .replace(Duration.aAndAnRegex, "1")
      .replace(Duration.patternRegex, (_, i, units) => {
        const token = tokens.get(units);
        if (token !== undefined) {
          const num = new BigNumber(i);
          result = result.plus(num.times(token));

          //@ts-ignore
          this[TimeMappings.get(token)!] += num.toNumber();
          
          valid = true;
        }
        
        return "";
      });
    } else {
      throw new Error("Invalid pattern");
    }

    return valid ? result : new BigNumber(NaN);
  }

  private addUnit(time: BigNumber, unit: { [key: string]: string }, separator: string, options: { compact?: boolean } = {}): string {
    const formattedTime: string = time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (options.compact === true) {
      if (time.gt(0)) {
        return `${formattedTime}${unit.COMPACT}${separator}`;
      } else {
        return "";
      }
    } else {
      if (Reflect.has(unit, time.toString())) {
        return `${time}${separator}${Reflect.get(unit, time.toString())}`;
      } else {
        return `${time}${separator}${unit.DEFAULT}`;
      }
    }
  }

  private padWithZero(time: BigNumber): string {
    return time.toString().padStart(2, "0");
  }

  // private joinWithConjunction(arr: string[], separator: string): string {
  //   console.log(arr)
  //   if (arr.length === 0) return "";
  //   if (arr.length === 1) return arr[0];
  //   if (arr.length === 2) return arr.join(` and${separator}`);
  //   return arr.slice(0, -1).join(`, `) + arr.slice(-1);
  // }

  private joinWithConjunction(arr: string[], separator: string): string {
    // Check if the output array has only one item
    if (arr.length === 0) {
      return "";
    } else if (arr.length === 1) {
      return arr[0];
    } else if (arr.length === 2) {
      return `${arr[0]} and ${arr[1]}`;
    } else {
      const lastItem = arr.pop();
      return `${arr.join(", ")} and ${lastItem}`;
    }
  }
}