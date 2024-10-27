export async function checkJsonData(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    // initialize checkData for Swiggy Restaurant data
    let checkData =
      jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("checkData", checkData);

    // if checkData is not undefined then return it
    if (checkData !== undefined) {
      return checkData;
    }
  }
}

export function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export function joinCuisines(arr) {
  const disparr = arr.length > 5 ? arr.slice(0, 4) : arr;
  let joinarr = disparr.join(", ");
  if (arr.length > 5) {
    joinarr += ", ...";
  }
  return joinarr;
}
