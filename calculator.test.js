const sum = (a,b)=>{
    return 7;
};   

test(`sum`,()=>{
    expect(sum(3,4)).toBe(7);
    expect(sum(3,9)).toBe(12);
}) 


