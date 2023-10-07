var my_object = {key_1:'some text', key_2:true, key_3:5};
var object_as_string = JSON.stringify(my_object);
// console.log(object_as_string);
// typeof(object_as_string);
 var object_as_string_as_object = JSON.parse(object_as_string);
 console.log(object_as_string_as_object);