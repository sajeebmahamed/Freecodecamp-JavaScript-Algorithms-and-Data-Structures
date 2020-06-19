const dropElements = (arr, func) => arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
