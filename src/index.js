module.exports = function toReadable (number) {

    var numbers1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    var numbers2 = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    
    let i = number.toString().length;
    
    if(number === 0){
        return 'zero';
    }
    else if (number<20){
        return `${numbers1[number-1]}`;    
    }
    else if (number%100===0) {
        return `${numbers1[number/100-1]} hundred`; 
    }
    else if (number%10===0 && i===2) {
        return `${numbers2[number/10-1]}`; 
    }
    else if (number%100<20 && i===3)  { return `${numbers1[Math.trunc(number/100)-1]} hundred ${numbers1[number%100-1]}`; }
    else if (number%10===0 && i===3) {
        return `${numbers1[Math.trunc(number/100)-1]} hundred ${numbers2[(number/10)%10-1]}`; 
    }
    else if (number>20 && i===2){
        return `${numbers2[Math.trunc(number/10)-1]} ${numbers1[number%10-1]}`; 
    } 
    else { return `${numbers1[Math.trunc(number/100)-1]} hundred ${numbers2[Math.trunc((number/10))%10-1]} ${numbers1[number%10-1]}`; }

}