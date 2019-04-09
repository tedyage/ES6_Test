{
//1.把以下代码使用两种方法，来依次输出0到9？

    var funcs = [];
    for(var i = 0; i < 10; i++){
        funcs.push(function(){console.log(i);});
    }
    funcs.forEach(function(func){
        func()         
    });
    //10,10,10,10,10,10,10,10,10,10

    {
        //方法1，利用let的块级作用域
        var funcs = [];
        for(let i = 0; i< 10; i++){
            funcs.push(function(){console.log(i)});
        }
        funcs.forEach(function(func){
            func()         
        });
    }
    {
        //2.利用IIFE，封闭函数作用域
        var funcs = [];
        for(var i = 0; i < 10; i++){
            (function(a){
                funcs.push(function(){console.log(a);});
            })(i);
        }
        funcs.forEach(function(func){
            func();
        })
    }
}

{
    //2.模板字符串有哪些新特性
    //1）模板字符串可以将表达式插入到模板字符串中，用${}插入。
    //2）模板字符串识别特殊字符。
    //3）模板字符串识别空格和换行符。
}

{
    //3.箭头函数有哪些新特点
    //1）省略了function关键字。
    //2）如果函数参数只有一个，那么参数的括号()可以省略。
    //3）如果函数体内只有一个语句，那么函数体的尖括号{}可以省略。
    //4）继承当前上下文中的this关键字。
}

{
    //4.以下代码依次输出内容是什么？
    setTimeout(function(){
        console.log(1);
    },0);

    new Promise(function executor(resolve){
        console.log(2);
        for(var i=0 ; i<10000;i++){
            i==9999&&resolve();
        }
        console.log(3);
    }).then(function(){
        console.log(4);
    });

    console.log(5);
    //2,3,5,4,1
}

{
    //5.Promise的原理？jQuery的ajax返回的是promise对象吗？
    //1)Promise的原理。
    //Promise对象有三种状态，分别是pending,fulfilled,reject。
    //Promise对象内部的回调函数执行的最终状态只能是fulfilled或者reject。
    //Promise对象内部回调函数如果执行状态是resolved，则执行当前对象的then方法，如果执行状态是rejected，则执行当前对象的catch方法。
    //2）jQuery的ajax返回的是promise对象吗？
    //不是，返回的是deferred对象。

    //6.Promise的状态只有resolved和rejected，如果保证一个方法在两种状态下都会执行？
    //Promise.prototype.finally()

    //7.Promise.all()是做什么用的，怎么用
    //Promise.all是将多个promise对象包装成一个Promise对象，只有那些Promise对象的状态都是fullfilled，这一个Promise对象的状态才是fullfilled，
    //如果那些Promise对象的其中一个状态是rejected，这一个Promise对象的状态的状态就是rejected。
    //其用法是：将那些Promise对象组成数组，以Promise对象数组的形式传入到Promise.all()方法中，再执行方法里面的执行逻辑。
    //注意，数组内必须全部是Promise对象，如果有不是的，需要将其转换成Promise对象。
    {
        let p1 = new Promise((resolve,reject)=>resolve('Hello'));

        let p2 = new Promise((resolve,reject)=>setTimeout(function(){
            resolve('World');
        },2000));

        let p = Promise.all([p1,p2]).then(data=>console.log(data)).catch(error=>console.error(error.message));

        new Promise((resolve,reject)=>reject('出错了')).then((data)=>console.log(data)).catch((error)=>console.error(error)).finally(()=>console.log('finally'));
    }
}


