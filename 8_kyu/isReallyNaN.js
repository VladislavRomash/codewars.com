const isReallyNaN = (val) => {
    return Number.isNaN(val);
};

isReallyNaN(NaN)
isReallyNaN(37)
isReallyNaN(undefined)