# def warehouse(itemId, warehouseItems):
#     if itemId in warehouseItems:
#         return warehouseItems.index(itemId)
#     else:
#         warehouseItems.append(itemId)
#         warehouseItems.sort()
#         return warehouseItems.index(itemId)

# warehouseItems = [2, 3, 4 , 10, 11, 23, 34, 45, 56]
# newItemId = 35 
# print(warehouse(newItemId, warehouseItems))

def productDiff(listOfProducts):
    if len(listOfProducts) <=1:
        return 0
    
    counter = {}
    for item in listOfProducts:
        counter[item] = listOfProducts.count(item)
    counterValues = counter.values()

    
    maxValue = max(counterValues)
    minValue = min(counterValues)
    if maxValue - minValue > 0:
        return maxValue - minValue
    else:
        return 0
print(productDiff([2,2,2,2,2,2]))