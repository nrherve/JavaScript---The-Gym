const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value){
        if(propName === 'Payment'){
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.Payment = 1000;
console.log(richard.Payment);