type Status = "admin" | "user" | "guest";
type ExcludeGuest = Exclude<Status, "guest">; // Exclude the "guest" type from Status

const userStatus: ExcludeGuest = "admin"; // Valid
const anotherUserStatus: ExcludeGuest = "user"; // Valid
// const invalidStatus: ExcludeGuest = "guest"; // Error: Type '"guest"' is not assignable to type 'ExcludeGuest'

console.log(userStatus, anotherUserStatus);
