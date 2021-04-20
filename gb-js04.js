function getObjNum(num) {
    const strNum = String(num);

    switch (strNum.length){
        case 1: 
            return {
                one: (strNum[0]) ? Number(strNum[0]) : 0
            };
        case 3:  
            return {
                hundred: (strNum[2]) ? +strNum[2] : 0,
                ten: (strNum[1]) ? +strNum[1] : 0,
                one: (strNum[0]) ? Number(strNum[0]) : 0
            };
        case 2:  
            return {
                ten: (strNum[1]) ? +strNum[1] : 0,
                one: (strNum[0]) ? Number(strNum[0]) : 0
            };
        default: 
            return {
                
        }
    }
}

console.log(getObjNum(53))

console.log(getObjNum(444))

console.log(getObjNum(722))

console.log(getObjNum(2))

console.log(getObjNum(1188))