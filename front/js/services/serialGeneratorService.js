angular.module("listaTelefonica").provider("serialGenerator", function () {
  this.getLenght = function () {
    return this.lenght;
  };

  this.setLenght = function (lenght) {
    _length = lenght;
  };

  this.$get = function () {
    var _serial = "";
    while (_serial.length < _length) {
      _serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
    }
    return {
      generate: function () {
				var serial = "";
				while(serial.length < _length) {
					serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
				}
				return serial;
			}
    };
  };
});