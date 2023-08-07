// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth() +1;
// const myday=12;
// const mymonth=8;
// let re = day == myday && month == mymonth;
// console.log(re);
let num=15;

if(num%2==0)
{
    console.log("is even")
}
    else{
        console.log("is odd")

    }

    let grade=50;
    if(grade>90){
        console.log("A")
    }
    else{
        if(grade>80&&grade<89){
            console.log("B")
        }
        else{
            if(grade>70&&grade<79){
                console.log("C")
            }
            else{
                if(grade>60&&grade<69){
                    console.log("D")
                }
                else{
                    if(grade<59)
                    console.log("F")
                }
            }
        }
    }


    if(num%3==0 && num%5==0){
        console.log("fizpuz")
    }
    else{
        if(num%3==0 ){
            console.log("fiz")
        }
        else{
            if(num%5==0){
                console.log("puz")
            }
        }
    }
    for(let i=1;i <= 10; i++ ){
        let sq=i**2;
        console.log(sq);
    }
    for( let i=1; i<=20; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
    // 
    for( let i=1; i<=25; i++){
        if(i%2==0){
            console.log(i);
        }
    }
    
    let n="";
    for(let i=1; i<=8; i++){
        for(let j=i; j<=i ; j++){
            n+=j+" ";
        }
        console.log(n);
        console.log("\n");
    }
    // 

    let a=0;
    let b=1;
    let next;
    
for(let i=0; i<=20; i++){
    console.log(a);
    next=a+b;
    a=b;
    b=next;
}

    