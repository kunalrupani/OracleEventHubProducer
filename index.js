var kafka = require('kafka-node');
var Producer = kafka.Producer;
var client = new kafka.Client('xx.xx.xx.xx:2181');
var  producer = new Producer(client);

let payloads = [
        { topic: 'paasproductmgmt-kKafkaTopic', messages: '*', partition: 0 }
    ];

console.log(payloads[0].messages);
setInterval(function() {
  console.log('called about every 1 second');
  producer.send(payloads, function (err, data) {
        console.log(data);});
  if(payloads[0].messages.length<10){      
    payloads[0].messages = payloads[0].messages + "*";    
  } 
  else {
    payloads[0].messages ="*";
  }
}, 1000);



//***************** Experimental Code below ********************* //

// var KeyedMessage = kafka.KeyedMessage
// var km = new KeyedMessage('key', 'message'),
//     payloads = [
//         { topic: 'paasproductmgmt-KunalsTopic', messages: 'hi', partition: 0 },
//         { topic: 'paasproductmgmt-KunalsTopic', messages: 'world', partition: 0 },
//         { topic: 'paasproductmgmt-KunalsTopic', messages: ['hello', 'world', km] } 
//     ];


// producer.on('ready', function () {
//     producer.send(payloads, function (err, data) {
//         console.log(data);
//     });
   
// });
// producer.on('error', function (err) {})

