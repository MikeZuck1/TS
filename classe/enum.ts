enum ADMIN_ROLE {
  READ_ONLY = 10,
  READ_WRITE,
  MANAGE_USERS,
  MANAGE_ORDERS,
  MANAGE_CONTENT,
  MANAGE_SETTINGS,
  CONFIGURE_SYSTEM,
}

console.log(ADMIN_ROLE.READ_ONLY); // Output: 10
console.log(ADMIN_ROLE.READ_WRITE); // Output: 11
console.log(ADMIN_ROLE.MANAGE_USERS); // Output: 12
console.log(ADMIN_ROLE.MANAGE_ORDERS); // Output: 13
console.log(ADMIN_ROLE.MANAGE_CONTENT); // Output: 14
console.log(ADMIN_ROLE.MANAGE_SETTINGS); // Output: 15
console.log(ADMIN_ROLE.CONFIGURE_SYSTEM); // Output: 16
// function getAdminRole(role: ADMIN_ROLE): string {};
