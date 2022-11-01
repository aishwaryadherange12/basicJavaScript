let i = 1
while(i<=5){
    if(i==3){
        break
    }
      console.log(i) //1 2
      i++
}
let i2 = 1
while(i2<=5){
    console.log(i2) //1 2 3
    if(i2==3){
        break
    }
      i2++
}
for(i = 0 ; i<5 ; i++){ //i=0 , i=1 ,i=2 , i=3, i= 4,i=5
    if(i == 3)          //0==3 F , 1==3 F , 2==3 F , 3==3 T if cond true 3 not print but for loop continue  
    continue            // when if condition true skip the value and continue the for statement 
    console.log(i)      //0 , 1 , 2 , 4
}
let i6=1
while(i6<=5){// 1<=5=T, 2<=5 T,3<=5 T, 4<=5 T, 5<=5 T,6<=5 F Exit
    if(i6==3){ //1==3 F, 2==3 F, 3==3T, 4==3 F,5==3 F
        i6++;  //4
        //if we not use i6++ it will go to inifinite loop /
        //It will check again and again 3<=5 and 3==3
        continue 
    }
    console.log(i6) //1 //2 //4 //5
    i6++ //2//3 //5//6
}