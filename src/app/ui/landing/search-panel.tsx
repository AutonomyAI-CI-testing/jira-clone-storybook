import { useState } from "react";
import cx from "classix";
import { Button } from "@app/components/button";
import * as Select from "@app/components/select";

type SpaceCategory = "commercial" | "residential";
type BookingPeriod = "hourly" | "monthly";

const MIN_PRICE = 0;
const MAX_PRICE = 5000;

const propertyTypeOptions = [
  { value: "any", label: "Any property type" },
  { value: "office", label: "Office" },
  { value: "retail", label: "Retail" },
  { value: "warehouse", label: "Warehouse" },
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
];

const spaceTypeOptions = [
  { value: "any", label: "Any space type" },
  { value: "entire-place", label: "Entire place" },
  { value: "private-room", label: "Private room" },
  { value: "shared-room", label: "Shared room" },
  { value: "desk", label: "Desk" },
];

export const SearchPanel = (): JSX.Element => {
  const [category, setCategory] = useState<SpaceCategory>("commercial");
  const [period, setPeriod] = useState<BookingPeriod>("hourly");
  const [location, setLocation] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("any");
  const [spaceType, setSpaceType] = useState<string>("any");
  const [minPrice, setMinPrice] = useState<number>(500);
  const [maxPrice, setMaxPrice] = useState<number>(2500);

  const onMinPriceChange = (value: number) => {
    setMinPrice(Math.min(value, maxPrice - 100));
  };

  const onMaxPriceChange = (value: number) => {
    setMaxPrice(Math.max(value, minPrice + 100));
  };

  const minPercent = ((minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
  const maxPercent = ((maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const tabClass = (isActive: boolean): string =>
    cx(
      "cursor-pointer border-b-2 px-1 pb-2 font-primary-bold text-sm",
      isActive
        ? "border-black text-black"
        : "border-transparent text-font-subtlest hover:text-black"
    );

  const periodClass = (isActive: boolean): string =>
    cx(
      "cursor-pointer rounded-full px-4 py-1.5 font-primary text-sm",
      isActive ? "bg-black text-white" : "text-black hover:bg-background-neutral"
    );

  return (
    <div className="w-full max-w-[1100px]">
      <div className="mb-4 flex justify-center gap-8">
        <button
          className={tabClass(category === "commercial")}
          onClick={() => setCategory("commercial")}
          aria-pressed={category === "commercial"}
        >
          Commercial
        </button>
        <button
          className={tabClass(category === "residential")}
          onClick={() => setCategory("residential")}
          aria-pressed={category === "residential"}
        >
          Residential
        </button>
      </div>
      <div className="flex items-center gap-4 rounded-lg bg-elevation-surface-overlay px-6 py-4 shadow-md">
        <div className="flex flex-1 flex-col gap-1">
          <label
            htmlFor="location"
            className="font-primary text-2xs text-font-subtlest"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Type a location"
            className="w-full border-none bg-transparent font-primary text-sm text-black outline-none placeholder:text-font-subtlest"
          />
        </div>
        <div className="h-10 w-px bg-background-neutral" />
        <div className="flex flex-1 flex-col gap-1">
          <span className="font-primary text-2xs text-font-subtlest">
            Property Type
          </span>
          <Select.Root value={propertyType} onValueChange={setPropertyType}>
            <Select.Trigger
              className="w-full justify-between bg-transparent px-0 text-black hover:bg-transparent active:bg-transparent"
              aria-label="Select property type"
            >
              <Select.Value placeholder="Select" />
              <Select.TriggerIcon />
            </Select.Trigger>
            <Select.Content>
              <Select.Viewport>
                {propertyTypeOptions.map((option) => (
                  <Select.Item key={option.value} value={option.value}>
                    <Select.ItemIndicator />
                    <Select.ItemText>{option.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
        </div>
        <div className="h-10 w-px bg-background-neutral" />
        <div className="flex rounded-full bg-background-neutral p-1">
          <button
            className={periodClass(period === "hourly")}
            onClick={() => setPeriod("hourly")}
            aria-pressed={period === "hourly"}
          >
            Hourly
          </button>
          <button
            className={periodClass(period === "monthly")}
            onClick={() => setPeriod("monthly")}
            aria-pressed={period === "monthly"}
          >
            Monthly
          </button>
        </div>
        <div className="h-10 w-px bg-background-neutral" />
        <div className="flex flex-1 flex-col gap-1">
          <span className="font-primary text-2xs text-font-subtlest">
            Space Type
          </span>
          <Select.Root value={spaceType} onValueChange={setSpaceType}>
            <Select.Trigger
              className="w-full justify-between bg-transparent px-0 text-black hover:bg-transparent active:bg-transparent"
              aria-label="Select space type"
            >
              <Select.Value placeholder="Select" />
              <Select.TriggerIcon />
            </Select.Trigger>
            <Select.Content>
              <Select.Viewport>
                {spaceTypeOptions.map((option) => (
                  <Select.Item key={option.value} value={option.value}>
                    <Select.ItemIndicator />
                    <Select.ItemText>{option.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
        </div>
        <div className="h-10 w-px bg-background-neutral" />
        <div className="flex w-[180px] flex-col gap-1">
          <span className="font-primary text-2xs text-font-subtlest">
            Price
          </span>
          <div className="relative flex h-6 items-center">
            <div className="absolute h-1 w-full rounded-full bg-background-neutral" />
            <div
              className="absolute h-1 rounded-full bg-black"
              style={{
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
              }}
            />
            <input
              type="range"
              aria-label="Minimum price"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={50}
              value={minPrice}
              onChange={(event) => onMinPriceChange(Number(event.target.value))}
              className="pointer-events-none absolute h-1 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
            />
            <input
              type="range"
              aria-label="Maximum price"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={50}
              value={maxPrice}
              onChange={(event) => onMaxPriceChange(Number(event.target.value))}
              className="pointer-events-none absolute h-1 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
            />
          </div>
          <div className="flex justify-between font-primary text-2xs text-font">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
        </div>
        <Button
          color="neutral"
          variant="contained"
          className="rounded-full bg-black px-8 py-2.5 text-sm text-white hover:bg-black active:bg-black"
          aria-label="Search spaces"
        >
          Search
        </Button>
      </div>
    </div>
  );
};
