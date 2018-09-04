describe ('Airport', function() {
  var airport
  var plane

  describe('when not stormy,', function() {

    beforeEach(function() {
      airport = new Airport();
      plane = new Plane();
      weather = {
        isStormy: function() {
        }
      };

      spyOn(weather, "isStormy").and.returnValue(false);
      weather.isStormy();
      dummyWeather = weather.isStormy();
    });

    it('says not stormy', function() {
      expect(dummyWeather).toEqual(false);
    });

    it('allows a plane to land', function() {
      expect(airport.land(plane)).toEqual('Plane had landed')

    });

    it('allows a plane to take off', function() {
      expect(airport.takeOff(plane)).toEqual('Plane took off');
    });

  });

});
