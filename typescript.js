function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: "Justine",
    age: 20,
};
var isJustineAnAdult = isAdult(justine);
