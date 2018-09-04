describe ('Airport', function() {
  var airport;

  describe('when not stormy', function() {

    beforeEach(function() {
      airport = new Airport();
      plane = new Plane();
    })

    it('allows a plane to land', function() {
      expect(airport.land(plane)).toEqual("Plane has landed");
    });

    it('allows a plane to take off', function() {
      expect(airport.TakeOff(plane)).toEqual("Plane took off");
    });

  });

});
