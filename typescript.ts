type User = {
    name: string;
    age: number;
};

function isAdult(user: User) : Boolean {
    return user.age >= 18;
}

const justine: User = {
    name: "Justine",
    age: 20,
};

const isJustineAnAdult: Boolean = isAdult(justine);
