export function createFilterFn<FilterFields, Item>(
  filterMatchers: FilterMatchers<FilterFields, Item>
) {
  return function filter(items: Item[], filterItems: FilterFields) {
    const definedFilters = Object.entries(filterItems).filter(
      ([, fItem]) => !!fItem && (!Array.isArray(fItem) || fItem.length > 0)
    )

    if (!definedFilters.length) {
      return items
    }
    return items.filter((item) => {
      return definedFilters.every(([key, f]) => {
        if (isObjKey(key, filterMatchers)) {
          return filterMatchers[key]?.(f, item)
        }
      })
    })
  }
}

export type FilterMatchers<FilterFields, Item> = {
  [Property in keyof FilterFields]: (
    filterValue: FilterFields[Property],
    item: Item
  ) => boolean
}

function isObjKey<T>(key: PropertyKey, obj: T): key is keyof T {
  return key in obj
}
