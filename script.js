const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    let finalans=[];
    let i=0;
    
    let tempsum=0;
    let tempans=[];
    while(i<arr.length){
        tempsum+=arr[i];
        if(tempsum<=n){
            tempans.push(arr[i]);
            i++;
            continue;
        }
        else{
          finalans.push(tempans);
          tempsum=0;
          tempans=[];
        }

      


       
    }
    if(tempans.length>0){
        finalans.push(tempans);
    }
    
    // Write your code here
return finalans;

      
  };

 const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
