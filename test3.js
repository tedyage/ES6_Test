{
    //1.let 与 const的区别
    //const声明必须立即初始化，let可以声明完成后，再初始化。
    //const初始化之后，不可修改。
}

{
    //2.ES6中的Set如何去重
    let array = [1,1,1,1,2,3,4,4,5,3];
    let set = new Set(array);
    console.log(set);
}