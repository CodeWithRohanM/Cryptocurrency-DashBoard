import {cleanUp} from "@testing-library/react";
afterEach(()=>{
    cleanUp;
});

const Sum = (a, b) => {
    return parseInt(a) + parseInt(b);
}

export default Sum;