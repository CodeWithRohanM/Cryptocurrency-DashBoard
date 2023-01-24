import Sum from "./Sum";

//First Test
test("check Int Result", ()=>{
    const getResult = Sum(2,5);

    expect(getResult).toBe(7);
});


//Second Test
test("To be String Result", ()=>{
    const getResult = Sum("3", "34");

    expect(getResult).toBe(37);
});

//Third Test




