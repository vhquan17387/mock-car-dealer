const BASE_URL = import.meta.env.BASE_URL;

export function getPrice(num) {
  const roundTwoDecimal = num.toFixed(2);
  return `$${roundTwoDecimal}`;
}

export const getAssetPath = (path) => `${BASE_URL}${path}`;

export const filterCars = (cars, filters, searchKey) => {
  return cars.filter((car) => {
    if (
      searchKey &&
      searchKey.length > 0 &&
      !car.model.toLowerCase().includes(searchKey.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.Model &&
      filters.Model.length > 0 &&
      !filters.Model.some((model) => car.model.includes(model))
    ) {
      // Check Model
      return false;
    }

    // Check Color
    if (
      filters.Color &&
      filters.Color.length > 0 &&
      !filters.Color.some((color) => car.color.includes(color.toLowerCase()))
    ) {
      return false;
    }

    // Check Seats
    const seats = car.productAttributes.find(
      (attr) => attr.key === "Seats"
    )?.value;
    if (
      filters.Seat &&
      filters.Seat.length > 0 &&
      !filters.Seat.includes(seats)
    ) {
      return false;
    }

    // Check Fuel Type
    const fuelType = car.productAttributes.find(
      (attr) => attr.key === "Fuel Type"
    )?.value;
    if (
      filters["Fuel Type"] &&
      filters["Fuel Type"].length > 0 &&
      !filters["Fuel Type"].includes(fuelType)
    ) {
      return false;
    }

    // Check Transmission
    const transmission = car.productAttributes.find(
      (attr) => attr.key === "Transmission"
    )?.value;
    if (filters.Transmission && !filters.Transmission.includes(transmission)) {
      return false;
    }

    // Check Year
    const year = parseInt(car.registrationDate.split(" ")[2], 10);
    if (filters.Year && !filters.Year.includes(year)) {
      return false;
    }

    // Check Price
    const priceValue = parseInt(car.price.replace(/[$,]/g, ""), 10);
    if (filters.PriceRange) {
      const priceMatch = filters.PriceRange.some((range) => {
        if (range.includes("Below")) {
          const maxPrice = parseInt(range.match(/\$(\d+)/)?.[1] || "0", 10);
          return priceValue < maxPrice;
        } else {
          const [minPrice, maxPrice] = range
            .match(/\$(\d+)/g)
            .map((p) => parseInt(p.replace(/[$,]/g, ""), 10));
          return priceValue >= minPrice && priceValue <= maxPrice;
        }
      });

      if (!priceMatch) {
        return false;
      }
    }

    return true;
  });
};
