function Qr(){
    let counter = 0;

    function increment(){
        counter++;
    }

    function decrement(){
        if(counter > 0){
           counter--; 
        }
    }

    function value(){
        return counter;
    }

    return {
        increment,
        decrement,
        value
    }

}