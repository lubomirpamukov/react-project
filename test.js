const vegetables = [
    { name: 'Onion', price: 12, country: 'Bulgaria' },
    { name: 'Patato', price: 2, country: 'Bulgaria' },
    { name: 'Cucumber', price: 4, country: 'Bulgaria' },
  ];
  
  const sortConfig = (valueA, valueB, property, isReverse = false) => {
    const reverseIndex = isReverse ? -1 : 1;
  
    const propertyA = valueA[property];
    const propertyB = valueB[property];
  
    if (typeof propertyA === 'string' && typeof propertyB === 'string') {
      return propertyA.localeCompare(propertyB) * reverseIndex;
    }
  
    return (propertyA - propertyB) * reverseIndex;
  };
  
  
  
  vegetables.sort((a, b) => sortConfig(a, b, 'price', false));
  
  console.log(vegetables);