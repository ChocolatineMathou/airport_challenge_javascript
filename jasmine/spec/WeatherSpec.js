describe ('Weather', function() {
  var weather;

  describe('it says', function() {
    let isStormy = 10
    it('stormy', function() {
      expect(weather.isStormy()).toBeFalse()
    });

    // it('not stormy', function() {
    //   expect(weather.isStormy()).toBeTrue()
    //
    // });
  });

});
