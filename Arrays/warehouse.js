// itemId is ID of item

function warehouse(itemId, warehouseItems) {
  if (warehouseItems.indexOf(itemId) !== -1)
    return warehouseItems.indexOf(itemId);
  warehouseItems.push(itemId);
  const latestWarehouse = warehouseItems.sort((a, b) => a - b);
  return latestWarehouse.indexOf(itemId);
}

const warehouseItems = [2, 3, 4, 10, 11, 23, 34, 45, 56];
const newItemId = 35;

console.log(warehouse(newItemId, warehouseItems));
