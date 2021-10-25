export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}

export function isNotNull<T>(
  value: (T | null | undefined)[] | null | undefined
) {
  let array = [] as T[];
  if (value) {
    array = value.filter(notEmpty);
  }
  return array;
}

export function GetToday() {
  return new Date().toISOString().split("T")[0];
}
export const groupBy = (data: { [key: string]: any }[], key: string) => {
  // `data` is an array of objects, `key` is the key (or property accessor) to group by
  // reduce runs this anonymous function on each element of `data` (the `item` parameter,
  // returning the `storage` parameter at the end
  return data.reduce(function (storage, item) {
    // get the first instance of the key by which we're grouping
    var group = item[key];

    // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
    storage[group] = storage[group] || [];

    // add this item to its group within `storage`
    storage[group].push(item);

    // return the updated storage to the reduce function, which will then loop through the next
    return storage;
  }, {}); // {} is the initial value of the storage
};

//Will Check for keys on the given interface.
export function extract<T>(properties: Record<keyof T, true>) {
  return function <TActual extends T>(value: TActual) {
    let result = {} as T;
    for (const property of Object.keys(properties) as Array<keyof T>) {
      result[property] = value[property];
    }
    return result;
  };
}
/* export function OrderBy(array:{[key:string]:any}[], property:string){
  let sorted = array.sort((a,b)=>(a[property] > b[property] ? 1: -1));
  return sorted;
} */

export function OrderBy<T extends { [key: string]: any }>(
  array: T[],
  property: string
): T[] {
  let sorted = array.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  return sorted;
}

export function checkValuesData<T>(array: T[]): T[] {
  return array.map((record) => {
    return Object.entries(record).reduce(
      (recordEntriesModified: any, [key, value]) => {
        return {
          ...recordEntriesModified,
          [key]:
            typeof value === "number" ||
            (typeof value === "string" && value.length)
              ? value
              : "N/A",
        };
      },
      {}
    );
  });
}

type valueOf<T> = T[keyof T];
export function nameOf<T, V extends T[keyof T]>(
  f: (x: T) => V
): valueOf<{ [K in keyof T]: T[K] extends V ? K : never }>;
export function nameOf(f: (x: any) => any): keyof any {
  var p = new Proxy(
    {},
    {
      get: (target, key) => key,
    }
  );
  return f(p);
}

export function getUniqueBy<T extends { [key: string]: any }>(
  arr: T[],
  prop: string
) {
  const set = new Set();
  return arr.filter((o) => !set.has(o[prop]) && set.add(o[prop]));
}

/* export const multipleGroupByArray = <T>(dataArray:T[], groupPropertyArray:(item:T|{[key:string]:string})=>(string|null)[]) => {

  //get properties
  const properties = getPropertyName(dataArray[0], groupPropertyArray) as string[];
  const groups:{[key:string]:any} = {};

  let test = dataArray.map((item)=>{
    return nestedGroupBy(item, properties, groups)
  })


/*   const test = dataArray.reduce((accum, current) => {
    let curr = current as {[key:string]:any};
    let groups = properties.reduce((store, item)=>{
      var group = curr[item];
      store[group] = store[group] || [];
      store[group].push(item);
      return store;
    },{} as {[key:string]:any});
    groups.array.forEach(element => {
      accum[element] = accum[element] || [];

    });
      return accum;
  }, groups) 

    dataArray.forEach(item => {
        const group = JSON.stringify(properties);
        groups[group] = groups[group] || [];
        groups[group].push(item);
    });
    return Object.keys(groups).map(function(group) {
        return groups[group];
    });
} */

/* const nestedGroupBy=(item:{[key:string]:any}, properties:string[], groupedObj:{[key:string]:any}) : {[key:string]:any}=> {
  
    let group = {} as {[key:string]:any};
    let currentProp = properties[0];
    let propName = item[currentProp];

    if(properties.length > 1){
      let remainingProps = properties.slice(1);
      let value = nestedGroupBy(item, remainingProps);
      group[propName] = value
      return group;
    }
    group[propName] = item
    return group;
} */
