{
    //1.ES6都出了那些新的特性，平时用到的都有哪些
    console.log(`
    1）块级作用域，let/cont声明关键字。
    2）变量的解构赋值，方法参数的解构传值。
    3）字符串的新方法，startsWith/endsWith/includes/repeat，还有模板字符串。
    4）数组的新方法，map()/reduce()/filter()/forEach()。
    5）iterator接口，for循环 for(let item of arr)。
    6）函数参数默认值，rest参数，箭头函数。
    7）Promise。
    8）Generator。
    9）async/await。
    10）面向对象，class关键字定义一个类，extents实现集成，super实现执行超类方法。
    11）module体系。`);
}

{
    //2.使用解构赋值，实现两个变量的值的转换
    let [a,b] = [1,2];
    console.log(a,b);
    [a,b] = [b,a];
    console.log(a,b);
}

{
    //3.使用解构赋值，完成函数的参数默认值
    function f({a='hello',b="world"}={}){
        console.log(a,b);
    }

    f();
}

{
    //4.利用数组推导，计算出[1,2,3,4]每一个元素的平方并组创新的数组。
    let arr1 = [1,2,3,4];
    let arr2 = arr1.map((n)=>n*n);
    console.log(arr2);
}

{
    //5.使用模板字符串，改写下面的代码
    let iam = '我是';
    let name = '王德发';
    let str = '大家好，'+iam+name+',多指教。';
    console.log(str);
    let str2=`大家好，${iam}${name},多指教。`;
    console.log(str2);
}

{
    //6用对象的简洁表示法改写下面的代码。
    let name = "王德发";
    let obj = {
        'name':name,
        'say':function(){
            alert('hello world');
        }
    };
    console.log("什么事对象的简洁表示法？");
}

{
    //7.用箭头函数的形式改写下面的代码。
    let arr = ['a','b','c'];

    arr.forEach(function(v,i){
        console.log(i);
        console.log(v)
    });

    arr.forEach((v,i)=>{
        console.log(i);
        console.log(v);
    });
}

{
    //10.阅读下面的代码，并用for...of改成它。
    let arr = [11,22,33,44,55];
    let sum = 0;
    for(let i = 0; i< arr.length;i++){
        sum+=arr[i];
    };
    console.log(sum);
    sum = 0;
    for(let i of arr){
        sum+=i;
    }
    console.log(sum);
}

{
    //11.关于Set结构，阅读下面的代码，回答问题。
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s.size);   //2
    /*
    如果回答为1的，多必是记得Set结构是不会存储相同的值。
    其实在这个案例中，两个数组[1]并不是同一个值，它们分别定义的数组，在内存中分别对应着不同的存储地址，因此并不是相同的值。
    所以都能存储到Set结构中，size为2。
    */
}

{
    //12.关于Map结构，阅读下面的代码回答问题。
    let map = new Map();
    map.set([1],'ES6系列');
    let con = map.get([1]);
    console.log(con);   //undefined
    /*
    因为Set的时候用的数组[1]和get的时候用的数组[1]是分别两个不同的数组，只不过他们的元素都是1。
    它们是分别定义的两个数组，并不是同一个值。
    如果想要达到与去的效果，要保证get的时候，和set的时候用同一个数组。
    */

    let map1 = new Map();
    let arr = [1];
    map1.set(arr,"ES6系列");
    let con1 = map1.get(arr);
    console.log(con1)     //ES6系列
}

{
    //13.定义一个类Animal，通过传参初始化它的类型，如：“猫科类”。它有一个实例方法：run，run函数体内容可自行定义。
    class Animal{
        constructor (type){
            this.type = type;
        }
        run(){
            console.log("I can run.");
        }
    }

    var animal = new Animal('Animal');
    console.log(animal.type);

    class Cat extends Animal{
        constructor(type,name,age){
            super();
            this.type = type;
            this.name = name;
            this.age = age;
        }

        eat(){
            console.log('I am eating');
        }
    }

    let cat = new Cat('Cat','Caffe',10);
    console.log(cat.type);
    console.log(cat.name);
    console.log(cat.age);
    cat.run();
    cat.eat();
}

{
    //8.设计一个对象，键名的类型至少包含一个Symbol类型，并且实现遍历所有key。
    let key = Symbol('name');
    var obj = {
        [key]:'洗衣机',
        Price:799
    };
    console.log(obj[key]);
    console.log(obj.Price);
    console.log(obj);

    Reflect.ownKeys(obj);
}

{
    /*
    9.有一本书的属性为：{“name”:“《ES6基础系列》”, ”price”：56 }；要求使用Proxy对象对其进行拦截处理，
      name属性对外为“《ES6入门到懵逼》”,price属性为只读。
    */

    let book = {
        'name':'《ES6基础系列》',
        'price':56
    };
    console.log(book.name);
    console.log(book.price);

    let proxy = new Proxy(book,{
        get:function(target,property){
            if(property==="name"){
                return "《入门到精通》";
            }else{
                return target[property];
            }
        },
        set:function(target,property,value){
            if(property==='price'){
                target[property] = 56;
            }
        }
    });

}


