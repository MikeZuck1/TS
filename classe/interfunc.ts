interface Admin {
  location: string;
  map?: string; // Optional property
}

function adm(admin: Admin): any {
  console.log(admin.location);
  console.log(admin.map);
}

console.log(adm({ location: "New York", map: "map.png" }));

// Function type interface
interface researchfunction {
  (criteria: string): string;
}
