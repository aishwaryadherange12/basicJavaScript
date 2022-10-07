for(i = 0 ; i<5 ; i++){ //i=0 , i=1 ,i=2 , i=3
    if(i == 3)          //0==3 F , 1==3 F , 2==3 F , 3==3 T Break After 3 and for loop exit
    break               // when if condition true break the statement 
    console.log(i)      //0 , 1 , 2
}
for(i = 0 ; i<5 ; i++){ //i=0 , i=1 ,i=2 , i=3
    console.log(i)      // 0 , 1 , 2 , 3   
    if(i == 3)          //0==3 F , 1==3 F , 2==3 F , 3==3 T Break 
                // After 3 due to console.log before if statement 3 print and when cond true for loop exit
    break               // when if condition true break the statement   
}

for(i = 0 ; i<5 ; i++){ //i=0 , i=1 ,i=2 , i=3
    if(i == 3)          //0==3 F , 1==3 F , 2==3 F , 3==3 T if cond true 3 not print but for loop continue  
    continue            // when if condition true continue the statement 
    console.log(i)      //0 , 1 , 2 , 4
}