function split(string,mask) {
    let newArray=[];
    function sum(array){
        return array.reduce((acc, val)=> acc + val, 0);
    }
        for(let i = 0; i<mask.length; i++){
            let index = 0;
            for(let m=0; m<mask.length; m++){
                if(m===i){
                    break;
                }
                else{
                    index = index+mask[m];
                }
            }
            newArray.push(string.slice(index,index+mask[i]));
        }
        return (sum(mask)==string.length) ? newArray : null;
    }
    

console.log(split('1234567890',[3,3,4]));
