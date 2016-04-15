(function () {


  function isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }

      return true && JSON.stringify(obj) === JSON.stringify({});
  }



  console.log(isEmpty({}));
  console.log(isEmpty("Hello"));
  console.log(isEmpty([1,2,3]));
  console.log(isEmpty({length: 0, custom_property: []}));

})();
